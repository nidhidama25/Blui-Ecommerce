import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategorySection({ sectionTitle, categories }) {
  return (
    <div data-aos="fade-up" className="category-section-wrapper w-full">
      <div className="container-x mx-auto pb-[60px]  ">
        <div className="bg-[#FFF4D4] p-20 rounded-md w-full md:grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-[30px] md:flex md:flex-row w-70 h-70">
          {/* Add the following div for the Trending Category heading */}
          <div className="col-span-3 text-center p-5">
            <h2 className="text-3xl font-extrabold text-gray-800">
              Trending Category
            </h2>
          </div>
          {/* End of the added div */}
          {categories &&
            categories.slice(5, 8).map((item, i) => (
              <div
                key={i}
                className={`item w-full cursor-pointer group  ${
                  i !== 2 ? "mb-4" : ""
                }`}
              >
                <Link
                  href={{
                    pathname: "/products",
                    query: { category: item.slug },
                  }}
                  passhref
                  legacyBehavior
                >
                  <a rel="noopener noreferrer">
                    <div
                      className={`bg-white items-center flex flex-col justify-center p-5 rounded ${
                        i === 2 ? "h-[300px]" : "h-full"
                      }`}
                    >
                      <h2 className="text-xl font-semibold mb-4 text-blue-900">
                        {item.name}
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        <Image
                          style={{ borderRadius: "7%" }}
                          src={process.env.NEXT_PUBLIC_BASE_URL + item.image}
                          alt=""
                          width={100}
                          height={100}
                        />
                        <Image
                          style={{ borderRadius: "7%" }}
                          src={process.env.NEXT_PUBLIC_BASE_URL + item.image}
                          alt=""
                          width={100}
                          height={100}
                        />
                        <Image
                          style={{ borderRadius: "7%" }}
                          src={process.env.NEXT_PUBLIC_BASE_URL + item.image}
                          alt=""
                          width={100}
                          height={100}
                        />
                        <Image
                          style={{ borderRadius: "7%" }}
                          src={process.env.NEXT_PUBLIC_BASE_URL + item.image}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
