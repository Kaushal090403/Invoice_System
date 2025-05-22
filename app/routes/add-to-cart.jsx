import { redirect } from "@remix-run/node";
import styles from './Styles/global.css';

export let action = async ({ request }) => {
  let formData = await request.formData();
  let product = {
    id: formData.get("id"),
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: 1
  };

  // Here you would normally update the session cart, for simplicity we are redirecting
  return redirect("/cart");
};


export function links(){
    return [{rel:'stylesheet', href: styles}]
  }