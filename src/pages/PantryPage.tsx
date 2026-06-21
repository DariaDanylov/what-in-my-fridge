import { useState } from 'react';



export default function PantryPage() {

  const [searchTerm, setSearchTerm] = useState('');

  

  const pantryItems = [

    { category: 'חלבונים וביצים', items: [

        { name: 'ביצים', amount: '8 יחידות', image: 'https://placehold.co/50x50?text=Eggs' },

        { name: 'חלב 3%', amount: '1 ליטר', image: 'https://placehold.co/50x50?text=Milk' }

    ]},

    { category: 'ירקות', items: [

        { name: 'עגבניות', amount: '4 יחידות', image: 'https://placehold.co/50x50?text=Tom' }

    ]}

  ];



  return (

    <div className="page-container">

      <h1>המזווה שלי</h1>

      

      {/* שדה החיפוש החדש */}

      <input 

        type="text" 

        placeholder="חפש מצרך במזווה..." 

        className="search-input"

        value={searchTerm}

        onChange={(e) => setSearchTerm(e.target.value)}

      />



      {pantryItems.map((cat) => {

        // סינון לפי מה שהמשתמש מקליד

        const filteredItems = cat.items.filter(item => 

          item.name.includes(searchTerm)

        );



        if (filteredItems.length === 0) return null;



        return (

          <div key={cat.category}>

            <h3 className="category-title">{cat.category}</h3>

            {filteredItems.map((item) => (

              <div key={item.name} className="pantry-item">

                <img src={item.image} alt={item.name} style={{ width: '40px', borderRadius: '50%', marginLeft: '10px' }} />

                <div>

                  <div style={{ fontWeight: 'bold' }}>{item.name}</div>

                  <div style={{ fontSize: '0.9rem' }}>{item.amount}</div>

                </div>

              </div>

            ))}

          </div>

        );

      })}



      <button className="fab-button">+</button>

    </div>

  );

}