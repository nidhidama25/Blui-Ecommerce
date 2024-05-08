import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import apiRequest from "../../../../utils/apiRequest";
import { fetchWishlist } from "../../../store/wishlistData";
import LoginContext from "../../Contexts/LoginContext";
import InputCom from "../../Helpers/InputCom";
import LoaderStyleOne from "../../Helpers/Loaders/LoaderStyleOne";
import ServeLangItem from "../../Helpers/ServeLangItem";
const SEND = ({ action }) => {
  return (
    <div>
      <p className="text-xs text-qblack">
        Please verify your acount. If you didnt get OTP, please resend your OTP
        and verify
      </p>
      <button
        type="button"
        onClick={action}
        className="text-sm text-blue-500 font-bold mt-2"
      >
        Send OTP
      </button>
    </div>
  );
};
function LoginWidget({ redirect = true, loginActionPopup, notVerifyHandler }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const loginPopupBoard = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setValue] = useState(false);
  const [errors, setErrors] = useState(null);

  const rememberMe = () => {
    setValue(!checked);
  };
  const sendOtpHandler = () => {
    apiRequest
      .resend({
        email: email,
      })
      .then(() => {
        router.push(`/verify-you?email=${email}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const doLogin = async () => {
    setLoading(true);
    await apiRequest
      .login({
        email: email,
        password: password,
      })
      .then((res) => {
        setLoading(false);
        toast.success("Login Successfull");
        setEmail("");
        setPassword("");

        localStorage.removeItem("auth");
        localStorage.setItem("auth", JSON.stringify(res.data));
        dispatch(fetchWishlist());
        if (redirect) {
          router.push("/");
        } else {
          if (res.data) {
            loginPopupBoard.handlerPopup(false);
          }
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          if (
            err.response.data.notification ===
            "Please verify your acount. If you didn't get OTP, please resend your OTP and verify"
          ) {
            toast.warn(<SEND action={sendOtpHandler} />, {
              autoClose: false,
              icon: false,
              theme: "colored",
            });
            notVerifyHandler();
          } else {
            toast.error(ServeLangItem()?.Invalid_Credentials);
          }
        } else {
          return false;
        }
        console.log(err);
      });
  };
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
  }, []);
  return (
    <div className="w-full">
      <div className="input-area">
        <div className="input-item mb-5">
          <InputCom
            placeholder={ServeLangItem()?.Name}
            label={ServeLangItem()?.Name + "*"}
            name="name"
            type="text"
            inputClasses="h-[50px]"
            inputHandler={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="input-item mb-5">
          <InputCom
            placeholder={ServeLangItem()?.Email_or_Phone + " (+Country Code)"}
            label={ServeLangItem()?.Email_or_Phone + "*"}
            name="email"
            type="text"
            inputClasses="h-[50px]"
            inputHandler={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="input-item mb-5">
          <InputCom
            placeholder="* * * * * *"
            label={ServeLangItem()?.Password}
            name="password"
            type="password"
            inputClasses="h-[50px]"
            inputHandler={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="forgot-password-area flex justify-between items-center mb-7">
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
            <span onClick={rememberMe} className="text-base text-black">
              {ServeLangItem()?.Remember_Me}
            </span>
          </div>
          <Link href="/forgot-password" passhref legacyBehavior>
            <a>
              <span className="text-base text-qyellow cursor-pointer">
                {ServeLangItem()?.Forgot_password}?
              </span>
            </a>
          </Link>
        </div>
        <div className="signin-area mb-3.5">
          <div className="flex justify-center">
            <button
              onClick={doLogin}
              type="button"
              className=" rounded-lg  mb-6 text-sm text-white w-full h-[50px] font-semibold flex justify-center  items-center bg-custom-blue"
            >
              <span>{ServeLangItem()?.Login}</span>
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
            {ServeLangItem()?.Dontt_have_an_account} ?
            {redirect ? (
              <Link href="/signup" legacyBehavior>
                <span className="ml-2 text-qblack cursor-pointer capitalize">
                  {ServeLangItem()?.sign_up_free}
                </span>
              </Link>
            ) : (
              <button onClick={loginActionPopup} type="button">
                <span className="ml-2 text-qblack cursor-pointer capitalize">
                  {ServeLangItem()?.sign_up_free}
                </span>
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginWidget;
