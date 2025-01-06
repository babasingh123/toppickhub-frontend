import React from 'react';
import { Link } from 'react-router-dom'; // For navigation if needed

const SubcategoryCard = ({ subcategory }) => {
  return (
    <div className="subcategory-card">
      <h4>{subcategory.name}</h4>
      <p>{subcategory.description}</p>
      <Link to={`/subcategory/${subcategory.slug}`}
      state={{ subcategory }}
      >
        <button>View Items</button>
      </Link>
    </div>
  );
};

export default SubcategoryCard;
