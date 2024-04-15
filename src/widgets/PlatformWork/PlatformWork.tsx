import React from "react";
import frame from "./image/Frame .png";
import frame2 from "./image/Frame 2.png";
import frame3 from "./image/Frame 3.png";
import frame4 from "./image/Frame 4.png";
import frame5 from "./image/Frame 5.png";
import frame6 from "./image/на верх.png";
import styles from "./PlatformWork.module.scss";
import Image from "next/image";

export const PlatformWork: React.FC = (): React.ReactElement => {
  return (
    <div className={styles.platformwork}>
      <div className={styles.containerPlatform}>
        <div className={styles.ibpplatform}>
          <p>Как работает платформа </p>
          <p className={styles.ibp}>IBP</p>
        </div>
        <div>
          <div className={styles.frame1}>
            <div className={styles.frame1block}>
              <p className={styles.number}>01</p>
              <p className={styles.request}>
                Заказчик размещает заявку на любую продукцию
              </p>
              <Image src={frame} alt="" className={styles.frameImg} />
            </div>
            <Image
              src={frame2}
              width={250}
              height={250}
              alt=""
              className={styles.frame2Img}
            />
          </div>

          <div className={styles.frame2}>
            <div className={styles.frame2block}>
              <p className={styles.number}>02</p>
              <p className={styles.request2}>Поставщики предлагают цены</p>
              <Image src={frame} alt="" className={styles.frameImg} />
            </div>
            <Image
              src={frame3}
              width={250}
              height={250}
              alt=""
              className={styles.frame2Img}
            />
          </div>

          <div className={styles.frame3}>
            <div className={styles.frame1block}>
              <p className={styles.number}>03</p>
              <p className={styles.request3}>Заказчик выбирает поставщика</p>
              <Image src={frame} alt="" className={styles.frameImg} />
            </div>
            <Image
              src={frame4}
              width={250}
              height={250}
              alt=""
              className={styles.frame2Img}
            />
            <div className={styles.frameImgChat}>
              <Image src={frame5} alt="" className={styles.frame5Img} />
              <Image src={frame6} alt="" className={styles.frame6Img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
