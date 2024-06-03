import { fetcher } from '@/lib/swr/fetcher';
import { ProductType } from '@/types/product.type';
import DetailPoduct from '@/views/product/detail';
import {useRouter} from 'next/router';
import useSWR from 'swr';

const DetailProductPage = (props: {product: ProductType}) => {
    const {query} = useRouter();

    // Client Side
    /*
    const {data, error, isLoading} = useSWR(
        `https://fakestoreapi.com/products/${query.id}`,
        fetcher
    );
    */
    
    return (
        <div>
            {/* Client Side */}
            {/* <DetailPoduct product={data} /> */}

            {/* Server side */}
            {/* <DetailPoduct product={props.product} /> */}

            <DetailPoduct product={props.product} />
        </div>
    )
}

export default DetailProductPage;

/* Server Side Rendering
export async function getServerSideProps({params}: {params: {id: string}}) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const response = await res.json();

    return {
        props: {
            product: response,
        }
    }
}
*/

/*
    SSG menyediakan getStaticPaths khusus untuk rendering dynamic route
*/
export async function getStaticPaths() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const response = await res.json();

    const paths = response.map((product: any) => ({
        params: {
            // id di sini disesuaikan dengan nama file, karena [id].tsx maka params diisi id menjadi params.id
            id: product.id.toString(),
        }
    }));

    return {
        paths, fallback: false
    }
}

export async function getStaticProps({params}: {params: {id: string}}) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const response = await res.json();

    return {
        props: {
            product: response,
        }
    }
}