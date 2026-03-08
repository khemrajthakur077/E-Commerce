import { useSelector, useDispatch } from "react-redux";

function CartPage() {

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const increaseQty = (id) => {
    dispatch({ type: "cart/increaseQty", payload: id });
  };

  const decreaseQty = (id) => {
    dispatch({ type: "cart/decreaseQty", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "cart/removeItem", payload: id });
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full border text-center">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>

            {cartItems.map((item) => (

              <tr key={item.id} className="border-b">

                {/* product */}

                <td className="flex items-center gap-3 p-4">
                  <img src={item.img} className="w-16"/>
                  <p>{item.name}</p>
                </td>

                {/* price */}

                <td>{item.price}</td>

                {/* quantity */}

                <td>
                  <div className="flex justify-center gap-3">

                   <button onClick={() => dispatch(decreaseQty(item.id))}>
  -
</button>

<span>{item.quantity}</span>

<button onClick={() => dispatch(increaseQty(item.id))}>
  +
</button>

<button onClick={() => dispatch(removeItem(item.id))}>
  Remove
</button>

                  </div>
                </td>

                {/* subtotal */}

                <td>{item.price * item.quantity}</td>

               

              </tr>

            ))}

          </tbody>
        </table>
      </div>

      {/* Bottom Section */}

      <div className="flex flex-col md:flex-row justify-between mt-10 gap-8">

        {/* Coupon */}

        <div className="flex gap-3 ">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-4 py-2"
          />

          <button className="bg-red-500 text-white px-5 py-2">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}

        <div className="border p-6 w-full md:w-80">

          <h2 className="font-semibold text-lg mb-4">
            Cart Total
          </h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between font-bold mb-4">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <button className="bg-red-500 text-white w-full py-2">
            Proceed to checkout
          </button>

        </div>

      </div>

    </div>
  );
}

export default CartPage;