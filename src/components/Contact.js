// ✅ Contact.js - نموذج الاتصال بنفس ألوان الموقع الداكن الأزرق
import React, { useEffect, useState } from "react";

export const Contact = () => {
  const [captcha, setCaptcha] = useState('');
  const [input, setInput] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let text = "";
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(text);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'الرجاء إدخال الاسم';
    if (!formData.email.trim()) newErrors.email = 'الرجاء إدخال البريد الإلكتروني';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'البريد الإلكتروني غير صالح';
    if (!formData.subject.trim()) newErrors.subject = 'الرجاء إدخال الموضوع';
    if (!formData.message.trim()) newErrors.message = 'الرجاء إدخال الرسالة';
    if (input !== captcha) newErrors.captcha = 'نص التحقق غير صحيح';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('تم إرسال النموذج بنجاح!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setInput('');
      generateCaptcha();
    }
  };

  return (
    <div dir="rtl" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#0d1117', padding: '40px 20px', color: '#fff' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', backgroundColor: '#004080', padding: 30, borderRadius: 12, boxShadow: '0 0 20px rgba(0,0,0,0.3)' }}>
        <h1 style={{ textAlign: 'center', color: '#ffffff', marginBottom: 30 }}>نموذج الاتصال</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label>الاسم الكامل:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
            {errors.name && <div style={errorStyle}>{errors.name}</div>}
          </div>

          <div style={{ marginBottom: 20 }}>
            <label>البريد الإلكتروني:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
            {errors.email && <div style={errorStyle}>{errors.email}</div>}
          </div>

          <div style={{ marginBottom: 20 }}>
            <label>الموضوع:</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required style={inputStyle} />
            {errors.subject && <div style={errorStyle}>{errors.subject}</div>}
          </div>

          <div style={{ marginBottom: 20 }}>
            <label>الرسالة:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required style={{ ...inputStyle, height: 120 }}></textarea>
            {errors.message && <div style={errorStyle}>{errors.message}</div>}
          </div>

          <div style={{ backgroundColor: '#003366', padding: 15, borderRadius: 6, marginBottom: 20, textAlign: 'center' }}>
            <label>التحقق من أنك لست روبوت:</label>
            <div style={{ fontSize: 24, letterSpacing: 3, margin: '10px 0', padding: 10, backgroundColor: '#0059b3', display: 'inline-block', color: '#fff' }}>{captcha}</div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="أدخل النص أعلاه" required style={inputStyle} />
            {errors.captcha && <div style={errorStyle}>{errors.captcha}</div>}
          </div>

          <button type="submit" style={{ backgroundColor: '#6c63ff', color: 'white', border: 'none', padding: '12px 20px', fontSize: 16, cursor: 'pointer', borderRadius: 6, width: '100%' }}>
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '16px',
  boxSizing: 'border-box',
  marginTop: '5px',
  backgroundColor: '#fefefe',
  color: '#000'
};

const errorStyle = {
  color: '#ff4d4f',
  fontSize: '14px',
  marginTop: '5px'
};
