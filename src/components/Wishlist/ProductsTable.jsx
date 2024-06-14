import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import apiRequest from "../../../utils/apiRequest";
import auth from "../../../utils/auth";
import settings from "../../../utils/settings";
import { fetchCart } from "../../store/Cart";
import { fetchWishlist } from "../../store/wishlistData";
import ServeLangItem from "../Helpers/ServeLangItem";
import CheckProductIsExistsInFlashSale from "../Shared/CheckProductIsExistsInFlashSale";
export default function ProductsTable({ className, products, datas }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [mainProduct, setMainProducts] = useState(null);

  const price = (item) => {
    if (item) {
      if (item.product.offer_price) {
        if (
          item.product.active_variants &&
          item.product.active_variants.length > 0
        ) {
          const prices = item.product.active_variants.map((item) =>
            item
              ? parseInt(
                  item.active_variant_items.length > 0
                    ? item.active_variant_items[0].price
                    : 0
                )
              : 0
          );
          const sumVarient = prices.reduce((p, c) => p + c, 0);
          return parseInt(item.product.offer_price) + sumVarient;
        } else {
          return parseInt(item.product.offer_price);
        }
      } else {
        if (
          item.product.active_variants &&
          item.product.active_variants.length > 0
        ) {
          const prices = item.product.active_variants.map((item) =>
            item
              ? parseInt(
                  item.active_variant_items.length > 0
                    ? item.active_variant_items[0].price
                    : 0
                )
              : 0
          );
          const sumVarient = prices.reduce((p, c) => p + c, 0);
          return parseInt(item.product.price) + sumVarient;
        } else {
          return item.product.price;
        }
      }
    }
  };

  useEffect(() => {
    if (products) {
      setMainProducts(
        products.data.map((item) => ({
          ...item,
          totalPrice: item.product.price,
        }))
      );
    } else {
      setMainProducts(null);
    }
  }, [products]);

  const removeToWishlist = (id) => {
    if (auth()) {
      apiRequest.removeToWishlist({ id: id, token: auth().access_token });
      dispatch(fetchWishlist());
    } else {
      router.push("/login");
    }
  };

  const Redirect = () => (
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
  const varients = datas && datas.variants.length > 0 && datas.variants;
  const [getFirstVarients, setFirstVarients] = useState(
    varients && varients.map((v) => v.active_variant_items[0])
  );

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
        const variantQuery = data.variants
          .map((value) => (value ? `variants[]=${value}` : `variants[]=-1`))
          .join("&");
        const itemsQuery = data.variantItems
          .map((value) => (value ? `items[]=${value}` : `items[]=-1`))
          .join("&");
        const uri = `token=${data.token}&product_id=${data.id}&${variantQuery}&${itemsQuery}&quantity=${data.quantity}`;

        apiRequest
          .addToCard(uri)
          .then((res) => toast.success(<Redirect />, { autoClose: 5000 }))
          .catch((err) => {
            console.error(err);
            toast.error(err.response?.data?.message);
          });

        dispatch(fetchCart());
      } else {
        const uri = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
        apiRequest
          .addToCard(uri)
          .then((res) => toast.success(<Redirect />, { autoClose: 5000 }))
          .catch((err) => {
            console.error(err);
            toast.error(err.response?.data?.message);
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

  const { currency_icon } = settings();
  return (
    <div className={`w-full ${className || ""}`}>
      <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="text-[13px] font-medium text-black  whitespace-nowrap px-2 border-b default-border-bottom uppercase">
              <td className="py-4 capitalize pl-10 block whitespace-nowrap">
                {ServeLangItem()?.Product}
              </td>
              <td className="py-4 capitalize whitespace-nowrap text-center">
                {ServeLangItem()?.Price}
              </td>
              <td className="py-4 capitalize whitespace-nowrap text-center block">
                {ServeLangItem()?.Action}
              </td>
            </tr>
            {mainProduct &&
              mainProduct.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="ltr:pl-10 rtl:pr-10 py-4 capitalize w-[380px]">
                    <div className="flex space-x-6 rtl:space-x-reverse items-center">
                      <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED] relative">
                        <Image
                          layout="fill"
                          src={`${
                            process.env.NEXT_PUBLIC_BASE_URL +
                            item.product.thumb_image
                          }`}
                          alt="product"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <Link
                          href={{
                            pathname: "/single-product",
                            query: { slug: item.product.slug },
                          }}
                        >
                          <p className="font-medium text-[15px] text-qblack hover:text-blue-500 cursor-pointer">
                            {item.product.name}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 capitalize px-2">
                    <div className="flex space-x-1 rtl:space-x-reverse items-center justify-center">
                      <span
                        suppressHydrationWarning
                        className="text-[15px] font-normal"
                      >
                        <CheckProductIsExistsInFlashSale
                          id={item.product_id}
                          price={price(item)}
                        />
                      </span>
                    </div>
                  </td>
                  <td className="text-right py-4 capitalize">
                    <div className="flex space-x-1 items-center justify-center">
                      <button
                        onClick={() => addToCart(item.id, item.product)}
                        type="button"
                        className="h-[35px] px-4 bg-custom-blue text-white rounded-md mr-3"
                      >
                        Add To Cart
                      </button>
                      <span
                        className="cursor-pointer"
                        onClick={() => removeToWishlist(item.id)}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                            fill="#AAAAAA"
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
