// components/ServiceCard.js
import Image from 'next/image';
import styles from '../styles/serviceCard.module.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className={styles.serviceCard}>
      <Image src={icon} alt={title} width={60} height={60} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
