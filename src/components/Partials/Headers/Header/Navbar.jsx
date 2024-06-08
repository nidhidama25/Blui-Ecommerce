import Link from "next/link";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar({ className }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const categories = websiteSetup?.payload?.productCategories || [];
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const timer = useRef(null);

  const handleMouseEnter = (category) => {
    clearTimeout(timer.current);
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    timer.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 200); // Delay to handle quick mouse movements
  };

  return (
    <nav
      className={`nav-widget-wrapper relative z-30 ${className || ""}`}
      style={{
        height: "60px",
        borderTop: "1px solid #6B7280",
        borderBottom: "1px solid #6B7280",
        margin: "0 3.5rem",
      }}
    >
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full flex justify-center items-center">
          <ul className="flex items-center justify-center text-gray-500 space-x-7">
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
                  <div
                    className="sub-menu fixed top-[140px] left-0 w-full z-40 transition-opacity duration-200 ease-in-out"
                    onMouseEnter={() => handleMouseEnter(category)}
                    onMouseLeave={handleMouseLeave}
                    style={{ opacity: hoveredCategory ? 1 : 0 }}
                  >
                    <div
                      className="mega-menu-wrapper w-full bg-white p-[30px] flex justify-between items-center"
                      style={{
                        minHeight: "295px",
                        boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                      }}
                    >
                      <div className="categories-wrapper flex-1 h-full flex justify-around">
                        {category.active_sub_categories &&
                          category.active_sub_categories.map((sub_category) => (
                            <div key={sub_category.id} className="p-4">
                              <Link
                                href={`/products?category=${sub_category.slug}`}
                                passHref
                                legacyBehavior
                              >
                                <a>
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    {sub_category.name}
                                  </h1>
                                </a>
                              </Link>
                              <div className="category-items">
                                <ul className="flex flex-col space-y-2">
                                  {sub_category.active_child_categories &&
                                    sub_category.active_child_categories.map(
                                      (child_category) => (
                                        <li key={child_category.id}>
                                          <Link
                                            href={`/products?child_category=${child_category.slug}`}
                                            passHref
                                            legacyBehavior
                                          >
                                            <a rel="noopener noreferrer">
                                              <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                                {child_category.name}
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
