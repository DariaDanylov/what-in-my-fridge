import { Link } from 'react-router-dom';
import { recipes } from '../data/recipesData';

export default function Dashboard() {
  return (
    <div className="page-container">
      <h1 className="title-main">מתכונים זמינים</h1>
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-link">
          <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div className="recipe-info-container">
              <h3>{recipe.title}</h3>
              <p>{recipe.time} | קושי: {recipe.difficulty}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}