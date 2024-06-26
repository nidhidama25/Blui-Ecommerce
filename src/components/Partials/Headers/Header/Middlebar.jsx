import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiRequest from "../../../../../utils/apiRequest";
import { fetchWishlist } from "../../../../store/wishlistData";
import LoginContext from "../../../Contexts/LoginContext";
import SearchBox from "../../../Helpers/SearchBox";
import ServeLangItem from "../../../Helpers/ServeLangItem";

import Multivendor from "../../../Shared/Multivendor";

import bag from "/public/images/icons/Vector (1).png";
import prof from "/public/images/icons/Vector (2).png";
import wish from "/public/images/icons/Vector.png";
export default function Middlebar({ className, settings }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const getLoginContexts = useContext(LoginContext);
  const { wishlistData } = useSelector((state) => state.wishlistData);
  const wishlists = wishlistData && wishlistData.wishlists;
  const [profile, setProfile] = useState(false);
  const [auth, setAuth] = useState(null);
  const { compareProducts } = useSelector((state) => state.compareProducts);
  useEffect(() => {
    if (getLoginContexts.loginPopup === false) {
      setAuth(() => JSON.parse(localStorage.getItem("auth")));
    }
  }, [getLoginContexts.loginPopup]);
  const profilehandler = () => {
    setProfile(!profile);
  };
  const logout = () => {
    if (auth) {
      apiRequest.logout(auth.access_token);
      localStorage.removeItem("auth");
      dispatch(fetchWishlist());
      router.push("/login");
    }
  };
  //cart
  const { cart } = useSelector((state) => state.cart);
  const [cartItems, setCartItem] = useState(null);
  useEffect(() => {
    cart && setCartItem(cart.cartProducts);
  }, [cart]);
  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex  justify-between items-center h-full space-x-4">
            <div className="flex flex-row space-x-7 ml-7">
              <div className="relative">
                <Link href="/" passHref legacyBehavior>
                  <a rel="noopener noreferrer">
                    {settings && (
                      <Image
                        width="70"
                        height="34"
                        objectFit="scale-down"
                        src={`${
                          process.env.NEXT_PUBLIC_BASE_URL + settings.logo
                        }`}
                        alt="logo"
                      />
                    )}
                  </a>
                </Link>
              </div>
              <div className="w-[480px] h-[40px] pl-9">
                <SearchBox className="search-com" />
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="block py-8 px-2 ">
                <Link href="/become-seller" passHref legacyBehavior>
                  <a rel="noopener noreferrer">
                    <span className="text-[22px]  text-gray-500 p-2  font-500 cursor-pointer rounded-md">
                      {ServeLangItem()?.OF}
                    </span>
                  </a>
                </Link>
              </div>
              <div className=" border-l-2 border-[#93939c] h-[35px] mt-8">
                <span className="sr-only ">Vertical line</span>
              </div>
              {Multivendor() === 1 && (
                <div className="block py-8 px-2 ">
                  <Link href="/become-seller" passHref legacyBehavior>
                    <a rel="noopener noreferrer">
                      <span className="text-[22px]  text-gray-500 p-2  font-500 cursor-pointer rounded-md ">
                        {ServeLangItem()?.BE}
                      </span>
                    </a>
                  </Link>
                </div>
              )}
              <div className=" border-l-2 border-[#93939c] h-[35px] mt-8">
                <span className="sr-only ">Vertical line</span>
              </div>
              <div className="flex space-x-6 rtl:space-x-reverse items-center relative pl-3">
                <div>
                  {auth ? (
                    <button onClick={profilehandler} type="button">
                      <span className="text-qblack font-bold text-sm block">
                        {auth && auth.user.name}
                      </span>
                      <span className="text-qgray font-medium text-sm block">
                        {auth && auth.user.phone}
                      </span>
                    </button>
                  ) : (
                    <div className="flex flex-col items-center ml-2">
                      <Link href="/login" passHref legacyBehavior>
                        <a rel="noopener noreferrer">
                          <span className="cursor-pointer">
                            <Image
                              src={prof}
                              alt="cart"
                              width={20}
                              height={20}
                            />
                          </span>
                        </a>
                      </Link>
                      <span className="text-sm font-500 text-gray-500 mt-1">
                        Profile
                      </span>
                    </div>
                  )}
                </div>

                <div className=" py-3  flex flex-col items-center relative">
                  <Link href="/wishlist" passHref legacyBehavior>
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <Image
                          src={wish}
                          alt="Wishlist"
                          width={20}
                          height={20}
                        />
                      </span>
                    </a>
                  </Link>
                  <span className="text-sm font-500 text-gray-500 mt-2">
                    Wishlist
                  </span>
                  {/* <span className="w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-0.5 flex justify-center items-center text-xs py-5">
                    {wishlists ? wishlists.data.length : 0}
                  </span> */}
                </div>
                <div className="cart-wrapper group relative py-4">
                  <div className="flex flex-col items-center relative py-3">
                    <Link href="/cart" passHref legacyBehavior>
                      <a rel="noopener noreferrer">
                        <span className="cursor-pointer">
                          <Image src={bag} alt="Cart" width={20} height={20} />
                        </span>
                      </a>
                    </Link>
                    <span className="text-sm font-500 text-gray-500 mt-1 ">
                      Cart
                    </span>
                    {/* <span className="w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-xs py-5">
                      {cartItems ? cartItems.length : 0}
                    </span> */}
                  </div>
                </div>

                {profile && (
                  <>
                    <div
                      onClick={() => setProfile(false)}
                      className="w-full h-full fixed top-0 left-0 z-30"
                      style={{ zIndex: "35", margin: "0" }}
                    ></div>
                    <div
                      className="w-[208px] h-[267px] bg-white absolute right-0 top-11 z-40 border-t-[3px] primary-border flex flex-col justify-between"
                      style={{
                        boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                      }}
                    >
                      <div className="menu-item-area w-full  p-5">
                        <ul className="w-full  flex flex-col space-y-7">
                          <li className="text-base text-qgraytwo">
                            <span>
                              {ServeLangItem()?.Hi}, {auth && auth.user.name}{" "}
                            </span>
                          </li>
                          <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                            <Link
                              href="/profile#dashboard"
                              passHref
                              legacyBehavior
                            >
                              <a rel="noopener noreferrer">
                                <span className="capitalize">
                                  {ServeLangItem()?.profile}
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                            <Link href="/contact" passHref legacyBehavior>
                              <a rel="noopener noreferrer">
                                <span className="capitalize">
                                  {ServeLangItem()?.Support}
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                            <Link href="/faq" passHref legacyBehavior>
                              <a rel="noopener noreferrer">
                                <span className="capitalize">
                                  {ServeLangItem()?.FAQ}
                                </span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="w-full h-10 flex justify-center items-center border-t border-qgray-border">
                        <button
                          onClick={logout}
                          type="button"
                          className="text-qblack text-base font-semibold"
                        >
                          {ServeLangItem()?.Sign_Out}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
