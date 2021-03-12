import React, { useState, useEffect } from "react";
import Products from "../mattresses.json";
import "../css/Shop.css";

function Shop() {
    const imageSize = {
        maxWidth: "100%",  
    };

    const pos = {
        float: "left",
    }
    
    const [img, setImg] = useState("images/classic-carousel.jpg");
    const [name, setName] = useState("Saatva Classic");
    const [price, setPrice] = useState("999");
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(0);

    useEffect(() => {
        setActive(0);
    }, []);

    return (
        <>
        <nav className="navbar navbar-expand-lg justify-content-between">
            <a href="/">Saavta</a>
            <div className="cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div className="badge">
                    {count}
                </div>
            </div>
        </nav>   
        <div className="App container" >
            
            <div className="row">
                <div className="col-sm-6">
                    <img src={img} alt={img} style={imageSize}/>
                </div>
                <div className="col-sm-6 product-info">
                    <h1 style={pos}>Choose your Mattress</h1>
                    <span className="select-mattress-type" style={pos}>SELECT MATTRESS TYPE</span>
                    
                    <div className="variants-btn" style={pos}>
                        {Products.map((items, index) =>
                            <>
                                <button className={`btn ${ active === index ? "active" : ""} `} key={index}
                                    onClick={() => {
                                        setImg(items.imageFileName);
                                        setName(items.name);
                                        setPrice(items.price);
                                        setActive(index)
                                    }}
                                >
                                    {items.name}
                                </button>
                                    
                            
                            </>
                        )}
                    </div> 
                    <br />
                    <div className="product-detail" style={pos}>
                        <p style={{float: "left"}}>{name} Mattress</p>
                        <p style={{float: "right"}}>${price}</p>
                    </div>
                    <div className="cart-btn" style={pos}>
                        <button className="btn"
                            onClick={() => {
                                setCount(count+1);
                            }}
                        >Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Shop;