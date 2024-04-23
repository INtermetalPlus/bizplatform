import React from "react";
import styles from "./TradeOperations.module.scss";

export const TradeOperations: React.FC = (): React.ReactElement => {
    return (
        <div className={styles.tradeOperation}>
                    <div className={styles.tradeOperation_title}>
                        <h2 className={styles.tradeOperation_title_header}>Желаете продать или купить оптом?</h2>
                        <h3 className={styles.tradeOperation_largeText}>Заполните поля!</h3>
                    </div>
            <div className={styles.container}>
                <div className={styles.tradeOperation_block}>
                    <div className={styles.tradeOperation_childBlock}>
                        <div className={styles.tradeOperation_form}>
                            <div className={styles.tradeOperation_childForm}>
                                <h4 className={styles.tradeOperation_headerForm}>Продать оптом</h4>
                                <div className={styles.tradeOperation_inputBlock}>
                                    <div className={styles.tradeOperation_inputText}>
                                        <p className={styles.tradeOperation_text}>Что хотите продать?</p>
                                        <input className={styles.tradeOperation_input} id={styles.inputWidth} type="text" placeholder="Я хочу продать..."/>
                                    </div>
                                    <div className={styles.tradeOperation_inputText}>
                                        <p className={styles.tradeOperation_text}>Номер телефона</p>
                                        <input className={styles.tradeOperation_input} type="text" placeholder="+996"/>
                                    </div>
                                    <div className={styles.tradeOperation_inputText}>
                                        <p className={styles.tradeOperation_text}>Электронная почта</p>
                                        <input className={styles.tradeOperation_input} type="text" placeholder="email@gmail.com"/>
                                    </div>
                                </div>
                                <div className={styles.tradeOperation_spanBtn}>
                                    <span className={styles.tradeOperation_span}>Lorem ipsum dolor sit amet consectetur. Orci dolor a consectetur arcu aenean cursus sed netus.</span>
                                    <button className={styles.tradeOperation_btn}>Найти клиентов</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tradeOperation_form}>
                            <div className={styles.tradeOperation_childForm}>
                                <h4 className={styles.tradeOperation_headerForm}>Купить оптом</h4>
                                <div className={styles.tradeOperation_inputBlock}>
                                    <div className={styles.tradeOperation_inputText}>
                                        <p className={styles.tradeOperation_text}>Что хотите купить?</p>
                                        <input className={styles.tradeOperation_input} id={styles.inputWidth} type="text" placeholder="Я хочу продать..."/>
                                    </div>
                                    <div className={styles.tradeOperation_inputText}>
                                        <p className={styles.tradeOperation_text}>Номер телефона</p>
                                        <input className={styles.tradeOperation_input} type="text" placeholder="+996"/>
                                    </div>
                                    <div className={styles.tradeOperation_inputText}>
                                        <p className={styles.tradeOperation_text}>Электронная почта</p>
                                        <input className={styles.tradeOperation_input} type="text" placeholder="email@gmail.com"/>
                                    </div>
                                </div>
                                <div className={styles.tradeOperation_spanBtn}>
                                    <span className={styles.tradeOperation_span}>Lorem ipsum dolor sit amet consectetur. Orci dolor a consectetur arcu aenean cursus sed netus.</span>
                                    <button className={styles.tradeOperation_btn}>Найти поставщиков</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};