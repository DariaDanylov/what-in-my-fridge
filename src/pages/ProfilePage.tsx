const ProfilePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>הפרופיל שלי</h1>
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '10px' }}>
        <p><strong>שם משתמש:</strong> עידו הישראלי</p>
        <p><strong>אימייל:</strong> idoi@example.com</p>
        <p><strong>העדפות תזונה:</strong> ללא גלוטן, צמחוני</p>
      </div>
      <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        ערוך הגדרות
      </button>
    </div>
  );
};

export default ProfilePage;