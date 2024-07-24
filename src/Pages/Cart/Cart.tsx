import { useSelector , useDispatch } from "react-redux";
import { removeFromCart } from '../../Reduxe/slice/cartSlice/cartSlice';
import { classNames } from "primereact/utils";
import emptyCart from "../../assets/emptyCart.jpg";
import { cartItems } from "../../Reduxe/slice/cartSlice/cartSlice.selector";
import "./Cart.css";
import { Button } from "primereact/button";

function Cart() {
  const cartItem = useSelector(cartItems);
  const dispatch = useDispatch();
  let total = 0;
  const handleRemove = (product) => {
    console.log(product);
    dispatch(removeFromCart(product));
  };

  const listItem = (product, qty: number) => {
    total += product.price * qty;
    const image = JSON.parse(product.images);
    return (
      <div className="surface-border hello">
        <div className="col-12 " key={product.id}>
          <div
            className={classNames(
              "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
            )}
          >
            <img
              className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
              src={image[0]}
              alt={product.name}
            />
            <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
              <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                <div className="text-2xl font-bold text-900">
                  {product.title}
                </div>
                <div className="flex align-items-center gap-3">
                  <span className="flex align-items-center gap-2">
                    <i className="pi pi-tag"></i>
                    <span className="font-semibold">
                      {product.category.name}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${product.price} X {qty}</span>
              <Button
                icon="pi pi-trash"
                className="p-button-rounded"
                onClick={() => handleRemove(product)}
                disabled={product.inventoryStatus === "OUTOFSTOCK"}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItem.length === 0 ? (
        <img className="emptyCart" src={emptyCart} alt="Your Cart is Empty" />
      ) : (
        cartItem.map((item) => listItem(item.product, item.qty))
      )}
      <div className="total">
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
}
export default Cart;
