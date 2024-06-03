import ProductView from "@/views/product";
import { ProductType } from "@/types/product.type";

const ProductPage = (props: {products: ProductType[]}) => {
    return (
        <div>
            <ProductView products={props.products} />
        </div>
    )
}

export default ProductPage;


// Dipanggil setiap melakukan request (halaman dibuka)
export async function getServerSideProps() {
    // fetch data
    const res = await fetch('https://fakestoreapi.com/products');
    const response = await res.json();

    return {
        props: {
            products: response,
        }
    }
}