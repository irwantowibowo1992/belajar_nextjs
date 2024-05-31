import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/product";
import { useEffect, useState } from "react";
import useSWR from "swr";

type ProductType = {
    id: number,
    title: string,
    price: number,
    image: string,
    category: string,
}

const ProductPage = () => {
    // const [products, setProducts] = useState<ProductType[]>([]);

    //useEffect(() => {
    //    fetch('https://fakestoreapi.com/products')
    //        .then(res=>res.json())
    //        .then(json => setProducts(json))
    //}, []);

    const {data, error, isLoading} = useSWR(
        'https://fakestoreapi.com/products',
        fetcher
    )

    console.log('Loading', isLoading);
    console.log('Error', error);
    console.log('Data', data);

    return (
        <>
            {/*<ProductView products={products} />*/}
            <ProductView products={isLoading ? [] : data} />
        </>
    )
}

export default ProductPage;