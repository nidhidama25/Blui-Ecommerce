import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar({ className }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const categories = websiteSetup?.payload?.productCategories || [];
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <nav
      className={`nav-widget-wrapper relative z-30 ${className || ""}`}
      style={{ height: "60px" }}
    >
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full flex justify-center items-center">
          <ul className="flex items-center justify-center text-gg space-x-7">
            {categories.map((category) => (
              <li
                key={category.id}
                onMouseEnter={() => handleMouseEnter(category)}
                onMouseLeave={handleMouseLeave}
                className="relative group"
              >
                <Link
                  href={`/products?category=${category.slug}`}
                  passHref
                  legacyBehavior
                >
                  <a className="text-[22px]">{category.name}</a>
                </Link>
                {hoveredCategory && hoveredCategory.id === category.id && (
                  <div className="sub-menu fixed top-[140px] left-0 w-full z-40">
                    <div
                      className="mega-menu-wrapper w-full bg-white p-[30px] flex justify-between items-center"
                      style={{
                        minHeight: "295px",
                        boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                      }}
                    >
                      <div className="categories-wrapper flex-1 h-full flex justify-around">
                        {category.active_sub_categories &&
                          category.active_sub_categories.map((subCategory) => (
                            <div key={subCategory.id} className="p-4">
                              <div className="category">
                                <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                  {subCategory.name}
                                </h1>
                              </div>
                              <div className="category-items">
                                <ul className="flex flex-col space-y-2">
                                  {subCategory.active_child_categories &&
                                    subCategory.active_child_categories.map(
                                      (childCategory) => (
                                        <li key={childCategory.id}>
                                          <Link
                                            href={{
                                              pathname: "/products",
                                              query: {
                                                category: childCategory.slug,
                                              },
                                            }}
                                            passHref
                                            legacyBehavior
                                          >
                                            <a rel="noopener noreferrer">
                                              <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                                {childCategory.name}
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
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
