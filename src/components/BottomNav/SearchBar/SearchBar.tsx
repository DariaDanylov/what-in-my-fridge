import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', height: '70px',
      backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around',
      alignItems: 'center', borderBottom: '1px solid #ddd',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)', zIndex: 1000
    }}>
      <NavItem to="/" label="בית" icon="🏠" />
      <NavItem to="/pantry" label="מזווה" icon="🥦" />
      <NavItem to="/favorites" label="מועדפים" icon="⭐" />
      <NavItem to="/profile" label="פרופיל" icon="👤" />
    </nav>
  );
}

function NavItem({ to, label, icon }: { to: string, label: string, icon: string }) {
  return (
    <NavLink to={to} style={({ isActive }) => ({
      textDecoration: 'none', display: 'flex', flexDirection: 'column',
      alignItems: 'center', color: isActive ? '#2ecc71' : '#555', fontSize: '0.75rem'
    })}>
      <span style={{ fontSize: '1.4rem' }}>{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
}