import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../Partials/Layout";
import SignupWidget from "./SignupWidget";
import VerifyWidget from "./VerifyWidget";
import bgblue from "/public/assets/images/bgblue.png";
import comma from "/public/assets/images/comma.png";
export default function Signup() {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [verify, setVerify] = useState(false);
  const [signupView, setSignupView] = useState(false);
  const [imgThumb, setImgThumb] = useState(null);
  useEffect(() => {
    if (websiteSetup) {
      setImgThumb(websiteSetup.payload.image_content.login_image);
    }
  }, [websiteSetup]);

  const location = useRouter();
  useEffect(() => {
    if (location.route === "/verify-you") {
      setVerify(true);
    } else {
      setSignupView(true);
    }
  }, [location]);

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <div className="lg:flex items-center justify-center w-full lg:min-h-[700px]">
            {verify ? (
              <div className="lg:w-[450px] w-full lg:h-[550px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
                <VerifyWidget />
              </div>
            ) : signupView ? (
              <div className="lg:w-[450px] w-full lg:h-[550px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
                <SignupWidget />
              </div>
            ) : (
              ""
            )}
            <div className="flex justify-center hidden lg:block">
              <div className="relative w-[450px] h-[550px] text-qblue-white rounded-md p-10">
                <div className="absolute inset-0 -z-10">
                  <Image
                    src={bgblue}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Background"
                  />
                </div>
                <div className="flex flex-col items-center mt-10 justify-center text-[26px] leading-[44.2px] font-medium">
                  <div className="flex items-center justify-center mb-4 pt-12">
                    <Image
                      className="rounded-[50%] w-[40px] h-[30px]"
                      alt=""
                      src={comma}
                    />
                  </div>
                  <p className="text-center mb-2">
                    “The product given even exceeds my expectations, I am very
                    satisfied.”
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center pt-40">
                  <h1 className="text-lg font-bold text-xl mb-2">
                    Company Name
                  </h1>
                  <div className="text-sm mb-4">Customer Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
