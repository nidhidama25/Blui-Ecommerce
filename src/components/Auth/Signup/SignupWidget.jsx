import axios from "axios";
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
  // const [googleUrl, setGoogleUrl] = useState(null);
  // const [faceBookUrl, setFaceBookUrl] = useState(null);
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
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/login/google`)
      .then((res) => {
        if (res.data) {
          setGoogleUrl(res.data.url);
        }
      })
      .catch((er) => {
        console.log(er);
      });
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/login/facebook`)
      .then((res) => {
        if (res.data) {
          setFaceBookUrl(res.data.url);
        }
      })
      .catch((er) => {
        console.log(er);
      });
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/login/twitter`)
      .then((res) => {
        console.log(res);
        if (res.data) {
          setTwitterUrl(res.data.url);
        }
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);
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

        {twitterUrl && (
          <>
            <a
              href={`${twitterUrl}`}
              className="w-full border border-qgray-border text-white h-[50px] flex space-x-3  justify-center bg-[#40C6E2] items-center mb-5"
            >
              <svg
                className="fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
              </svg>
              <span className="text-[18px] font-normal text-white">
                Sign Up with Twitter
              </span>
            </a>
          </>
        )}

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
