import React, { useState } from 'react';
import styles from './SupportArmath.module.scss';

const SupportSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className={styles.supportSection}>
      <h2>Support Armath</h2>
      <p className={styles.description}>
        Your encouragement helps us grow the next generation of Armenian engineers.
      </p>

      <div className={styles.supportOptions}>
        <div className={styles.card}>
          <h3>Host a Workshop</h3>
          <p>Organize a session to share your knowledge with our students.</p>
        </div>
        <div className={styles.card}>
          <h3>Donate Equipment</h3>
          <p>Help us by providing computers, electronics or tools.</p>
        </div>
        <div className={styles.card}>
          <h3>Financial Support</h3>
          <p>Your donation funds labs, materials, and scholarships.</p>
        </div>
        <div className={styles.card}>
          <h3>Mentorship</h3>
          <p>Guide young learners by offering your expertise.</p>
        </div>
      </div>

      <div className={styles.cta}>
        <p>
          Want to support us? Fill out the form or email us at{' '}
          <a href="mailto:support@armatgyumri.am">support@armatgyumri.am</a>
        </p>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide Form' : 'Fill Support Form'}
        </button>
      </div>

      {showForm && (
        <form className={styles.form}>
          <label>
            Your Name:
            <input type="text" name="name" required />
          </label>

          <label>
            Email:
            <input type="email" name="email" required />
          </label>

          <label>
            Type of Support:
            <select name="supportType">
              <option value="workshop">Host a Workshop</option>
              <option value="donation">Donate Equipment</option>
              <option value="finance">Financial Support</option>
              <option value="mentorship">Mentorship</option>
            </select>
          </label>

          <label>
            Message:
            <textarea name="message" rows="4" />
          </label>

          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
};

export default SupportSection;
