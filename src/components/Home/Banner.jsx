import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import settings from "../../../utils/settings";
import ShopNowBtn from "../Helpers/Buttons/ShopNowBtn";
import SimpleSlider from "../Helpers/SliderCom";
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
            <div className="banner-card xl:flex xl:space-x-[30px] rtl:space-x-0 xl:h-[600px]  mb-[30px] ">
              <div
                data-aos="fade-right"
                className={` rtl:ml-[30px] ltr:ml-0 w-full xl:h-full md:h-[500px] h-[220px] xl:mb-0 mb-2 ${
                  sidebarImgOne || sidebarImgTwo
                    ? "xl:w-[900px] w-full"
                    : "w-full"
                }`}
              >
                <div className="slider-wrapper w-full h-full">
                  <SimpleSlider settings={settingBanner}>
                    {images.length > 0 &&
                      images.map((item, i) => (
                        <div key={i} className="item w-full h-full group">
                          <div
                            style={{
                              backgroundImage: `url(${
                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                              })`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                            className="flex w-full max-w-full h-full h-auto relative items-center rtl:pr-[30px] ltr:pl-[30px]"
                          >
                            <div>
                              <div className="inline-block md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center  bg-white rounded-full md:mb-[30px] mb-[15px]">
                                <span className="text-qblack uppercase md:text-xs text-[10px] font-semibold">
                                  {item.badge}
                                </span>
                              </div>
                              <div className="md:mb-[30px] mb-[15px]">
                                <p className="md:text-[50px] text-[20px] leading-none text-qblack md:mb-3">
                                  {item.title_one}
                                </p>
                                <h1 className="md:text-[50px] text-[20px] md:w-[400px] md:leading-[66px] text-qblack font-bold">
                                  {item.title_two}
                                </h1>
                              </div>
                              <div className="w-[90px]">
                                <Link
                                  href={{
                                    pathname: "/single-product",
                                    query: { slug: item.product_slug },
                                  }}
                                  passHref
                                  legacyBehavior
                                >
                                  <a rel="noopener noreferrer">
                                    <ShopNowBtn />
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </SimpleSlider>
                </div>
              </div>
              <div className="flex-1 flex xl:flex-col flex-row  xl:space-y-[30px] xl:h-full md:h-[350px] h-[150px]">
                <div className="sidebar-header flex flex-col  bg-qblue-white  rounded-lg p-5">
                  <div className="flex flex-row ">
                    <Image
                      className="mr-2"
                      src={user}
                      alt="cart"
                      width={50}
                      height={10}
                    />
                    <p>
                      Hi,user <br></br> lets get started
                    </p>
                  </div>
                  <div className="buttons flex flex-col   justify-center items-center space-x-2">
                    <button className="bg-custom-blue text-qblue-white text-qblue py-2  rounded-md m-2  w-full">
                      Register
                    </button>
                    <button className="bg-custom-blue text-qblue-white text-qblue py-2  rounded-md m-2  w-full">
                      Login
                    </button>
                  </div>
                </div>

                {sidebarImgOne && (
                  <div
                    className="w-full xl:h-1/2 xl:mr-0 mr-2 relative flex items-center group rtl:md:pr-[40px] ltr:md:pl-[40px] rtl:pr-[30] ltr:pl-[30px] rounded-md"
                    style={{
                      backgroundImage: `url(${
                        process.env.NEXT_PUBLIC_BASE_URL + sidebarImgOne.image
                      })`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                )}

                {sidebarImgTwo && (
                  <div
                    style={{
                      backgroundImage: `url(${
                        process.env.NEXT_PUBLIC_BASE_URL + sidebarImgTwo.image
                      })`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="w-full xl:h-1/2 relative flex items-center rtl:md:pr-[40px] ltr:md:pl-[40px] rtl:pr-[30] ltr:pl-[30px] group rounded-md"
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
