import styles from "./NumberText.module.scss";
import Image from "next/image";
import Frame from '../../shared/assets/home/header/icons/Frame.png'
import Frame1 from '../../shared/assets/home/header/icons/Frame1.png'
export const NumberText = () => {
    return(
        <div className={styles.numberText}>
            <div className={styles.container}>
                <div className={styles.block1}>
                <div className={styles.numberText_block}>
                <div className={styles.blog_icon}>
                    <Image
                        alt="icon"
                        src={Frame}
                        width={147}
                        height={126}
                    />
                </div>
                <div className={styles.blog}>
                <div className={styles.blog_text}>
                    <h1><span>0 0 0 0</span>  заказов</h1>
                    
                </div>
                <div className={styles.blog_text}>
                    <h1>на <span>0 0 0 0</span> сом</h1>
                    
                </div>
                </div>
                </div>
                </div>
                <div className={styles.block2}>
                <div className={styles.numberText_block}>
                <div className={styles.blog_icon}>
                    <Image
                        alt="icon"
                        src={Frame1}
                        width={130}
                        height={143}
                    />
                </div>
                <div className={styles.blog}>
                <div className={styles.blog_text}>
                    <h1><span>0 0 0 0</span>  заказов</h1>
                    
                </div>
                <div className={styles.blog_text}>
                    <h1>на <span>0 0 0 0</span> сом</h1>
                    
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        
    )
}