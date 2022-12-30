import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../../../Context/ShoppingCartContext'
import { ProductsList } from '../../../Data/Data'
import { formatCurrency } from '../../../Utilities/FormatCurrency'


type CartItem = {
    id: number
    quantity: number
}

const CartItem = ({id, quantity}: CartItem) => {
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    const item = ProductsList.find(i => i.id === id)
    if (item == null) return null
    return (
        <div className="d-flex align-items-center mb-4">
            <img 
                src={item.img} 
                alt={item.name} 
                style={{ width: "125px", height: "85px", objectFit: "cover", marginRight: '1rem' }}
            />
            <div className="me-auto">
                <div>
                    {item.name} {" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price)}
                </div>
                </div>
                <div className='me-4'> {formatCurrency(item.price * quantity)}</div>
                <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => increaseCartQuantity(item.id)}
                    style={{marginRight: '1rem'}}
                >
                    +
                </Button>
                <Button
                    variant="outline-success"
                    size="sm"
                    onClick={() => decreaseCartQuantity(item.id)}
                    style={{marginRight: '1rem'}}
                >
                    -
                </Button>
                <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                >
                    &times;
                </Button>
        </div>
    )
}

export default CartItem