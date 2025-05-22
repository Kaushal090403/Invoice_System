import { Link } from "@remix-run/react";
import styles from './Styles/Bedding.css';
import bed1 from "./images/BeddingImages/bed1.jpeg";
import bed2 from "./images/BeddingImages/bed2.jpeg";
import bed3 from "./images/BeddingImages/bed3.jpeg";
import bed4 from "./images/BeddingImages/bed4.jpeg";
import bed5 from "./images/BeddingImages/bed5.jpeg";
import bed6 from "./images/BeddingImages/bed6.jpeg";

export default function DiffBeddings(){
    return(
        <body>
            <header>
                <div class="nav">
                    <h1>Beddings</h1>
                    <ul class="nav-links">
                        <Link to="/cart">Go To Cart </Link>
                    </ul>
                </div>
            </header>

            <main>
                <section class="products">
                    <div class="product-grid">
                        <div class="product">
                            <img src={bed1} alt="Bohemian Platform Bed"/>
                            <p>Bohemian Platform Bed</p>
                            <p>$699.00</p>
                            <button class="button">Cart</button>
                        </div>
                        <div class="product">
                            <img src={bed2} alt="Yoji Chair"/>
                            <p>Yoji Chair</p>
                            <p>$549.00</p>
                            <button class="button">Cart</button>
                        </div>
                        <div class="product">
                            <img src={bed3} alt="Elise Vanity And Stool Set"/>
                            <p>Elise Vanity And Stool Set</p>
                            <p>$649.00</p>
                            <button class="button">Cart</button>
                        </div>
                        <div class="product">
                            <img src={bed4} alt="Amelia Nightstand"/>
                            <p>Amelia Nightstand</p>
                            <p>$279.00</p>
                            <button class="button">Cart</button>
                        </div>
                        <div class="product">
                            <img src={bed5} alt="Amelia Nightstand"/>
                            <p>Amelia Nightstand</p>
                            <p>$279.00</p>
                            <button class="button">Cart</button>
                        </div>
                        <div class="product">
                            <img src={bed6} alt="Amelia Nightstand"/>
                            <p>Amelia Nightstand</p>
                            <p>$279.00</p>
                            <button class="button">Cart</button>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    )
}

export function links(){
    return [{rel:'stylesheet', href: styles}]
  }
  