import React from "react";
import styles from './GAS_ui.module.scss'


export const GAS_addImage: React.FC = () => {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    const handleImageChange = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <>
            <input 
            type="file" 
            onChange={handleImageChange} 
            style={{display: 'none'}} 
            id="fileInput"
            />
            <label htmlFor="fileInput" className={styles.imageBlock}>
                {selectedImage && <img
                src={selectedImage}
                alt="Selected"
                className={styles.addedFile}
                />}
            </label>
        </>
    )
}
