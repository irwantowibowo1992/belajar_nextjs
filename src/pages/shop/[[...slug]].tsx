import {useRouter} from 'next/router';

const ShopPage = () => {
    const {query} = useRouter();
    
    return (
        <div>
            <div>
                <h1>Shop Page</h1>
                <p>{query.slug && `${query.slug[0]} - ${query.slug[1]}`}</p>
            </div>
        </div>
    )
}

export default ShopPage;