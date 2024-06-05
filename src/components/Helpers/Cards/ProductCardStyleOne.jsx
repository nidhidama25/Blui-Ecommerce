import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import apiRequest from "../../../../utils/apiRequest";
import auth from "../../../../utils/auth";
import settings from "../../../../utils/settings";
import { fetchCart } from "../../../store/Cart";
import { fetchCompareProducts } from "../../../store/compareProduct";
import { fetchWishlist } from "../../../store/wishlistData";
import LoginContext from "../../Contexts/LoginContext";
import CheckProductIsExistsInFlashSale from "../../Shared/CheckProductIsExistsInFlashSale";
import ProductView from "../../SingleProductPage/ProductView";
import ServeLangItem from "../ServeLangItem";
import Compair from "../icons/Compair";
import QuickViewIco from "../icons/QuickViewIco";
import Star from "../icons/Star";
import ThinLove from "../icons/ThinLove";

const Redirect = () => {
  return (
    <div className="flex space-x-2 items-center">
      <span className="text-sm text-gray-500">
        {ServeLangItem()?.Item_added}
      </span>
      <Link href="/cart">
        <span className="text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer">
          {ServeLangItem()?.Go_To_Cart}
        </span>
      </Link>
    </div>
  );
};

export default function ProductCardStyleOne({ datas }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { wishlistData } = useSelector((state) => state.wishlistData);
  const wishlist = wishlistData && wishlistData.wishlists;
  const wishlisted =
    wishlist && wishlist.data.find((id) => id.product.id === datas.id);
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [isProductInFlashSale, setData] = useState(null);
  const loginPopupBoard = useContext(LoginContext);
  useEffect(() => {
    if (websiteSetup) {
      const getId = websiteSetup.payload.flashSaleProducts.find(
        (item) => parseInt(item.product_id) === parseInt(datas.id)
      );
      if (getId) {
        setData(true);
      } else {
        setData(false);
      }
    }
  }, [websiteSetup]);
  const [arWishlist, setArWishlist] = useState(null);
  const [quickViewModal, setQuickView] = useState(false);
  const [quickViewData, setQuickViewData] = useState(null);
  const quickViewHandler = (slug) => {
    setQuickView(!quickViewModal);
    if (!quickViewData) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/product/${slug}`)
        .then((res) => {
          setQuickViewData(res.data ? res.data : null);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    if (quickViewModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [quickViewModal]);

  useEffect(() => {
    if (wishlisted) {
      setArWishlist(true);
    } else {
      setArWishlist(false);
    }
  }, [wishlisted]);
  const available =
    (datas.cam_product_sale /
      (datas.cam_product_available + datas.cam_product_sale)) *
    100;

  const addToWishlist = (id) => {
    if (auth()) {
      setArWishlist(true);
      apiRequest.addToWishlist({ id: id, token: auth().access_token });
      dispatch(fetchWishlist());
    } else {
      loginPopupBoard.handlerPopup(true);
    }
  };
  const removeToWishlist = (id) => {
    if (auth()) {
      setArWishlist(false);
      apiRequest.removeToWishlist({ id: id, token: auth().access_token });
      dispatch(fetchWishlist());
    } else {
      loginPopupBoard.handlerPopup(true);
    }
  };
  // cart
  const varients = datas && datas.variants.length > 0 && datas.variants;
  const [getFirstVarients, setFirstVarients] = useState(
    varients && varients.map((v) => v.active_variant_items[0])
  );
  const [price, setPrice] = useState(null);
  const [offerPrice, setOffer] = useState(null);
  const addToCart = (id) => {
    const data = {
      id: id,
      token: auth() && auth().access_token, // If the user is not logged in, this will be undefined
      quantity: 1,
      variants:
        getFirstVarients &&
        getFirstVarients.length > 0 &&
        getFirstVarients.map((v) =>
          v ? parseInt(v.product_variant_id) : null
        ),
      variantItems:
        getFirstVarients &&
        data.variantItems.length > 0 &&
        getFirstVarients.map((v) => (v ? v.id : null)),
    };

    // If the user is logged in, use the API to add the item to the cart
    if (auth()) {
      if (varients) {
        const variantQuery = data.variants.map((value, index) => {
          return value ? `variants[]=${value}` : `variants[]=-1`;
        });

        const variantString = variantQuery.map((value) => value + "&").join("");

        const itemsQuery = data.variantItems.map((value, index) => {
          return value ? `items[]=${value}` : `items[]=-1`;
        });
        const itemQueryStr = itemsQuery.map((value) => value + "&").join("");
        const uri = `token=${data.token}&product_id=${data.id}&${variantString}${itemQueryStr}quantity=${data.quantity}`;
        apiRequest
          .addToCard(uri)
          .then((res) =>
            toast.success(<Redirect />, {
              autoClose: 5000,
            })
          )
          .catch((err) => {
            console.log(err);
            toast.error(
              err.response &&
                err.response.data.message &&
                err.response.data.message
            );
          });
        dispatch(fetchCart());
      } else {
        const uri = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
        apiRequest
          .addToCard(uri)
          .then((res) =>
            toast.success(<Redirect />, {
              autoClose: 5000,
            })
          )
          .catch((err) => {
            console.log(err);
            toast.error(
              err.response &&
                err.response.data.message &&
                err.response.data.message
            );
          });
        dispatch(fetchCart());
      }
    }
    // If the user is not logged in, add the item to the local storage
    else {
      localStorage.setItem(
        "data-hold",
        JSON.stringify({ type: "add-to-cart", ...data })
      );
      toast.success("Item added to cart");
      dispatch(fetchCart()); // Fetch the updated cart data from local storage
    }
  };

  useEffect(() => {
    if (varients) {
      const prices = varients.map((v) =>
        v.active_variant_items.length > 0 && v.active_variant_items[0].price
          ? v.active_variant_items[0].price
          : 0
      );

      if (datas.offer_price) {
        const sumOfferPrice = parseFloat(
          prices.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0) +
            parseFloat(datas.offer_price)
        );
        setPrice(datas.price);
        setOffer(sumOfferPrice);
      } else {
        const sumPrice = parseFloat(
          prices.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0) +
            parseFloat(datas.price)
        );
        setPrice(sumPrice);
      }
    } else {
      setPrice(datas && datas.price);
      setOffer(datas && datas.offer_price);
    }
  }, [datas, varients]);

  /*compare product feature
   * add product for compare method
   * @params (id,token)
   * request method is (apiRequest)
   * */
  const productCompare = (id) => {
    if (auth()) {
      apiRequest
        .addProductForCompare(id, auth().access_token)
        .then((res) => {
          toast.success(res.data && res.data.notification);
          dispatch(fetchCompareProducts());
        })
        .catch((err) => {
          toast.error(err.response && err.response.data.notification);
          console.log(err);
        });
    } else {
      loginPopupBoard.handlerPopup(true);
    }
  };
  const { currency_icon } = settings();
  const [imgSrc, setImgSrc] = useState(null);
  const loadImg = (value) => {
    // const time = 3000;
    // setTimeout(() => {
    //   setImgSrc(value);
    // }, time);
    setImgSrc(value);
  };
  return (
    <Link
      href={{
        pathname: "/single-product",
        query: { slug: datas.slug },
      }}
      passHref
      legacyBehavior
    >
      <a className="card-link">
        <div className="main-wrapper-card relative rounded-md">
          <div
            className="product-card-one w-full h-[475px] bg-white relative group overflow-hidden"
            style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <div className="p-3 bg-qblue-white m-2 rounded-lg h-20">
              <Link
                href={{
                  pathname: "/single-product",
                  query: { slug: datas.slug },
                }}
                passHref
                legacyBehavior
              >
                <a rel="noopener noreferrer">
                  <p className="title mb-2 text-[15px] font-600 text-custom-blue leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer">
                    {datas.title}
                  </p>
                </a>
              </Link>
            </div>
            <div className="product-card-img w-full h-[300px] -mt-2 rounded-md">
              <div className="w-full h-full relative flex justify-center rounded-md items-center transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out">
                <Image
                  layout="fill"
                  objectFit="scale-down"
                  src={`${imgSrc ? imgSrc : "/assets/images/spinner.gif"}`}
                  alt=""
                  onLoadingComplete={() => loadImg(datas.image)}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="bg-custom-blue rounded-md product-card-details pb-[30px] relative pt-2">
              {/* add to card button */}
              <div className="absolute w-full h-10 px-[30px] left-0 top-40 group-hover:top-[10px] transition-all duration-300 ease-in-out">
                <button
                  onClick={() => addToCart(datas.id)}
                  type="button"
                  className="bg-qblue-white rounded-xl group relative w-full h-full flex shadow justify-center items-center overflow-hidden"
                >
                  <div className="btn-content flex items-center space-x-3 rtl:space-x-reverse relative z-10">
                    <span>
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        className="fill-current"
                      >
                        {/* SVG path */}
                      </svg>
                    </span>
                    <span>{ServeLangItem()?.Add_To_Cart}</span>
                  </div>
                  <div className="bg-shape w-full h-full absolute bg-qblack"></div>
                </button>
              </div>

              <div className="px-[30px]">
                <p className="price">
                  <span
                    suppressHydrationWarning
                    className={`main-price  font-600 text-[18px] ${
                      offerPrice ? "line-through text-qgray" : "text-qred"
                    }`}
                  >
                    {offerPrice ? (
                      <span>{currency_icon && currency_icon + price}</span>
                    ) : (
                      <>
                        {isProductInFlashSale && (
                          <span
                            className={`line-through text-qgray font-500 text-[16px] mr-2`}
                          >
                            {currency_icon &&
                              currency_icon + parseFloat(price).toFixed(2)}
                          </span>
                        )}
                        <CheckProductIsExistsInFlashSale
                          id={datas.id}
                          price={price}
                        />
                      </>
                    )}
                  </span>
                  {offerPrice && (
                    <span
                      suppressHydrationWarning
                      className="offer-price text-qred font-600 text-[18px] ml-2"
                    >
                      <CheckProductIsExistsInFlashSale
                        id={datas.id}
                        price={offerPrice}
                      />
                    </span>
                  )}
                </p>
              </div>
              <div className="reviews flex space-x-[1px] m-4 pl-3">
                {Array.from(Array(datas.review), () => (
                  <span key={datas.review + Math.random()}>
                    <Star />
                  </span>
                ))}
                {datas.review < 5 && (
                  <>
                    {Array.from(Array(5 - datas.review), () => (
                      <span
                        key={datas.review + Math.random()}
                        className="text-gray-500"
                      >
                        <Star defaultValue={false} />
                      </span>
                    ))}
                  </>
                )}
              </div>
            </div>
            {/* quick-access-btns */}
            <div className="quick-access-btns flex flex-col space-y-2">
              <button
                className=" absolute group-hover:right-4 -right-10 top-20  transition-all ease-in-out"
                onClick={() => quickViewHandler(datas.slug)}
                type="button"
              >
                <span className="hover:bg-qyellow w-10 h-10 flex justify-center text-black hover:text-white items-center transition-all duration-300 ease-in-out hover-bg-qyellow bg-primarygray rounded">
                  <QuickViewIco className="fill-current" />
                </span>
              </button>
              {!arWishlist ? (
                <button
                  className=" absolute group-hover:right-4 -right-10 top-[120px]  transition-all duration-300 ease-in-out"
                  type="button"
                  onClick={() => addToWishlist(datas.id)}
                >
                  <span className="hover:bg-qyellow w-10 h-10 flex text-black hover:text-white justify-center items-center transition-all duration-300 ease-in-out hover-bg-qyellow bg-primarygray rounded">
                    <ThinLove className="fill-current" />
                  </span>
                </button>
              ) : (
                <button
                  className="absolute group-hover:right-4 -right-10 top-[120px]  transition-all duration-300 ease-in-out"
                  type="button"
                  onClick={() => removeToWishlist(wishlisted && wishlisted.id)}
                >
                  <span className="hover:bg-qyellow w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                    <ThinLove fill={true} />
                  </span>
                </button>
              )}

              <button
                className=" absolute group-hover:right-4 -right-10 top-[168px]  transition-all duration-500 ease-in-out"
                type="button"
                onClick={() => productCompare(datas.id)}
              >
                <span className="hover:bg-qyellow w-10 h-10 flex justify-center text-black hover:text-white transition-all duration-300 ease-in-out items-center hover-bg-qyellow bg-primarygray rounded">
                  <Compair className="fill-current" />
                </span>
              </button>
            </div>
            {quickViewModal && quickViewData && (
              <div className="quicke-view-wrapper w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center ">
                <div
                  onClick={() => setQuickView(!quickViewModal)}
                  className="w-full h-full fixed left-0 right-0 bg-black  bg-opacity-25"
                ></div>
                <div
                  data-aos="fade-up"
                  className=" md:mx-10 xl:mt-[100px] rounded w-full bg-white relative lg:py-[40px] pt-[80px] pb-[40px] sm:px-[38px] px-3 md:mt-12 h-full overflow-y-scroll xl:overflow-hidden xl:mt-0 "
                  style={{ zIndex: "999" }}
                >
                  <div className="w-full h-full overflow-y-scroll overflow-style-none">
                    <ProductView
                      images={
                        quickViewData.gellery.length > 0
                          ? quickViewData.gellery
                          : []
                      }
                      product={quickViewData.product}
                    />
                  </div>
                  <button
                    onClick={() => setQuickView(!quickViewModal)}
                    type="button"
                    className="absolute right-3 top-3"
                  >
                    <span className="text-red-500 w-12 h-12 flex justify-center items-center rounded border border-qred">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* <span className="anim bottom"></span>
          <span className="anim right"></span>
          <span className="anim top"></span>
          <span className="anim left"></span> */}
        </div>
      </a>
    </Link>
  );
}
