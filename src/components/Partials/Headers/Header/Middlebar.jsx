import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiRequest from "../../../../../utils/apiRequest";
import { fetchWishlist } from "../../../../store/wishlistData";
import Cart from "../../../Cart";
import LoginContext from "../../../Contexts/LoginContext";
import SearchBox from "../../../Helpers/SearchBox";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import Compair from "../../../Helpers/icons/Compair";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinLove from "../../../Helpers/icons/ThinLove";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import Multivendor from "../../../Shared/Multivendor";
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
          <div className="flex justify-between items-center h-full">
            <div className="relative">
              <Link href="/" passHref legacyBehavior>
                <a rel="noopener noreferrer">
                  {settings && (
                    <Image
                      width="153"
                      height="44"
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
            <div className="w-[517px] h-[44px] rounded-md">
              <SearchBox className="search-com rounded-md" />
            </div>
            <div className="flex space-x-6 rtl:space-x-reverse items-center relative">
              <div className="compaire relative">
                {auth ? (
                  <Link href="/products-compaire" passHref legacyBehavior>
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <Compair className="fill-current" />
                      </span>
                    </a>
                  </Link>
                ) : (
                  <Link href="/login" passHref legacyBehavior>
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <Compair className="fill-current" />
                      </span>
                    </a>
                  </Link>
                )}

                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  {compareProducts ? compareProducts.products.length : 0}
                </span>
              </div>
              <div className="favorite relative">
                <Link href="/wishlist" passHref legacyBehavior>
                  <a rel="noopener noreferrer">
                    <span className="cursor-pointer">
                      <ThinLove className="fill-current" />
                    </span>
                  </a>
                </Link>
                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  {wishlists ? wishlists.data.length : 0}
                </span>
              </div>
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="/cart" passHref legacyBehavior>
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <ThinBag />
                      </span>
                    </a>
                  </Link>
                  <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                    {cartItems ? cartItems.length : 0}
                  </span>
                </div>

                <Cart className="absolute ltr:-right-[45px] rtl:-left-[45px] top-11 z-50 hidden group-hover:block" />
              </div>
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
                  <Link href="/login" passHref legacyBehavior>
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <ThinPeople />
                      </span>
                    </a>
                  </Link>
                )}
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
              {Multivendor() === 1 && (
                <li>
                  <Link href="seller-terms-condition" passHref legacyBehavior>
                    <a rel="noopener noreferrer">
                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                        {ServeLangItem()?.Seller_terms_and_conditions}
                      </span>
                    </a>
                  </Link>
                </li>
              )}
              {Multivendor() === 1 && (
                <div className="become-seller-btn">
                  <Link href="/become-seller" passHref legacyBehavior>
                    <a rel="noopener noreferrer">
                      <div className=" w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                        <div className="flex rtl:space-x-reverse space-x-2 items-center">
                          <span className="text-sm font-600">
                            {ServeLangItem()?.Become_seller}
                          </span>
                          <span className="transform rtl:rotate-180 fill-current ">
                            <svg
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current"
                            >
                              <rect
                                x="1.08984"
                                width="6.94106"
                                height="1.54246"
                                transform="rotate(45 1.08984 0)"
                              />
                              <rect
                                x="6"
                                y="4.9082"
                                width="6.94106"
                                height="1.54246"
                                transform="rotate(135 6 4.9082)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
