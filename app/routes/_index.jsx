import { Link } from "@remix-run/react";
import furniture from "./images/Furniture.jpg";
import beds from "./images/Beddings.jpg";
import mostliked from "./images/MostLiked.jpg";
import wallart from "./images/WallArt.jpeg";
import Bbed from "./images/BohemianBed.jpeg";
import yojichair from "./images/YojiChair.jpeg";
import nightstand from "./images/Nightstand.jpeg";
import vanity from "./images/VanityChair.jpeg";
import styles from './Styles/home.css';

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export let loader = () => {
  return [
    { id: 1, name: "Bohemian Platform Bed", price: 599.00 },
    { id: 2, name: "Yoji Chair", price: 499.00 },
    { id: 3, name: "Elise Vanity And Stool Set", price: 549.00 },
    { id: 4, name: "Amelia Nightstand", price: 379.00 },
  ];
};

export default function Index() {

  
  return (
    <body>
        <header>
            <div class="nav">
                <h1>Urban Outfitters</h1>
                <ul class="nav-links">
                    <Link to="/cart">Go To Cart </Link>
                </ul>
            </div>
        </header>
    
        <main>
            <section class="category-overview">
                <div class="category">
                    <img src={furniture} alt="Furniture"/>
                    <p>Furniture</p>
                </div>
                <div class="category">
                    <img src={beds} alt="Bedding"/>
                    <p>Bedding</p>
                    
                </div>
                <div class="category">
                    <img src={mostliked} alt="Kitchen + Bar"/>
                    <p>Most Liked</p>
                </div>
                <div class="category">
                    <img src={wallart} alt="Wall Art"/>
                    <p>Wall Art</p>
                </div>
            </section>
    
            <section class="products">
                <aside class="filters">
                    <h3>Browse by:</h3>
                    <ul>
                        <li><Link to="/Bedding">Bedding</Link></li>
                        <li><Link to="#">Furniture</Link></li>
                        <li><Link to="#">Art + Décor</Link></li>
                        <li><Link to="#">Kitchen + Bar</Link></li>
                        
                    </ul>
                </aside>
    
                <div class="product-grid">
                    <div class="product">
                        <img src={Bbed} alt="Bohemian Platform Bed"/>
                        <p>Bohemian Platform Bed</p>
                        <p>$699.00</p>
                        <button class="button">Cart</button>
                    </div>
                    <div class="product">
                        <img src={yojichair} alt="Yoji Chair"/>
                        <p>Yoji Chair</p>
                        <p>$549.00</p>
                        <button class="button">Cart</button>
                    </div>
                    <div class="product">
                        <img src={vanity} alt="Elise Vanity And Stool Set"/>
                        <p>Elise Vanity And Stool Set</p>
                        <p>$649.00</p>
                        <button class="button">Cart</button>
                    </div>
                    <div class="product">
                        <img src={nightstand} alt="Amelia Nightstand"/>
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


