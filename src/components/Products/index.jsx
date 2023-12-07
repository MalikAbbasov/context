import React, { useContext, useEffect, useState } from "react";
import "./product.scss";
import { BasketContext } from "../../context/Basketcontext/Basketcontext";
import { WishlistContext } from "../../context/Wishlistcontext/Wishlistcontext";
function Products() {


  const  {basket,removeBasket,addBasket ,setCountValue } = useContext(BasketContext);
  const  {wishlist,addWishlist,removeWishlist} = useContext(WishlistContext);
  

  const [product, setProduct] = useState([]);

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);


  const removeAsideBasket = () => {
    document.querySelector(".basket").classList.toggle("active");
  };
  
  const removeAsideWish = () => {
    document.querySelector(".wishlist").classList.toggle("active");
  };
  
  
  return (
    <div>
      <div id="product_page">
        <div className="container">
          <div className="text">
            <h1>FEATURED PRODUCT</h1>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
          <div className="basket">
            <i onClick={removeAsideBasket} className="fa-solid fa-xmark"></i>

            <div className="basket_card card">
              {basket.map((x) => (
                <ul key={x.id}>
                  <img src={x.image} alt="" />
                  <li className="category">{x.category}</li>
                  <li>{x.price}$</li>
                  <li>{x.count}</li>
                  <button
                    className="btn add"
                    onClick={() => {
                      setCountValue(true, x)
                    }}
                    >
                    +
                  </button>
                  <button
                    className="btn del"
                    onClick={() => {
                      setCountValue(false, x)
                    }
                  }
                  >
                    -
                  </button>
                  <button onClick={() => removeBasket(x.id)}>
                    remove basket
                  </button>
                </ul>
              ))}
            </div>


          </div>

          <div className="wishlist">
            <i onClick={removeAsideWish} className="fa-solid fa-xmark"></i>

            <div className="wishlist_card card">
              {wishlist.map((x) => (
                <ul key={x.id}>
                  <img src={x.image} alt="" />
                  <li className="category">{x.category}</li>
                  <li>{x.price}$</li>
                  <i onClick={() => removeWishlist(x.id)} className="removewish">
                  <i className="fa-solid fa-thumbs-up"></i>
                  <i className="fa-solid fa-thumbs-down"></i>
                  </i>
                  
                </ul>
              ))}
            </div>


          </div>

          <div className="products">
            {product.map((x) => (
              <ul key={x.id}>
                <img src={x.image} alt="" />
                <li className="category">{x.category}</li>
                <li>{x.price}$</li>
                <div className="buttons">
                  <i className="fa-solid fa-user"></i>
                  <i
                    onClick={() => addBasket(x)}
                    className="fa-solid fa-cart-shopping"
                    ></i>
                  <i onClick={() => addWishlist(x)} className="fa-solid fa-heart"></i>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;


