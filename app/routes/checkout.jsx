import { redirect } from "@remix-run/node";
import styles from './Styles/global.css';

export let action = async ({ request }) => {
  let formData = await request.formData();

  let customer = {
    name: formData.get("name"),
    email: formData.get("email"),
    address: formData.get("address"),
  };

  let cart = [
    { id: 1, name: "Bohemian Platform Bed", price: 599.00, quantity: 1 },
    { id: 2, name: "Yoji Chair", price: 499.00, quantity: 1 },
  ];

  let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let gst = subtotal * 0.18;
  let grandTotal = subtotal + gst;

  // In a real-world scenario, you would store or process the order
  console.log("Customer Details:", customer);
  console.log("Cart Details:", cart);
  console.log("Grand Total:", grandTotal);

  // Redirect to success page or confirmation
  return redirect("/success");
};


export function links(){
    return [{rel:'stylesheet', href: styles}]
  }