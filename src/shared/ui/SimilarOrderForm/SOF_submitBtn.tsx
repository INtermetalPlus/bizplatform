import React from "react";
import ui from './SOF_UI.module.scss'


export const SOF_submitBtn: React.FC = () => {
    return <button className={ui.submit_btn}>Отправить предложение</button>
}