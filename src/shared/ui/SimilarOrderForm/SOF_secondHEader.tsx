import React from "react";
import ui from './SOF_UI.module.scss'


export const SOF_secondHeader: React.FC = () => {
    return <p className={ui.second_header}>В данном поле вы можете ввести предложение или вопрос заказчику, если заказчик выберет ваше предложение, он свяжется с вами в чате.</p>
}