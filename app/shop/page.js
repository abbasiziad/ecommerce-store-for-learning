"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const filtered = products.filter(p => {
    return (
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? p.category === category : true)
    );
  });

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search product..."
          className="border p-2"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-3 gap-6">
        {filtered.map(product => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="border p-4 cursor-pointer hover:shadow">
              <img src={product.thumbnail} className="h-40 w-full object-cover" />
              <h3 className="font-bold mt-2">{product.title}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}