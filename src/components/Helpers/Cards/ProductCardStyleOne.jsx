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
import ServeLangItem from "../ServeLangItem";
import Star from "../icons/Star";

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

  // Cart
  const varients = datas && datas.variants.length > 0 && datas.variants;
  const [getFirstVarients, setFirstVarients] = useState(
    varients && varients.map((v) => v.active_variant_items[0])
  );
  const [price, setPrice] = useState(null);
  const [offerPrice, setOffer] = useState(null);

  const addToCart = (id) => {
    const data = {
      id: id,
      token: auth() && auth().access_token,
      quantity: 1,
      variants:
        getFirstVarients &&
        getFirstVarients.length > 0 &&
        getFirstVarients.map((v) =>
          v ? parseInt(v.product_variant_id) : null
        ),
      variantItems:
        getFirstVarients &&
        getFirstVarients.length > 0 &&
        getFirstVarients.map((v) => (v ? v.id : null)),
    };
    if (auth()) {
      if (varients) {
        const variantQuery = data.variants.map((value, index) =>
          value ? `variants[]=${value}` : `variants[]=-1`
        );
        const variantString = variantQuery.map((value) => value + "&").join("");
        const itemsQuery = data.variantItems.map((value, index) =>
          value ? `items[]=${value}` : `items[]=-1`
        );
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
    } else {
      localStorage.setItem(
        "data-hold",
        JSON.stringify({ type: "add-to-cart", ...data })
      );
      loginPopupBoard.handlerPopup(true);
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

  // Compare product feature
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

  // Split the images string into an array
  const imageArray = datas.images ? datas.images.split(",") : [];

  return (
    <Link
      href={{ pathname: "/single-product", query: { slug: datas.slug } }}
      passHref
      legacyBehavior
    >
      <div className="main-wrapper-card relative border-2 border-bb">
        <div
          className="product-card-one w-full h-[370px] bg-white relative group overflow-hidden border border-gray-900"
          style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <div
            className="product-card-img w-full h-[300px] py-1 px-2"
            style={{ border: "none" }}
          >
            <div className="w-full h-full relative flex justify-center items-center border-none p-10">
              {imageArray.length > 0 ? (
                imageArray.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-full object-contain border-none"
                  >
                    <Image
                      layout="fill"
                      objectFit="scale-down"
                      src={datas.images}
                      alt={datas.name}
                      className="w-full h-full"
                    />
                  </div>
                ))
              ) : (
                <div className="w-full h-full"></div>
              )}
            </div>
          </div>
          <div className="product-card-details px-[20px] pb-[10px] relative pt-2">
            <div className="absolute w-full h-10 px-[30px] left-0 top-60 group-hover:top-[30px] transition-all duration-300 ease-in-out">
              <button
                onClick={() => addToCart(datas.id)}
                type="button"
                className="bg-custom-blue group relative w-full h-full flex shadow justify-center items-center overflow-hidden"
              >
                <div className="btn-content flex items-center space-x-3 rtl:space-x-reverse relative z-10">
                  <span className="text-white">Add to Cart</span>
                </div>
                <div className="bg-shape w-full h-full absolute bg-custom-blue text-white"></div>
              </button>
            </div>

            <Link
              href={{
                pathname: "/single-product",
                query: { slug: datas.slug },
              }}
              passHref
              legacyBehavior
            >
              <a rel="noopener noreferrer">
                <p className="title mb-2 text-[15px] font-600 text-gray-600 leading-[24px] line-clamp-2 hover:text-custom-blue cursor-pointer">
                  {datas.title}
                </p>
              </a>
            </Link>
            <div className="flex justify-between items-center mt-2">
              <div className="reviews flex space-x-[1px]">
                {Array.from({ length: datas.review }, (_, i) => (
                  <span key={i}>
                    <Star className="text-star" />
                  </span>
                ))}
                {datas.review < 5 &&
                  Array.from({ length: 5 - datas.review }, (_, i) => (
                    <span key={i} className="text-star">
                      <Star defaultValue={false} />
                    </span>
                  ))}
                <p className="price pl-8">
                  <span
                    suppressHydrationWarning
                    className={`main-price font-600 text-[15px] ${
                      offerPrice ? "line-through text-qgray" : "text-qred"
                    }`}
                  >
                    {offerPrice ? (
                      <span>{currency_icon && currency_icon + price}</span>
                    ) : (
                      <>
                        {isProductInFlashSale && (
                          <span
                            className={`line-through text-qgray font-500 text-[15px] mr-2`}
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
                      className="offer-price text-black font-600 text-[18px] ml-2"
                    >
                      <CheckProductIsExistsInFlashSale
                        id={datas.id}
                        price={offerPrice}
                      />
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
