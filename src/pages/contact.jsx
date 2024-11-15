// pages/contact.js
import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message..." rows="5" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
}
