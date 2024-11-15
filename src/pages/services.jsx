// pages/services.js
import styles from '../styles/services.module.css';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern websites.',
    icon: '/project 8.png',
  },
  {
    title: 'Graphic Design',
    description: 'Creating stunning visuals and graphics.',
    icon: '/project 7.jpg',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your website ranking on search engines.',
    icon: '/project 5.png',
  },
];

export default function Services() {
  return (
    <div className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
