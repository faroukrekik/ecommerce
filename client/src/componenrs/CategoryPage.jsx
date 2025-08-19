import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../redux/actions/prodActions";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { categories, categoriesLoading } = useSelector((s) => s.prodReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="container" style={{ maxWidth: 900, marginTop: 24 }}>
      <h2>Categories</h2>
      {categoriesLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => navigate(`/category/${encodeURIComponent(cat)}`)}
              style={{ padding: "8px 12px", borderRadius: 8 }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
