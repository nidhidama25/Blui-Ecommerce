import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import isAuth from "../../../Middleware/isAuth";
import apiRequest from "../../../utils/apiRequest";
import auth from "../../../utils/auth";
import { fetchCart } from "../../store/Cart";
import BreadcrumbCom from "../BreadcrumbCom";
import EmptyCardError from "../EmptyCardError";
import PageTitle from "../Helpers/PageTitle";
import ServeLangItem from "../Helpers/ServeLangItem";
import ProductsTable from "./ProductsTable";

function CardPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [getCarts, setGetCarts] = useState([]);
  const deleteItem = (id) => {
    if (auth()) {
      apiRequest
        .deleteCartItem({
          id: id,
          token: auth().access_token,
        })
        .then((res) => {
          toast.warn(ServeLangItem()?.Remove_from_Cart, {
            autoClose: 1000,
          });
          dispatch(fetchCart());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return false;
    }
  };
  useEffect(() => {
    if (cart && cart.cartProducts.length > 0) {
      const cartsItems = cart.cartProducts.map((item) => {
        return {
          ...item,
          totalPrice: item.product.offer_price
            ? item.product.offer_price * parseInt(item.qty)
            : item.product.price * parseInt(item.qty),
        };
      });
      setGetCarts(cartsItems);
    } else {
      setGetCarts([]);
    }
  }, [cart]);
  const calCPriceDependQunatity = (id, qyt) => {
    setGetCarts(
      getCarts &&
        getCarts.length > 0 &&
        getCarts.map((cart) => {
          if (cart.id === id) {
            return {
              ...cart,
              totalPrice: cart.product.offer_price
                ? cart.product.offer_price * qyt
                : cart.product.price * qyt,
            };
          }
          return cart;
        })
    );
  };
  const serverReqIncreseQty = (id) => {
    if (auth()) {
      apiRequest.incrementQyt(id, auth().access_token);
      // .then(() => {
      //   // dispatch(fetchCart());
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
      dispatch(fetchCart());
    }
  };
  const serverReqDecreseQyt = (id) => {
    if (auth()) {
      apiRequest.decrementQyt(id, auth().access_token);
      // .then((res) => {
      //   // dispatch(fetchCart());
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
      dispatch(fetchCart());
    }
  };
  const clearCart = async () => {
    if (auth()) {
      setGetCarts([]);
      await apiRequest.clearCart({
        token: auth().access_token,
      });
      dispatch(fetchCart());
    } else {
      return false;
    }
  };

  return (
    <>
      {getCarts && getCarts.length === 0 ? (
        <div className="cart-page-wrapper w-full">
          <div className="container-x mx-auto">
            <BreadcrumbCom
              paths={[
                { name: ServeLangItem()?.home, path: "/" },
                { name: ServeLangItem()?.cart, path: "/cart" },
              ]}
            />
            <EmptyCardError />
          </div>
        </div>
      ) : (
        <div className="cart-page-wrapper w-full bg-white pb-[60px]">
          <div className="w-full">
            <PageTitle
              title="My Shopping Cart"
              breadcrumb={[
                { name: ServeLangItem()?.home, path: "/" },
                { name: ServeLangItem()?.cart, path: "/cart" },
              ]}
            />
          </div>
          <div className="w-full mt-[23px]">
            <div className="container-x mx-auto flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full sm:w-2/3">
                <ProductsTable
                  calCPriceDependQunatity={calCPriceDependQunatity}
                  incrementQty={serverReqIncreseQty}
                  decrementQty={serverReqDecreseQyt}
                  deleteItem={deleteItem}
                  cartItems={getCarts && getCarts}
                  className="mb-[30px]"
                />
                <div className="flex space-x-4 rtl:space-x-reverse justify-between items-center">
                  <button onClick={clearCart} type="button">
                    <div className="text-sm font-semibold w-[140px] h-[40px] bg-[#d3d0d0] rounded-md text-grey-800 flex items-center justify-center">
                      {ServeLangItem()?.Clear_Cart}
                    </div>
                  </button>
                  <Link href="/cart">
                    <div className="w-[140px] h-[40px] bg-[#d3d0d0] rounded-md flex justify-center items-center cursor-pointer">
                      <span className="text-sm font-semibold">
                        {ServeLangItem()?.Update_Cart}
                      </span>
                    </div>
                  </Link>
                </div>
                {/* New div for coupon code input and apply button */}
                <div className="flex space-x-4 rtl:space-x-reverse items-center mt-4 ">
                  <input
                    type="text"
                    // value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                    className="w-[400px] h-[50px] px-4 border-2 border-gray-300 rounded"
                  />
                  <button
                    // onClick={applyCoupon}
                    type="button"
                    className="h-[50px] bg-[#F2F4F5] text-gray-900 px-4 rounded"
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>

              <div className="order-summary w-full sm:w-1/3 bg-[#F6F6F6] p-4 mt-8 sm:mt-0">
                <h2 className="text-lg text-gray-600 font-semibold mb-4">
                  Order Summary
                </h2>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600  ">Subtotal</span>
                  <span className="text-sm">
                    ${/* Add your subtotal value here */}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 ">Discount</span>
                  <span className="text-sm">
                    ${/* Add your tax value here */}
                  </span>
                </div>

                <div className="flex justify-between font-semibold">
                  <span className="text-lg text-gray-600 ">Total</span>
                  <span className="text-lg">
                    ${/* Add your total value here */}
                  </span>
                </div>
                <Link href="/checkout">
                  <div className="mt-3 h-[50px] rounded-md bg-gradient-to-b from-gradient-start to-gradient-end flex justify-center items-center cursor-pointer">
                    <span className="text-sm font-semibold text-white">
                      {ServeLangItem()?.Checkout}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default isAuth(CardPage);
