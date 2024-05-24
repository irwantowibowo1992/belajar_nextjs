import styles from '@/styles/404.module.scss';

const CustomNotFound = () => {
    return (
        <>
            <div className={styles.not_found}>
                <img className={styles.not_found__image} src="/404.png" alt="not-found" />
                {/* <h2 className={styles.error_message}>Halaman Tidak ditemukan</h2> */}
                <button className={styles.not_found__button}>To Home</button>
            </div>
        </>
    )
}

export default CustomNotFound;