import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import apiRequest from "../../../../utils/apiRequest";
import auth from "../../../../utils/auth";
import settings from "../../../../utils/settings";
import { fetchCart } from "../../../store/Cart";
import CheckProductIsExistsInFlashSale from "../../Shared/CheckProductIsExistsInFlashSale";
import ServeLangItem from "../ServeLangItem";

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

export default function ProductCardRowStyleTwo({ className, datas }) {
  const router = useRouter();
  const dispatch = useDispatch();

  // Cart state
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

    const variantQuery = data.variants.map((value, index) => {
      return value ? `variants[]=${value}` : `variants[]=-1`;
    });
    const variantString = variantQuery.map((value) => value + "&").join("");

    const itemsQuery = data.variantItems.map((value, index) => {
      return value ? `items[]=${value}` : `items[]=-1`;
    });
    const itemQueryStr = itemsQuery.map((value) => value + "&").join("");

    const uri = auth()
      ? `token=${data.token}&product_id=${data.id}&${variantString}${itemQueryStr}quantity=${data.quantity}`
      : `product_id=${data.id}&${variantString}${itemQueryStr}quantity=${data.quantity}`;

    apiRequest
      .addToCard(uri)
      .then((res) =>
        toast.success(<Redirect />, {
          autoClose: 5000,
        })
      )
      .catch((err) => {
        toast.error(
          err.response && err.response.data.message && err.response.data.message
        );
      });
    dispatch(fetchCart());
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

  const { currency_icon } = settings();
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [isProductInFlashSale, setData] = useState(null);

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
        <div
          data-aos="fade-up"
          className={`product-card-row-two w-full  ${className || ""}`}
        >
          <div className="w-full h-[105px] bg-white border border-primarygray px-5">
            <div className="w-full h-full flex space-x-5 justify-center items-center">
              <div className="w-[75px] h-full relative">
                <Image
                  layout="fill"
                  objectFit="scale-down"
                  src={`${datas.image}`}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 h-full flex flex-col justify-center">
                <Link
                  href={{
                    pathname: "/single-product",
                    query: { slug: datas.slug },
                  }}
                  passHref
                  legacyBehavior
                >
                  <a rel="noopener noreferrer">
                    <p className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-blue-600 cursor-pointer">
                      {datas.title}
                    </p>
                  </a>
                </Link>

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
                          <span className="line-through text-qgray font-500 text-base mr-2">
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
                <button
                  onClick={() => addToCart(datas.id)}
                  type="button"
                  className="w-[116px] h-[40px]"
                >
                  <span className="yellow-btn">
                    {ServeLangItem()?.Add_To_Cart}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
