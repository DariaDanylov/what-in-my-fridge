import { Link } from 'react-router-dom';

interface Recipe {
  id: number;
  title: string;
  time: string;
  difficulty: string;
  image: string;
}

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        padding: '10px', 
        borderRadius: '16px', 
        marginBottom: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)' 
      }}>
        {/* אזור התמונה */}
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover', marginLeft: '15px' }} 
        />
        
        {/* אזור הטקסט */}
        <div>
          <h3 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>{recipe.title}</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            {recipe.time} | קושי: {recipe.difficulty}
          </p>
        </div>
      </div>
    </Link>
  );
}