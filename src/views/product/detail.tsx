import styles from './Product.module.scss';
import {ProductType} from '@/types/product.type';

const DetailPoduct = ({product}: {product: ProductType}) => {
    return (
        <div className={styles.product__content__item}>
            <div className={styles.product__content__item__image}>
                <img src={product.image} alt={product.title} />
            </div>
            <h4 className={styles.product__content__item__name}>
                {product.title}
            </h4>
            <p className={styles.product__content__item__category}>
                {product.category}
            </p>
            <p className={styles.product__content__item__price}>
                {product.price.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR'
                })}
            </p>
        </div>
    )
}

export default DetailPoduct;