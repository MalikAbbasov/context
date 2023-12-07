import React, { useContext } from 'react'
import "./navbar.scss"
import { BasketContext } from '../../context/Basketcontext/Basketcontext'
import { WishlistContext } from '../../context/Wishlistcontext/Wishlistcontext'



function Navbar() {

const handleBasket=()=> {
    document.querySelector(".basket").classList.toggle("active")  
}

const handleWishlist=()=> {
    document.querySelector(".wishlist").classList.toggle("active")  
}

const {basket} = useContext(BasketContext)

const {wishlist} = useContext(WishlistContext)

    return (
        <div>
            <nav id='navbar'>
                <div className="container">
                    <div className="nav_img">
                        <img src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp" alt="" />
                    </div>
                    <div className="nav_pages">
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Pages</li>
                        </ul>

                    </div>
                    
                    <div className="nav_icons">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <i onClick={handleBasket}  class="fa-solid fa-cart-shopping">
                            <div className="basket_icon num">{basket.length ? basket.length : "0"}</div>
                        </i>
                        <i class="fa-solid fa-user"></i>
                        <i onClick={handleWishlist} class="fa-solid fa-heart">
                            <div className="wish_icon num">{wishlist.length ? wishlist.length : "0"}</div>
                        </i>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar