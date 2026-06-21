import { useState } from 'react';

export default function AddItemPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="page-container">
      <h1 className="title-main">הוספת מצרך</h1>

      {/* כפתור סריקת AI */}
      <div className="camera-btn">📷</div>
      <p style={{ textAlign: 'center', color: 'var(--gray-medium)' }}>סרוק מצרך או קבלה</p>

      {/* שדות מילוי */}
      <input type="text" placeholder="שם המצרך" className="input-field" />
      
      {/* בורר כמויות */}
      <div className="stepper">
        <button className="stepper-btn" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{quantity}</span>
        <button className="stepper-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>

      {/* כפתור הוספה ראשי */}
      <button style={{ width: '100%', marginTop: '20px' }}>הוסף למזווה</button>
    </div>
  );
}