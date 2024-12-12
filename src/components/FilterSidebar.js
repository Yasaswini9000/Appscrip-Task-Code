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

