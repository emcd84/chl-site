import styles from '../../styles/component-styles/Menu.module.css'
import Link from 'next/link';

export default function Menu() {
    return(
        <div className={styles.TopMenu}>
            <div className={styles.menuContent}>
                <h1 className={styles.header} id={styles.siteName}>CHL Stats</h1>
                <h2 className={styles.link} id={styles.homeLink}>Home</h2>
                <h2 className={styles.link} id={styles.skatersLink}>
                    <Link href='../playerPage/PlayerPage'>
                        <a>Skaters</a>
                    </Link>
                </h2>
                <h2 className={styles.link} id={styles.teamsLink}>Teams</h2>
                <h2 className={styles.link} id={styles.blogLink}>Blog</h2>
                <h2 className={styles.link} id={styles.glossaryLink}>Glossary</h2>
            </div>
        </div>
    )
}