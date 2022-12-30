import { useContext, createContext, ReactNode, useState } from 'react';
import { useLocalStorage } from '../Storage/UseLocalStorage';


type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    favQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const ShoppingCartProvider = ({children}: ShoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('Shopping Cart', []);


    function getItemQuantity (id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } 
            else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity (id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            }
            else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } 
                    else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart (id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )
    const favQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )


    return (
        <ShoppingCartContext.Provider 
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItems,
                cartQuantity,
                favQuantity
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export function useShoppingCart () {
    return useContext(ShoppingCartContext)
}