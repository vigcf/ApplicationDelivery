import { Product } from "./Types";
import ProductCards from "./ProductCards";

type Props = {
    products: Product[];
}
function ProductsList({products}: Props) {
    return (
    <div className="orders-list-container">
        <div className="orders-list-items">
            {products.map(product => (
                <ProductCards key={product.id} product={product}/>
            ))}
            
        </div>
       
    </div>
    )
}
export default ProductsList;