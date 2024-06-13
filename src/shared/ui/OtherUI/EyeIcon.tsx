import React from "react";
import ui from './OtherUI_UI.module.scss'
import Image from "next/image";
import eye from '../../assets/icons/eye-icon.png'


export const EyeIcon: React.FC = () => {
    return (
        <Image
        width={24.61}
        height={17.5}
        src={eye}
        alt="eye icon"
        className={ui.eye_icon}
        />
    )
}