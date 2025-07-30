
import styles from './Contact.module.scss';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <h2>Contact Us</h2>
      <h4>We’d love to hear from you. Reach out through any method below or fill out the form.</h4>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <ul className={styles.contactList}>
            <li>
              <FaEnvelope className={styles.icon} />
              <strong>Email:</strong> <a href="mailto:armatgyumri@gmail.com">armatgyumri@gmail.com</a>
            </li>
            <li>
              <FaPhone className={styles.icon} />
              <strong>Phone:</strong> +374 94 00 00 00
            </li>
            <li>
              <FaMapMarkerAlt className={styles.icon} />
              <strong>Location:</strong> Arapi, Shirak Province, Armenia
            </li>
          </ul>


          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane />
            </a>
          </div>

        </div>

        <form className={styles.contactForm}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>

          <label>
            Email:
            <input type="email" name="email" required />
          </label>

          <label>
            Message:
            <textarea name="message" rows="5" required></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
