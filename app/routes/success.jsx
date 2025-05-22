import { Link } from "@remix-run/react";
import styles from './Styles/global.css';

export default function Success() {
    return (
      <div>
        <h1>Order Successful!</h1>
        <p>Your order has been successfully processed.</p>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
  
  
export function links(){
    return [{rel:'stylesheet', href: styles}]
  }