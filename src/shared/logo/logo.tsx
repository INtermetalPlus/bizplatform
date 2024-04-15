import React from 'react';
import styles from './logo.module.scss'

interface LogoProps {
  src: string;
  name: string;
  description: string;
}

const Logo: React.FC<LogoProps> = ({ src, name, description }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img className={styles.logo}
        src={src}
        alt="Company Logo"
      />
      <div>
        <label className={styles.companyName}>{name}</label>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Logo;

