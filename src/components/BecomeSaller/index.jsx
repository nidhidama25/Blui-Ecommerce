import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import isMultivendor from "../../../Middleware/isMultivendor";
import auth from "../../../utils/auth";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import ServeLangItem from "../Helpers/ServeLangItem";
function BecomeSaller() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [gstinNumber, setGstinNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [password, setPassword] = useState("");

  const [checked, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState(null);

  const rememberMe = () => {
    setCheck(!checked);
  };
  const sellerReq = async () => {
    if (auth()) {
      const formData = new FormData();
      formData.append("aadharNumber", aadharNumber);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("panNumber", panNumber);
      formData.append("gstinNumber", gstinNumber);
      formData.append("businessName", businessName);
      formData.append("businessAddress", businessAddress);
      formData.append("referralCode", referralCode);
      formData.append("password", password);

      formData.append("fullName", fullName);
      formData.append("agree_terms_condition", checked);

      await axios
        .post(
          `${process.env.NEXT_PUBLIC_BASE_URL}api/user/seller-request?token=${
            auth().access_token
          }`,
          formData,
          options
        )
        .then((res) => {
          toast.success(
            "Congratulation Your seller request successfully delivered"
          );

          router.push("/");
        })
        .catch((err) => {
          setErrors(err.response && err.response.data.errors);
          if (err.response && err.response.data.notification) {
            toast.error(err.response.data.notification);
          }
        });
    } else {
      router.push("/login");
      toast.warn("Please Login First");
    }
  };
  return (
    <div className="become-saller-wrapper w-full">
      <div className="title mb-10">
        <PageTitle
          title="Seller Application"
          breadcrumb={[
            { name: ServeLangItem()?.home, path: "/" },
            { name: ServeLangItem()?.Become_seller, path: "/become-seller" },
          ]}
        />
      </div>
      <div className="content-wrapper w-full mb-10">
        <div className="container-x mx-auto">
          <div className="w-full bg-white sm:p-[30px] p-3">
            <div className=" xl:space-x-11">
              <div className="x">
                <div className="title w-full mb-4">
                  <h1 className="text-[22px] font-semibold text-qblack mb-1">
                    {ServeLangItem()?.Seller_Information}
                  </h1>
                  <p className="text-[15px] text-qgraytwo">
                    {
                      ServeLangItem()
                        ?.Fill_the_form_below_or_write_us_We_will_help_you_as_soon_as_possible
                    }
                  </p>
                </div>
                <div className="input-area">
                  <div className="mb-5">
                    <InputCom
                      placeholder={ServeLangItem()?.Full_Name}
                      label={ServeLangItem()?.Full_Name + "*"}
                      name="fullName"
                      type="text"
                      inputClasses="h-[50px]"
                      value={fullName}
                      inputHandler={(e) => setFullName(e.target.value)}
                      error={!!(errors && Object.hasOwn(errors, "fullName"))}
                    />
                    {errors && Object.hasOwn(errors, "fullName") ? (
                      <span className="text-sm mt-1 text-qred">
                        {errors.fullName[0]}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-5">
                    <InputCom
                      placeholder={ServeLangItem()?.Aadhar_Card_Number}
                      label={ServeLangItem()?.Aadhar_Card_Number + "*"}
                      name="aadharNumber"
                      type="text"
                      inputClasses="h-[50px]"
                      value={aadharNumber}
                      inputHandler={(e) => setAadharNumber(e.target.value)}
                      error={
                        !!(errors && Object.hasOwn(errors, "aadharNumber"))
                      }
                    />
                    {errors && Object.hasOwn(errors, "aadharNumber") ? (
                      <span className="text-sm mt-1 text-qred">
                        {errors.aadharNumber[0]}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-5">
                    <InputCom
                      placeholder={ServeLangItem()?.PAN_Card_Number}
                      label={ServeLangItem()?.PAN_Card_Number + "*"}
                      name="panNumber"
                      type="text"
                      inputClasses="h-[50px]"
                      value={panNumber}
                      inputHandler={(e) => setPanNumber(e.target.value)}
                      error={!!(errors && Object.hasOwn(errors, "panNumber"))}
                    />
                    {errors && Object.hasOwn(errors, "panNumber") ? (
                      <span className="text-sm mt-1 text-qred">
                        {errors.panNumber[0]}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-5">
                    <InputCom
                      placeholder={ServeLangItem()?.GSTIN_Number}
                      label={ServeLangItem()?.GSTIN_Number + "*"}
                      name="gstinNumber"
                      type="text"
                      inputClasses="h-[50px]"
                      value={gstinNumber}
                      inputHandler={(e) => setGstinNumber(e.target.value)}
                      error={!!(errors && Object.hasOwn(errors, "gstinNumber"))}
                    />
                    {errors && Object.hasOwn(errors, "gstinNumber") ? (
                      <span className="text-sm mt-1 text-qred">
                        {errors.gstinNumber[0]}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-5">
                    <InputCom
                      placeholder={ServeLangItem()?.Business_Name}
                      label={ServeLangItem()?.Business_Name + "*"}
                      name="businessName"
                      type="text"
                      inputClasses="h-[50px]"
                      value={businessName}
                      inputHandler={(e) => setBusinessName(e.target.value)}
                      error={
                        !!(errors && Object.hasOwn(errors, "businessName"))
                      }
                    />
                    {errors && Object.hasOwn(errors, "businessName") ? (
                      <span className="text-sm mt-1 text-qred">
                        {errors.businessName[0]}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-5">
                    <InputCom
                      placeholder={ServeLangItem()?.Business_Address}
                      label={ServeLangItem()?.Business_Address + "*"}
                      name="businessAddress"
                      type="text"
                      inputClasses="h-[50px]"
                      value={businessAddress}
                      inputHandler={(e) => setBusinessAddress(e.target.value)}
                      error={
                        !!(errors && Object.hasOwn(errors, "businessAddress"))
                      }
                    />
                    {errors && Object.hasOwn(errors, "businessAddress") ? (
                      <span className="text-sm mt-1 text-qred">
                        {errors.businessAddress[0]}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-5">
                    <InputCom
                      placeholder={ServeLangItem()?.Referral_Code} // Placeholder text for the input field
                      label={ServeLangItem()?.Referral_Code} // Label text for the input field (without the star)
                      name="referralCode" // Name attribute for the input field
                      type="text" // Type of the input field (text, email, etc.)
                      inputClasses="h-[50px]" // CSS classes for styling the input field
                      value={referralCode} // Value of the input field (controlled component)
                      inputHandler={(e) => setReferralCode(e.target.value)} // Handler function for input change
                      error={
                        !!(errors && Object.hasOwn(errors, "referralCode"))
                      } // Error state for the input field
                    />
                    {errors && Object.hasOwn(errors, "referralCode") ? (
                      <span className="text-sm mt-1 text-qred">
                        {errors.referralCode[0]}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="mb-5">
                    <InputCom
                      placeholder={ServeLangItem()?.Password}
                      label={ServeLangItem()?.Password}
                      name="password"
                      type="password"
                      inputClasses="h-[50px]"
                      value={password}
                      inputHandler={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <InputCom
                      placeholder={ServeLangItem()?.Email}
                      label={ServeLangItem()?.Email_Address + "*"}
                      name="email"
                      type="email"
                      inputClasses="h-[50px]"
                      value={email}
                      inputHandler={(e) => setEmail(e.target.value)}
                      error={!!(errors && Object.hasOwn(errors, "email"))}
                    />
                    {errors && Object.hasOwn(errors, "email") ? (
                      <span className="text-sm mt-1 text-qred">
                        {errors.email[0]}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-5">
                    <InputCom
                      placeholder="0213 *********"
                      label={ServeLangItem()?.phone + "*"}
                      name="phone"
                      type="text"
                      inputClasses="h-[50px]"
                      value={phone}
                      inputHandler={(e) => setPhone(e.target.value)}
                      error={!!(errors && Object.hasOwn(errors, "phone"))}
                    />
                    {errors && Object.hasOwn(errors, "phone") ? (
                      <span className="text-sm mt-1 text-qred">
                        {errors.phone[0]}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="input-area">
                  <div className="remember-checkbox flex items-center space-x-2.5 mb-5">
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
                    <Link href="/seller-terms-condition">
                      <span className="text-base text-black cursor-pointer">
                        {
                          ServeLangItem()
                            ?.I_agree_all_terms_and_condition_in_ecoShop
                        }
                      </span>
                    </Link>
                  </div>

                  <div className="signin-area mb-3">
                    <div className="flex justify-center">
                      <button
                        onClick={sellerReq}
                        disabled={
                          email &&
                          fullName &&
                          checked &&
                          phone &&
                          panNumber &&
                          gstinNumber &&
                          businessName &&
                          businessAddress &&
                          referralCode &&
                          password
                            ? false
                            : true
                        }
                        type="button"
                        className="black-btn disabled:bg-opacity-50 disabled:cursor-not-allowed  text-sm text-white w-[490px] h-[50px] font-semibold flex justify-center bg-purple items-center"
                      >
                        <span>{ServeLangItem()?.Create_Seller_Account}</span>
                      </button>
                    </div>
                  </div>

                  <div className="signup-area flex justify-center">
                    <p className="text-sm text-qgraytwo font-normal">
                      {ServeLangItem()?.Already_have_an_Account}?
                      <Link href="/login" className="ml-2 text-qblack">
                        {ServeLangItem()?.Log_In}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 mb-10 xl:mb-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default isMultivendor(BecomeSaller);
