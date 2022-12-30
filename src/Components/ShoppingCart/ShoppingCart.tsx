import {  Container, Offcanvas, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../../Context/ShoppingCartContext'
import { ProductsList } from '../../Data/Data'
import { formatCurrency } from '../../Utilities/FormatCurrency'
import CartItem from './CartItem/CartItem'


const ShoppingCart = () => {
    const { cartItems } = useShoppingCart()
    const productsCount = cartItems.reduce((sum, product) => sum + product.quantity, 0);
    return (
        <Container style={{marginBottom: '24.8rem'}}>
            {productsCount > 0 ? 
                <>
                {cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
                </>
            : 
                <>
                <h4>No items </h4>
                <Link to='/products' className='btn btn-primary w-100'>Shopping</Link>
                </>
            }
                    <div className="ms-auto fw-bold fs-5 mt-5">
                        Total{" "}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                            const item = ProductsList.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                        )}
                    </div>
        </Container>
    )
}

export default ShoppingCart