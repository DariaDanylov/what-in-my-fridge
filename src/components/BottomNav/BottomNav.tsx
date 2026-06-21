import { Link } from 'react-router-dom';
import { Home, ShoppingBag, Box, User } from 'lucide-react'; // אם אין לך, הריצי: npm install lucide-react

export default function BottomNav() {
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px 0',
      backgroundColor: '#fff',
      borderTop: '1px solid #ddd',
      zIndex: 1000
    }}>
      <Link to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: '#333' }}>
        <Home /> <span>בית</span>
      </Link>
      <Link to="/favorites" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: '#333' }}>
        <ShoppingBag /> <span>מועדפים</span>
      </Link>
      <Link to="/pantry" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: '#27ae60' }}>
        <Box /> <span>מזווה</span>
      </Link>
      <Link to="/profile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: '#333' }}>
        <User /> <span>פרופיל</span>
      </Link>
    </nav>
  );
}