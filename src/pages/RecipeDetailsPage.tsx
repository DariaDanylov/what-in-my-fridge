import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

// הגדרת המבנה של מתכון לפי מה שהגדרת ב-Supabase
interface Recipe {
  id: number;
  title: string;
  description: string;
  image_url: string;
  prep_time_min: number;
  instructions: string;
}

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        // שליפת כל הנתונים מטבלת recipes
        const { data, error } = await supabase
          .from('recipes')
          .select('*');

        if (error) {
          throw error;
        }

        if (data) {
          setRecipes(data as Recipe[]);
        }
      } catch (err: any) {
        console.error('Error fetching recipes:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <div>טוען מתכונים מהשרת...</div>;
  if (error) return <div>שגיאה בטעינת הנתונים: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>רשימת המתכונים שלי</h1>
      <div style={{ display: 'grid', gap: '20px' }}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h2>{recipe.title}</h2>
            {recipe.image_url && (
              <img 
                src={recipe.image_url} 
                alt={recipe.title} 
                style={{ width: '100%', maxWidth: '300px', borderRadius: '4px' }} 
              />
            )}
            <p>{recipe.description}</p>
            <p><strong>זמן הכנה:</strong> {recipe.prep_time_min} דקות</p>
            <p><strong>שלבי הכנה:</strong> {recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;