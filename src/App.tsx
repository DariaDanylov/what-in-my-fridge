import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav/BottomNav'; // ודאי שהנתיב תואם למיקום הקובץ שלך
import Dashboard from './pages/Dashboard';
import PantryPage from './pages/PantryPage';
import FavoritesPage from './pages/FavoritesPage';
import ProfilePage from './pages/ProfilePage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '70px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pantry" element={<PantryPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        </Routes>
      </div>
      
      <BottomNav />
    </Router>
  );
}