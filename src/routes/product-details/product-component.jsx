import './product-style.scss'
import { useParams } from 'react-router-dom'

const ProductComponent = () => {
    const { id } = useParams();
    console.log(useParams())
    return (
        <div>ProductComponent</div>
    )
}

export default ProductComponent