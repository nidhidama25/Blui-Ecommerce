import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import Arrow from "../../../Helpers/icons/Arrow";
import Multivendor from "../../../Shared/Multivendor";
export default function Navbar({ className }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const categoryList = websiteSetup && websiteSetup.payload.productCategories;
  const megaMenuList = websiteSetup && websiteSetup.payload.megaMenuCategories;
  const megaMenuBanner = websiteSetup && websiteSetup.payload.megaMenuBanner;
  const customPages = websiteSetup && websiteSetup.payload.customPages;
  const [categoryToggle, setToggle] = useState(false);
  const [subCatHeight, setHeight] = useState(null);

  const handler = () => {
    setToggle(!categoryToggle);
  };

  return (
    <div
      className={`nav-widget-wrapper w-full  h-[60px] relative z-30  ${
        className || ""
      }`}
    >
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full ">
          <div className="w-full h-full flex justify-between items-center text-black">
            <div className="category-and-nav flex flex-grow  items-center ">
              <div className="nav w-full">
                <ul className="nav-wrapper text-black justify-center flex xl:space-x-12  w-full">
                  <li>
                    <span className="flex items-center text-md font-400 cursor-pointer text-black ">
                      <span>{ServeLangItem()?.Men}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white  flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 20px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex m-11">
                          {/* Hardcoded subcategories */}
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Topwear
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        T-Shirts
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Shirts
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sweaters
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Jackets
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Blazers & Coats
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Suits
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Raincoat
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Kurtas
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Bottomwear
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Jeans
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Trousers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Track Pant
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Shorts
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Dhotis
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[3px]">
                                    Innerwear
                                  </h1>
                                </div>
                                <div className="category-items">
                                  <ul className="flex flex-col space-y-1">
                                    <li>
                                      <Link
                                        href="/products?sub_category=t-shirts"
                                        passHref
                                        legacyBehavior
                                      >
                                        <a rel="noopener noreferrer">
                                          <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                            Underwears
                                          </span>
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/products?sub_category=shirts"
                                        passHref
                                        legacyBehavior
                                      >
                                        <a rel="noopener noreferrer">
                                          <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                            Boxers
                                          </span>
                                        </a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Accessories
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Belt
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Wallets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Perfumes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[3px]">
                                    Ethnic Wear
                                  </h1>
                                </div>
                                <div className="category-items">
                                  <ul className="flex flex-col space-y-2">
                                    <li>
                                      <Link
                                        href="/products?sub_category=t-shirts"
                                        passHref
                                        legacyBehavior
                                      >
                                        <a rel="noopener noreferrer">
                                          <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                            Kurta Sets
                                          </span>
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/products?sub_category=shirts"
                                        passHref
                                        legacyBehavior
                                      >
                                        <a rel="noopener noreferrer">
                                          <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                            Ethnic Jackets
                                          </span>
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/products?sub_category=shirts"
                                        passHref
                                        legacyBehavior
                                      >
                                        <a rel="noopener noreferrer">
                                          <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                            Sherwanis
                                          </span>
                                        </a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Footwear
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Men Casual Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Men Sports Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Men Formal Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Loafers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sandels & Floaters
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Slippers & Slides
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Sunglasses
                                  </h1>
                                </div>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Personal Care & Grooming
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Trimmers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Beard Oil
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Beard Cream & Gel
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Jewellery
                                  </h1>
                                </div>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Chain
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bracelet
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Ring
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Watches & Straps
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Watches
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Smartwatch
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Straps
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[3px]">
                                    Gadgets
                                  </h1>
                                </div>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Smartwatch
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Fitness Gadgets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Headphones
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Speakers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Fashion Accessories
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Deodorants
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Ties & Cufflinks
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Gift Sets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Caps & Hats
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Mufflers & Gloves
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <span className="flex items-center text-md font-400 cursor-pointer text-black ">
                      <span>{ServeLangItem()?.Women}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white  flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 20px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex m-11">
                          {/* Hardcoded subcategories */}
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Indian & Fashion Wear
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Dress
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Skirts & Plazzos
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Leggings, Salwar & Chudidars
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Dupattas & Shawls
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Jackets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Bags & More
                                  </h1>
                                </div>
                                <div className="category-items">
                                  <ul className="flex flex-col space-y-2">
                                    <li>
                                      <Link
                                        href="/products?sub_category=t-shirts"
                                        passHref
                                        legacyBehavior
                                      >
                                        <a rel="noopener noreferrer">
                                          <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                            Backpacks
                                          </span>
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/products?sub_category=shirts"
                                        passHref
                                        legacyBehavior
                                      >
                                        <a rel="noopener noreferrer">
                                          <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                            Handbags
                                          </span>
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/products?sub_category=pants"
                                        passHref
                                        legacyBehavior
                                      >
                                        <a rel="noopener noreferrer">
                                          <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                            Slingbags
                                          </span>
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/products?sub_category=pants"
                                        passHref
                                        legacyBehavior
                                      >
                                        <a rel="noopener noreferrer">
                                          <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                            Purse
                                          </span>
                                        </a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Western Wear
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Tops
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Tshirts
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Jeans
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Trousers & Capris
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Shorts
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Playsuits
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sweaters
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Coats
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Blazers & Waistcoats
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Footwear
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Flats
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Heels & Sandals
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Slippers & Flipflops
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Sports & Active Wear
                                  </h1>
                                </div>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sport Topwear
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sport Bottomwear
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sport Footwear
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Lingerie & Sleepwear
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bra
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Panties
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Shapewear
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Swimwear
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Camisoles & Thermals
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Gadgets
                                  </h1>
                                </div>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Smartwatch
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Fitness Gadgets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Headphones
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Speakers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Beauty & Personal Care
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Makeup
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Skincare
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Beauty Kit
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Lipsticks
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Fragrances
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sarees
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Kurtis & Kurta
                                  </h1>
                                </div>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Lehengha
                                  </h1>
                                </div>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Jewellery
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Jewellery Sets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Necklaces
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Earrings
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Rings
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Mangalsutras
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bangles
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Mala
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <span className="flex items-center text-md font-400 cursor-pointer text-black ">
                      <span>{ServeLangItem()?.Kids}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white  flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 20px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex m-11">
                          {/* Hardcoded subcategories */}
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Boys Clothing
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Shirts
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        T-Shirts
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Jeans
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Shorts
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Trousers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Clothing Sets
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Ethnic Wear
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Track Pant
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Jacket
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sweaters
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Party Wear
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Innerwear & Thermals
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Nightwear
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Girls Clothing
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Tops
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Tshirts
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Dress
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Clothing sets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Lehengha Choli
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Kurta Sets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Party Wear
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Skirts & Shorts
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Jeans & Trousers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Jacket & Sweater
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Innerwear
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Nightwear
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Footwear
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Casual Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sports Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Flipflops
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Flats
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sandals
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Heels
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        School Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Socks
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Toys & Games
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Toys
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Remote Games
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Baby Doll
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Activity Toy
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Learning
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Kids Accessories
                                  </h1>
                                </div>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bags & Backpacks
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Watches
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sunglasses
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Caps & Hats
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Home & Bath
                                  </h1>
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <span className="flex items-center text-md font-400 cursor-pointer text-black ">
                      <span>{ServeLangItem()?.Kitchen}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white  flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 20px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex m-11">
                          {/* Hardcoded subcategories */}
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Home Decor
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Plants & Planters
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Candles
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Clocks
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Mirrors
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Wall Decor
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Festive Decor
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Pooja Essentials
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Wall Shelves
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Fountains
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Showpieces & Vases
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Ottoman
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Kitchen & Appliances
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Storage & Organizers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Cook & Bake
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Kitchen Tools
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Dinnerware
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Glasses & Barware
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Table Runners
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Cups & Mugs
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Table Covers & Furnishings
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Bed & Furnishing
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bedsheets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Mattress Protectors
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bed Runners
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Blankets
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Pillows & Covers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Curtains & Blinds
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bed Covers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Chair Pads & Covers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sofa Covers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Bath
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Towels
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Hand & Face Towels
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Towels Set
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bath Rugs
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bath Robes
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bathroom Accessories
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Shower Curtains
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Flooring
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Floor Runners
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Carpets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Floor Mats & Dhurries
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Door Mats
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Storage
                                  </h1>
                                </div>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bins
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Hangers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Organisers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Hooks & Holders
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Laundry Bags
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Lamps & Lighting
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Floor Lamps
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Ceiling Lamps
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Table Lamps
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Wall Lamps
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Outdoor Lamps
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        String Lights
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Curtains
                                  </h1>
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <span className="flex items-center text-md font-400 cursor-pointer text-black ">
                      <span>{ServeLangItem()?.Health}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white  flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 20px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex m-11">
                          {/* Hardcoded subcategories */}
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Makeup
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Lipsticks
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Eyeshadow
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Face Makeup
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Makeup Kits
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Nail Polish
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Lip Liner
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Lip Gloss
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Kajal
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Foundation
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Primer
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Concealer
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Compact
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Brushes & Accessories
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Skin Care
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Body Lotion
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Whitening Creams
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Straighteners & Dryers
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Face Oil & Serum
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Face Wash
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Face Masks & Peels
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Soaps & Scrubs
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sunscreen
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Serum
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Eye Cream
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Lip Balm
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Healthcare
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Oral Care
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Winter Healthcare
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Ear Cleaner
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Foot Care
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sexual Wellness
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Ayurveda & Nutrition
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sanitary Pads & More
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Babycare
                                  </h1>
                                </div>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Haircare
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Shampoo
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Conditioner
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Hair Cream
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Hair Oil
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Hair Gel
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Hair Wax
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Hair Colour
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Hair Serum
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Hair Accessory
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Hair Dryer
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Hair Spray
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Fragrances
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Perfume
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Deodorant
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Body Mist
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Men's Grooming
                                  </h1>
                                </div>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Trimmers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Beard Oil
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Beard Cream & Gel
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Beauty Gift & Makeup Set
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Beauty Gift
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Makeup Kit
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <span className="flex items-center text-md font-400 cursor-pointer text-black ">
                      <span>{ServeLangItem()?.Bags}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white  flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 20px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex m-11">
                          {/* Hardcoded subcategories */}
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Men Footwear
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Casual Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sports Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Formal Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Loafers
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sandels & Floaters
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Slippers & Slides
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Women Footwear
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Flats
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Heels & Sandals
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Slippers & Flipflops
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Kids Footwear
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Casual Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sports Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Flipflops
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Flats
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Sandels
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Heels
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        School Shoes
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Socks
                                  </h1>
                                </div>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Men Bags
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Backpacks
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Waist Bags
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Crossbody Bags
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Wallets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    Women Bags
                                  </h1>
                                </div>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Backpacks
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Handbags
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Slingbags
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Purse
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Travel Bags, Luggage
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Duffel & Trolly Bags
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Laptop Bags
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Gym Bags
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Small Travel Bags
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Accessories
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Card Cases
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Pouches
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Reusable Bags
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span className="flex items-center text-md font-400 cursor-pointer text-black ">
                      <span>{ServeLangItem()?.Jewellery}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white  flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 20px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex m-11">
                          {/* Hardcoded subcategories */}
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Men Jewellery
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Chain
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bracelet
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Ring
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Women Jewellery
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Jewellery Sets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Necklaces
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Earrings
                                      </span>
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Ring
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Mangalsutras
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Bangles
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Mala
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span className="flex items-center text-md font-400 cursor-pointer text-black ">
                      <span>{ServeLangItem()?.Jewellery}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white  flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 20px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex m-11">
                          {/* Hardcoded subcategories */}
                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Gadgets
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/products?sub_category=t-shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Smartwatch
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=shirts"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Fitness Gadgets
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Headphones
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products?sub_category=pants"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Speakers
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="px-10">
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Mobiles
                              </h1>
                            </div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Bluetooth & Headphones
                              </h1>
                            </div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Charging
                              </h1>
                            </div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Earphone
                              </h1>
                            </div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Mobile Cover
                              </h1>
                            </div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Accessories
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="relative">
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link
                                    href="/privacy-policy"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        {ServeLangItem()?.Privacy_Policy}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/terms-condition"
                                    passHref
                                    legacyBehavior
                                  >
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        {ServeLangItem()?.Term_and_Conditions}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                {Multivendor() === 1 && (
                                  <li>
                                    <Link
                                      href="seller-terms-condition"
                                      passHref
                                      legacyBehavior
                                    >
                                      <a rel="noopener noreferrer">
                                        <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                          {
                                            ServeLangItem()
                                              ?.Seller_terms_and_conditions
                                          }
                                        </span>
                                      </a>
                                    </Link>
                                  </li>
                                )}
                                <li>
                                  <Link href="/faq" passHref legacyBehavior>
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        {ServeLangItem()?.FAQ}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
