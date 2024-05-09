import Image from "next/image";
import React from "react";
import Layout from "../../Partials/Layout";
import comma from "/public/assets/images/comma.png";
function LoginLayout({ children }) {
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full  h-screen flex justify-center items-center">
        <div className="container-x mx-auto flex justify-center items-center">
          <div className="lg:flex lg:flex-row-reverse items-center  rounded-md">
            <div className="flex justify-center hidden lg:block ">
              <div className=" w-[450px] h-[550px] text-qblue-white rounded-md p-10 bg-custom-blue">
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
            <div className="lg:w-[450px] rounded-md w-full h-[550px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
              {/*login Widget*/}
              {children && (
                <div className="flex justify-center items-center h-full">
                  {children}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginLayout;
