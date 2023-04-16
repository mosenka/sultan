import styles from './errorpage.scss'

export const ErrorPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}> 404 </h1>
            <p className={styles.desc}> Ooops, page not found </p>
        </div>
    )
}
