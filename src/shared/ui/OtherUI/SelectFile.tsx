import React from "react";
import ui from './OtherUI_UI.module.scss'
import Image from "next/image";
import pin from '../../assets/icons/for_file_input_icon.png'


export const SelectFile: React.FC = () => {
    return (
        <>
            <input type="file" id="select_file" className={ui.file_input} disabled/>
            <label htmlFor="select_file" className={ui.file_input__label}>
                <Image
                width={18}
                height={19}
                src={pin}
                alt="pin"
                />
                <span>Добавить файл</span>
            </label>
        </>
    )
}