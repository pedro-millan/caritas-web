export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message, website } = req.body || {};

  if (website) return res.status(200).json({ ok: true });
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail =
    process.env.CONTACT_TO ||
    process.env.CONTACT_TO_EMAIL ||
    'caritasbanyeres@gmail.com';
  
  const fromEmail =
    process.env.CONTACT_FROM ||
    process.env.RESEND_FROM_EMAIL ||
    'Caritas Banyeres <contacto@caritasbanyeres.com>';

  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'RESEND_API_KEY is not configured' });
  }

  const html = `
    <h2>Nuevo mensaje desde la web de Cáritas Banyeres</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone || 'No indicado')}</p>
    <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Cáritas Banyeres · ${subject}`,
      html
    })
  });

  const data = await resendResponse.json().catch(() => ({}));

  if (!resendResponse.ok) {
    return res.status(500).json({ ok: false, error: 'Resend request failed', details: data });
  }

  return res.status(200).json({ ok: true });
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
