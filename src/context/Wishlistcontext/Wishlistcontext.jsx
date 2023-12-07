import React, { createContext } from 'react';
import useLocalStorage from '../../hook/useLocalStorage';

export const WishlistContext = createContext()

function WishlistProvider({ children }) {

  const [wishlist, setWishlist] = useLocalStorage("wishlist",[]);


  function addWishlist(item) {
    let elementIndex = wishlist.findIndex((x) => x.id === item.id);
    console.log(elementIndex);
    if (elementIndex !== -1) {
        const newWish = [...wishlist];
        newWish[elementIndex].count++;
        setWishlist(newWish);
    } else {
      setWishlist([...wishlist, { ...item, count: 1 }]);
    }
}

  const removeWishlist = (id) => {
    setWishlist(wishlist.filter((x) => x.id !== id))
  }

  const data = {
    wishlist, addWishlist, removeWishlist
  }

  return (
    <>

      <WishlistContext.Provider value={data}>
        {children}
      </WishlistContext.Provider>

    </>
  )
}

export default WishlistProvider