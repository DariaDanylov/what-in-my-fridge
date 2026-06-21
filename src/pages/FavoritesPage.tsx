import { Link } from 'react-router-dom';

const favoriteRecipes = [
  { id: '1', title: 'שקשוקה קלאסית', time: '20', image: 'https://placehold.co/200x200/orange/white?text=Shakshuka' },
  { id: '2', title: 'פסטה ברוטב עגבניות', time: '15', image: 'https://placehold.co/200x200/red/white?text=Pasta' },
  { id: '3', title: 'סלט קינואה מרענן', time: '10', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200' },
];

export default function FavoritesPage() {
  return (
    <div style={{ padding: '20px', direction: 'rtl' }}>
      <h1>המתכונים המועדפים שלי</h1>
      {favoriteRecipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '10px', margin: '10px 0', overflow: 'hidden' }}>
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/200x200?text=No+Img'; }}
            />
            <div style={{ padding: '10px' }}>
              <h3>{recipe.title}</h3>
              <p>{recipe.time} דקות</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}