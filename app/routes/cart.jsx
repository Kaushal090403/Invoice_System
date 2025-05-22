import { useState } from "react";
import { useLoaderData, Form } from "@remix-run/react";
import styles from './Styles/global.css';


export let loader = () => {
  let cart = [
    { id: 1, name: "Bohemian Platform Bed", price: 599.00, quantity: 1 },
    { id: 2, name: "Yoji Chair", price: 499.00, quantity: 1 },
  ];
  return cart;
};

export default function Cart() {
  let cart = useLoaderData();
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  return (
    <div>
      <h1>Cart</h1>

      <h2>Customer Details</h2>
      <Form method="post" action="/checkout">
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={customerDetails.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={customerDetails.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={customerDetails.address} onChange={handleChange} required />
        </div>

        <h2>Products Invoice</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="summary">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>GST (18%): ${gst.toFixed(2)}</p>
          <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>

        <button class="button" type="submit">Checkout</button>
      </Form>
    </div>
  );
}


export function links(){
  return [{rel:'stylesheet', href: styles}]
}
