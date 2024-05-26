import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";
import Apple from "/public/assets/images/App Store.png";
import Google from "/public/assets/images/Google Play.png";
import applepay from "/public/images/icons/ApplePay.png";
import cart from "/public/images/icons/Cart.png";
import dis from "/public/images/icons/Method=Discover.png";
import master from "/public/images/icons/Method=Mastercard.png";
import visa from "/public/images/icons/Method=Visa.png";
export default function Footer({ settings }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [firstCol, setFirstCol] = useState(null);
  const [secondCol, setSecondCol] = useState(null);
  const [thirdCol, setThirdCol] = useState(null);
  const [footerContent, setFooterContent] = useState(null);
  const [socialLink, setSocialLink] = useState(null);

  useEffect(() => {
    if (!footerContent) {
      setFooterContent(
        websiteSetup && websiteSetup.payload && websiteSetup.payload.footer
      );
    }
  });

  useEffect(() => {
    if (!socialLink) {
      setSocialLink(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.social_links
      );
    }
  });

  useEffect(() => {
    if (!firstCol) {
      setFirstCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_first_col
      );
    }
  });
  useEffect(() => {
    if (!secondCol) {
      setSecondCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_second_col
      );
    }
  });
  useEffect(() => {
    if (!thirdCol) {
      setThirdCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_third_col
      );
    }
  });

  return (
    <footer className="footer-section-wrapper bg-[#1A1A1A] text-white print:hidden">
      <div className="container-x block mx-auto pt-[30px]">
        <div className="w-full flex flex-col items-center mb-[30px]">
          {/* logo area */}
          <div className="mb-[30px]">
            <Link href="/" passHref legacyBehavior>
              <a>
                {settings && (
                  <Image
                    width="70"
                    height="34"
                    objectFit="scale-down"
                    src={`${process.env.NEXT_PUBLIC_BASE_URL + settings.logo}`}
                    alt="logo"
                  />
                )}
              </a>
            </Link>
          </div>
          <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
        </div>
        <div className="lg:flex justify-between mb-[50px]">
          <div className="lg:w-[424px] ml-0 w-full mb-10 lg:mb-0">
            <h1 className="text-[18] font-500 mb-5">About Us</h1>
            <p className="text-[15px] w-[247px] leading-[28px] text-qblack">
              {footerContent && footerContent.about_us}
            </p>
          </div>
          <div className="flex-1 lg:flex">
            <div className="lg:w-1/4 w-full mb-10 lg:mb-0">
              {firstCol && (
                <>
                  <div className="mb-5">
                    <h6 className="text-[18] font-500 ">
                      {firstCol.columnTitle}
                    </h6>
                  </div>
                  <div>
                    <ul className="flex flex-col text-qblack space-y-2">
                      {firstCol.col_links.length > 0 &&
                        firstCol.col_links.map((item, i) => (
                          <li key={i}>
                            <Link href={item.link} passHref legacyBehavior>
                              <a rel="noopener noreferrer">
                                <span className="text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                  {item.title}
                                </span>
                              </a>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
            <div className="lg:w-1/4 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
              <div>
                {secondCol && (
                  <>
                    <div className="mb-5">
                      <h6 className="text-[18] font-500">
                        {secondCol.columnTitle}
                      </h6>
                    </div>
                    <div>
                      <ul className="flex flex-col text-qblack space-y-2">
                        {secondCol.col_links.length > 0 &&
                          secondCol.col_links.map((item, i) => (
                            <li key={i}>
                              <Link href={item.link} passHref legacyBehavior>
                                <a rel="noopener noreferrer">
                                  <span className="text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                    {item.title}
                                  </span>
                                </a>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="lg:w-1/4 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
              <div>
                {thirdCol && (
                  <>
                    <div className="mb-5">
                      <h6 className="text-[18] font-500">
                        {thirdCol.columnTitle}
                      </h6>
                    </div>
                    <div>
                      <ul className="flex flex-col text-qblack space-y-2">
                        {thirdCol.col_links.length > 0 &&
                          thirdCol.col_links.map((item, i) => (
                            <li key={i}>
                              <Link href={item.link} passHref legacyBehavior>
                                <a rel="noopener noreferrer">
                                  <span className="text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                    {item.title}
                                  </span>
                                </a>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
              <div>
                <div className="mb-5">
                  <h6 className="text-[18] font-500">
                    Download Our Mobile App
                  </h6>
                </div>
                <div className="flex flex-row space-x-4">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={Google}
                      alt="Download on Google Play"
                      width={120}
                      height={20}
                    />
                  </a>
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={Apple}
                      alt="Download on the App Store"
                      width={120}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bottom-bar border-t border-qgray-border lg:h-[82px] flex lg:flex-row flex-col-reverse
         justify-between items-center"
        >
          <div className="flex rtl:space-x-reverse lg:space-x-5 space-x-2.5 justify-between items-center mb-3">
            <div className="flex rtl:space-x-reverse space-x-5 items-center">
              {socialLink &&
                socialLink.length > 0 &&
                socialLink.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noreferrer">
                    <FontAwesomeCom
                      className="w-4 h-4 text-qgray"
                      icon={item.icon}
                    />
                  </a>
                ))}
            </div>
            <span className="sm:text-base text-[10px] text-qgray font-300">
              {footerContent && footerContent.copyright
                ? footerContent.copyright
                : ""}
            </span>
          </div>
          <div className="mt-2 lg:mt-0 flex flex-row space-x-4">
            <Link href="#" passHref legacyBehavior>
              <a>
                <Image
                  width={40}
                  height={40}
                  src={applepay}
                  alt="payment-gateways"
                  className="pt-1"
                />
              </a>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <a>
                <Image
                  width={40}
                  height={40}
                  src={visa}
                  alt="payment-gateways"
                />
              </a>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <a>
                <Image
                  width={40}
                  height={40}
                  src={dis}
                  alt="payment-gateways"
                />
              </a>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <a>
                <Image
                  width={40}
                  height={40}
                  src={master}
                  alt="payment-gateways"
                />
              </a>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <a>
                <Image
                  width={50}
                  height={50}
                  src={cart}
                  alt="payment-gateways"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
