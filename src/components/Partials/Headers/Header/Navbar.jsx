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
        <div className="w-full h-full flex items-center">
          <ul className="flex justify-center space-x-7">
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
                  <a>{category.name}</a>
                </Link>
                {hoveredCategory && hoveredCategory.id === category.id && (
                  <div className="mega-menu absolute top-full">
                    <div className="mega-menu-wrapper bg-white p-4 shadow-lg">
                      <ul className="sub-menu">
                        {category.active_sub_categories &&
                          category.active_sub_categories.map((subCategory) => (
                            <li key={subCategory.id}>
                              <Link
                                href={`/products?category=${subCategory.slug}`}
                                passHref
                                legacyBehavior
                              >
                                <a>{subCategory.name}</a>
                              </Link>
                              {subCategory.active_child_categories && (
                                <ul className="child-menu">
                                  {subCategory.active_child_categories.map(
                                    (childCategory) => (
                                      <li key={childCategory.id}>
                                        <Link
                                          href={`/products?category=${childCategory.slug}`}
                                          passHref
                                          legacyBehavior
                                        >
                                          <a>{childCategory.name}</a>
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </li>
                          ))}
                      </ul>
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
