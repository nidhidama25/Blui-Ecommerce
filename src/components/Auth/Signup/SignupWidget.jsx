import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiRequest from "../../../../utils/apiRequest";
import settings from "../../../../utils/settings";
import countries from "../../../data/CountryCodes.json";
import InputCom from "../../Helpers/InputCom";
import LoaderStyleOne from "../../Helpers/Loaders/LoaderStyleOne";
import ServeLangItem from "../../Helpers/ServeLangItem";

function SignupWidget({ redirect = true, signupActionPopup, changeContent }) {
  const router = useRouter();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+880");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setCheck] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [getCountries, setGetCountries] = useState(null);
  const [countryDropToggle, setCountryDropToggle] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("BD");
  
  const [twitterUrl, setTwitterUrl] = useState(null);
  const selectCountryhandler = (value) => {
    setSelectedCountry(value.code);
    setPhone(value.dial_code);
    setCountryDropToggle(false);
  };
  useEffect(() => {
    if (!getCountries) {
      setGetCountries(countries && countries.countries);
    }
  }, [getCountries]);

  const rememberMe = () => {
    setCheck(!checked);
  };
  const doSignup = async () => {
    setLoading(true);
    console.log("Attempting to sign up...");
    await apiRequest
      .signup({
        name: fname + " " + lname,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
        agree: checked ? 1 : "",
        phone: phone ? phone : "",
      })
      .then((res) => {
        setLoading(false);
        toast.success(res.data.notification);
        if (redirect) {
          router.push(`/verify-you?email=${email}`);
        } else {
          changeContent();
        }
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setCheck(false);
      })
      .catch((err) => {
        setLoading(false);
        setErrors(err.response && err.response.data.errors);
      });
  };
  const { phone_number_required, default_phone_code } = settings();
  useEffect(() => {
    if (default_phone_code) {
      let defaultCountry =
        getCountries &&
        getCountries.length > 0 &&
        getCountries.find((item) => item.code === default_phone_code);
      if (defaultCountry) {
        setPhone(defaultCountry.dial_code);
        setSelectedCountry(defaultCountry.code);
      }
    }
  }, [default_phone_code, getCountries]);

  return (
    <div className="w-full">
      <div className="">
        <h1 className="text-md text-3xl text-center font-bold p-5 ">
          Create New Account
        </h1>
      </div>
      <div className="input-area">
        <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse mb-5"></div>
        <div className="input-item mb-5">
          <InputCom
            placeholder={ServeLangItem()?.Email}
            label={ServeLangItem()?.Email_Address + "*"}
            name="email"
            type="email"
            inputClasses="h-[50px]"
            value={email}
            error={!!(errors && Object.hasOwn(errors, "email"))}
            inputHandler={(e) => setEmail(e.target.value)}
          />
          {errors && Object.hasOwn(errors, "email") ? (
            <span className="text-sm mt-1 text-qred">{errors.email[0]}</span>
          ) : (
            ""
          )}
        </div>

        <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse mb-5">
          <div className="h-full">
            <InputCom
              placeholder="* * * * * *"
              label={ServeLangItem()?.Password + "*"}
              name="password"
              type="password"
              inputClasses="h-[50px]"
              value={password}
              inputHandler={(e) => setPassword(e.target.value)}
            />
            {errors && Object.hasOwn(errors, "password") ? (
              <span className="text-sm mt-1 text-qred">
                {errors.password[0]}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="h-full">
            <InputCom
              placeholder="* * * * * *"
              label={ServeLangItem()?.Confirm_Password + "*"}
              name="confirm_password"
              type="password"
              inputClasses="h-[50px]"
              value={confirmPassword}
              inputHandler={(e) => setConfirmPassword(e.target.value)}
            />
            {errors && Object.hasOwn(errors, "password") ? (
              <span className="text-sm mt-1 text-qred">
                {errors.password[0]}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="forgot-password-area mb-7">
          <div className="remember-checkbox flex items-center space-x-2.5 rtl:space-x-reverse">
            <button
              onClick={rememberMe}
              type="button"
              name="agree"
              className="w-5 h-5 text-qblack flex justify-center items-center border border-light-gray"
            >
              {checked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            {redirect ? (
              <Link href="/seller-terms-condition">
                <span className="text-base text-black cursor-pointer">
                  {ServeLangItem()?.I_agree_all_terms_and_condition_in_ecoShop}
                </span>
              </Link>
            ) : (
              <button type="button">
                <span className="text-base text-black cursor-pointer">
                  {ServeLangItem()?.I_agree_all_terms_and_condition_in_ecoShop}
                </span>
              </button>
            )}
          </div>
        </div>
        <div className="signin-area mb-5">
          <div className="flex justify-center">
            <button
              onClick={doSignup}
              type="button"
              disabled={!checked}
              className="bg-custom-blue rounded-lg  w-full h-[50px] font-semibold flex justify-center items-center"
            >
              <span className="text-sm text-white block">
                {ServeLangItem()?.Create_Account}
              </span>
              {loading && (
                <span className="w-5 " style={{ transform: "scale(0.3)" }}>
                  <LoaderStyleOne />
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="signup-area flex justify-center">
          <p className="text-base text-qgraytwo font-normal">
            {ServeLangItem()?.Already_have_an_Account}?
            {redirect ? (
              <Link href="/login">
                <span className="ml-2 text-qblack cursor-pointer ml-1">
                  {ServeLangItem()?.Log_In}
                </span>
              </Link>
            ) : (
              <button onClick={signupActionPopup} type="button">
                <span className="ml-2 text-qblack cursor-pointer ml-1">
                  {ServeLangItem()?.Log_In}
                </span>
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupWidget;
