import Image from "next/image";
import { useEffect } from "react";
import settings from "../../../utils/settings";
import SimpleSlider from "../Helpers/SliderCom";
import get from "/public/images/icons/Get2.png";
import send from "/public/images/icons/send1.png";

import user from "/public/images/icons/user.png";

export default function Banner({
  className,
  images = [],
  sidebarImgOne,
  sidebarImgTwo,
}) {
  const settingBanner = {
    infinite: true,
    dots: true,
    autoplay: false,
    arrows: false,
    fade: true,
  };
  const { text_direction } = settings();
  useEffect(() => {
    const getSliderInitElement = document.querySelector(
      ".slider-wrapper .slick-slider.slick-initialized"
    );
    getSliderInitElement.setAttribute("dir", `${text_direction}`);
  }, [text_direction]);

  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card xl:flex xl:space-x-[30px] rtl:space-x-0 xl:h-[600px] ">
              <div
                data-aos="fade-right"
                className={`rtl:ml-[30px] ltr:ml-0 w-full xl:w-[80%] md:h-[600px] xl:mb-0 mb-2 ${
                  sidebarImgOne || sidebarImgTwo ? " w-full" : "w-full"
                }`}
              >
                <div className="slider-wrapper w-full h-full">
                  <SimpleSlider settings={settingBanner}>
                    {images.length > 0 &&
                      images.map((item, i) => (
                        <div
                          key={i}
                          className="item w-full h-full group flex flex-col justify-center items-center align-items flex-start"
                        >
                          <div
                            style={{
                              backgroundImage: `url(${
                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                              })`,
                              backgroundSize: "contain", // modified to "contain"
                              backgroundRepeat: "no-repeat",
                            }}
                            className="flex w-full max-w-full h-full relative items-center rtl:pr-[30px] ltr:pl-[30px] justify-center"
                          ></div>
                        </div>
                      ))}
                  </SimpleSlider>
                </div>
              </div>
              <div className="xl:w-[20%] flex flex-col xl:space-y-[10px] h-full">
                <div className="sidebar-header flex flex-col bg-[#DEE2E7] rounded-lg p-3 h-[120px] ">
                  <div className="flex flex-row">
                    <Image
                      className="mr-1"
                      src={user}
                      alt="cart"
                      width={40}
                      height={1}
                    />
                    <p className="text-sm">
                      Hi,user <br></br> lets get started
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <button className="bg-custom-blue text-qblue-white text-qblue text-xs py-1 px-2 rounded-md m-1 w-full">
                      Register
                    </button>
                    <button className="bg-white text-custom-blue text-qblue text-xs py-1 px-2 rounded-md m-1 w-full">
                      Login
                    </button>
                  </div>
                </div>

                {sidebarImgOne && (
                  <div
                    className="w-full  relative flex items-center group    rounded-md"
                    style={{
                      // backgroundImage: `url(${
                      //   process.env.NEXT_PUBLIC_BASE_URL + sidebarImgOne.image
                      // })`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <Image src={send} alt="img" height={75} />
                  </div>
                )}

                {sidebarImgTwo && (
                  <div
                    style={{
                      // backgroundImage: `url(${
                      //   process.env.NEXT_PUBLIC_BASE_URL + sidebarImgTwo.image
                      // })`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="w-full relative flex items-center group rounded-md"
                  >
                    <Image src={get} height={75} alt="get" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
