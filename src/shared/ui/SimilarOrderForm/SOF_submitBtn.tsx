import React from "react";
import ui from './SOF_UI.module.scss'
import { SOP_tarrifModal } from "@/features/lib/helpers/CustomHook";


export const SOF_submitBtn: React.FC = () => {
    const {openTarrifModal} = SOP_tarrifModal()

    const handleClick = (event: any) => {
        openTarrifModal()
        event.preventDefault();
      };

    return <button className={ui.submit_btn} onClick={handleClick}>Отправить предложение</button>
}