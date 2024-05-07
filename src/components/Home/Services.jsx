import React from "react";
import FontAwesomeCom from "../Helpers/icons/FontAwesomeCom";
export default function Services({ services }) {
  return (
    <div className="container-x mx-auto">
      <div
        data-aos="fade-up"
        className="best-services w-full bg-white flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10"
      >
        {services.map((service) => (
          <div key={service.id} className="item">
            <div className="flex space-x-5 rtl:space-x-reverse items-center">
              <div>
                <span className="w-10 h-10 text-qyellow">
                  <FontAwesomeCom className="w-8 h-8" icon={service.icon} />
                </span>
              </div>
              <div>
                <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                  {service.title}
                </p>
                <p className="text-sm text-qgray line-clamp-1">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
