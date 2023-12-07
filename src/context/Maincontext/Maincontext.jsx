import React, {  createContext } from 'react'
import BasketProvider from '../Basketcontext/Basketcontext'
import WishlistProvider from '../Wishlistcontext/Wishlistcontext'


export const MainContext =createContext()

function MainProvider({children}) {

  return (
    <div>
        <WishlistProvider>
          <BasketProvider>{children}</BasketProvider>
        
        </WishlistProvider>
    </div>
  )
}

export default MainProvider