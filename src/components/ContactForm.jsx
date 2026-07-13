import { useState } from 'react';
import { Send, Phone } from 'lucide-react';

export default function ContactForm({ lang = 'es', compact = false }) {
  const [status, setStatus] = useState('idle');

  const t = {
    es: {
      name: 'Nombre',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      subject: 'Asunto',
      message: 'Mensaje',
      privacy: 'Acepto que Cáritas Banyeres use estos datos únicamente para responder a mi consulta.',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      ok: 'Mensaje enviado correctamente. Gracias por contactar.',
      error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo o escribe directamente al correo.',
      direct: 'Contacto directo',
      directText: 'También puedes contactar directamente en el teléfono'
    },
    va: {
      name: 'Nom',
      email: 'Correu electrònic',
      phone: 'Telèfon',
      subject: 'Assumpte',
      message: 'Missatge',
      privacy: 'Accepte que Càritas Banyeres use estes dades únicament per a respondre a la meua consulta.',
      send: 'Enviar missatge',
      sending: 'Enviant...',
      ok: 'Missatge enviat correctament. Gràcies per contactar.',
      error: 'No s’ha pogut enviar el missatge. Torna-ho a intentar o escriu directament al correu.',
      direct: 'Contacte directe',
      directText: 'També pots contactar directament al telèfon'
    }
  }[lang];

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('ok');
      form.reset();
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form className={`contact-form ${compact ? 'contact-form-home' : ''}`} onSubmit={handleSubmit}>
      <div className="direct-phone full"><Phone size={18} /><span>{t.directText}</span> <a href="tel:+34615975457">+34 615 97 54 57</a></div>
      <label>{t.name}<input name="name" type="text" required autoComplete="name" /></label>
      <label>{t.email}<input name="email" type="email" required autoComplete="email" /></label>
      <label>{t.phone}<input name="phone" type="tel" autoComplete="tel" /></label>
      <label>{t.subject}<input name="subject" type="text" required /></label>
      <label className="full">{t.message}<textarea name="message" rows={compact ? '5' : '7'} required /></label>
      <input type="text" name="website" className="honeypot" tabIndex="-1" autoComplete="off" />
      <label className="check full"><input type="checkbox" required /> <span>{t.privacy}</span></label>
      <button className="button-primary full" type="submit" disabled={status === 'sending'}>{status === 'sending' ? t.sending : t.send}<Send size={18} /></button>
      {status === 'ok' && <p className="form-status ok">{t.ok}</p>}
      {status === 'error' && <p className="form-status error">{t.error}</p>}
    </form>
  );
}
