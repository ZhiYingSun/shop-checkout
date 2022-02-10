import Button  from "@material-ui/core/Button";
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <h3>${item.price}</h3>
        </div>
        <Button variant="contained" onClick={() => handleAddToCart(item)}><h3>Add to Cart</h3></Button>
    </Wrapper>
)

export default Item;