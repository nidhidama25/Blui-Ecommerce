import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Navbar({ className }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const categoryList = websiteSetup && websiteSetup.payload.productCategories;
  const mageMenuList = websiteSetup && websiteSetup.payload.megaMenuCategories;
  const customPages = websiteSetup && websiteSetup.payload.customPages;
  const [categoryToggle, setToggle] = useState(false);
  const [subCatHeight, setHeight] = useState(null);
  const [categories, setCategories] = useState([]);

  const handler = () => {
    setToggle(!categoryToggle);
  };
  useEffect(() => {
    if (websiteSetup) {
      setCategories(
        websiteSetup.payload && websiteSetup.payload.productCategories
      );
    }
  }, [websiteSetup]);
  const renderCategories = (categories) => {
    return (
      <ul className="flex flex-col space-y-2">
        {categories.map((category) => (
          <li key={category.id} className="relative group">
            <Link href={`/products?category=${category.slug}`} legacyBehavior>
              <a className="hover:text-qyellow">{category.name}</a>
            </Link>
            {category.sub_categories && category.sub_categories.length > 0 && (
              <div className="sub-menu hidden group-hover:block absolute left-0 top-full bg-white p-4 shadow-lg">
                {renderCategories(category.sub_categories)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div
      className={`nav-widget-wrapper w-full  h-[60px] relative z-30  ${
        className || ""
      }`}
    >
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full ">
          <div className="w-full h-full  items-center text-black">
            <div className="category-and-nav  pt-6 items-center ">
              <div className="nav w-full">
                <ul className="flex justify-center space-x-7 items-center">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`/products?category=${category.slug}`}
                        legacyBehavior
                      >
                        <a>{category.name}</a>
                      </Link>
                      <div className="sub-menu w-full absolute left-0 top-[60px]">
                        <div
                          className="mega-menu-wrapper w-full bg-white p-[30px] flex justify-between items-center "
                          style={{
                            minHeight: "295px",
                            boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                          }}
                        >
                          <div className="categories-wrapper flex-1 h-full flex justify-around -ml-[70px]">
                            {mageMenuList &&
                              mageMenuList.slice(0, 3).map((megaItem) => (
                                <div key={megaItem.id}>
                                  <div className="category">
                                    <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                      {megaItem.category.name}
                                    </h1>
                                  </div>
                                  <div className="category-items">
                                    <ul className="flex flex-col space-y-2">
                                      {megaItem.sub_categories.length > 0 &&
                                        megaItem.sub_categories.map(
                                          (subItem) => (
                                            <li key={subItem.id}>
                                              <Link
                                                href={{
                                                  pathname: "/products",
                                                  query: {
                                                    sub_category:
                                                      subItem.sub_category &&
                                                      subItem.sub_category.slug,
                                                  },
                                                }}
                                                passHref
                                                legacyBehavior
                                              >
                                                <a rel="noopener noreferrer">
                                                  <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                                    {subItem.sub_category &&
                                                      subItem.sub_category.name}
                                                  </span>
                                                </a>
                                              </Link>
                                            </li>
                                          )
                                        )}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
