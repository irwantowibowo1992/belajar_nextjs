import {useRouter} from 'next/router';

const DetailProductPage = () => {
    const {query} = useRouter();
    
    return (
        <div>
            <div>
                <h1>Detail Product For {query.slug}</h1>
            </div>
        </div>
    )
}

export default DetailProductPage;