import './../../app/globals.css'
import styles from "./Card.module.scss"


export default function Card() {
    return (
        <div className={styles.card_container}>
            <div className="container">
                <div className={styles.card_block}>
                    <div className={styles.card}>
                        <div className={styles.card_image}></div>
                        <div className={styles.product_card}>
                            <span className={styles.card_name}>Ветровка</span>
                            <span className={styles.card_price}>1200с</span>
                        </div>
                        <div className={styles.card_text}>
                            <span className={styles.card_text_description}>Женская ветровка, на осень/весну. Материал: холодок</span>
                            <span className={styles.card_text_description_adresse}>Место отправки: Москва</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
