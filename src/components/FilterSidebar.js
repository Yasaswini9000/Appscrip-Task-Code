import React from 'react';

export default function FilterSidebar() {
  return (
    <div className="filter-sidebar">
      <h2>Filters</h2>
      <ul>
        <li><input type="checkbox" id="category1" /><label htmlFor="category1">Category 1</label></li>
        <li><input type="checkbox" id="category2" /><label htmlFor="category2">Category 2</label></li>
        <li><input type="checkbox" id="category3" /><label htmlFor="category3">Category 3</label></li>
      </ul>
    </div>
  );
}

// 4. public/styles.css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  padding: 1rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header h1 {
  font-size: 1.5rem;
  color: #333;
}

.filter-toggle {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filter-toggle:hover {
  background-color: #0056b3;
}
.content {
  display: flex;
  flex: 1;
  padding: 1rem;
}

.filter-sidebar {
  width: 250px;
  background-color: #fff;
  padding: 1rem;
  border-right: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filter-sidebar h2 {
  font-size: 1.2rem;
  color: #333;
}

.filter-sidebar ul {
  list-style: none;
  padding: 0;
}

.filter-sidebar li {
  margin-bottom: 0.5rem;
}
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  flex: 1;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: white;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  max-width: 100%;
  height: auto;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
}
footer {
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 1rem;
}

.footer-content {
  font-size: 0.9rem;
}
