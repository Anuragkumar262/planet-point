import { useState } from 'react';
import { showNotification } from '../utils/notifications';
import '../assets/main.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showNotification('Missing info', 'Please fill in name, email, and message.', 'error');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      showNotification('Thanks!', 'We have received your message and will contact you soon.', 'success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setSubmitting(false);
    }, 800);
  };

  return (
    <div className="contact-page">
      <section className="contact-section">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Have questions about PlanetPoint or partnerships? Send us a message.</p>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label" htmlFor="name">Name</label>
              <input id="name" name="name" className="form-control" value={form.name} onChange={onChange} placeholder="Your full name" />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="form-control" value={form.email} onChange={onChange} placeholder="you@example.com" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field full">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input id="subject" name="subject" className="form-control" value={form.subject} onChange={onChange} placeholder="How can we help?" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field full">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-control contact-textarea" value={form.message} onChange={onChange} placeholder="Write your message..." />
            </div>
          </div>
          <div className="form-actions">
            <button className="btn btn--primary" disabled={submitting}>{submitting ? 'Sending…' : 'Send Message'}</button>
          </div>
        </form>
      </section>
    </div>
  );
}
