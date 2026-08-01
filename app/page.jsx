"use client";

import { useState } from "react";
import { Flame } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "./data/products";
import { useFavorites } from "./hooks/useFavorites";
import CategoryNav from "./components/CategoryNav";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("alla");
  const { favorites, toggleFavorite } = useFavorites();

  const filteredProducts =
    activeCategory === "alla"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#1c1512] text-orange-50 px-4 py-8 md:px-8">
      <header className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 flex items-center justify-center gap-2 sm:gap-3">
          <Flame className="w-7 h-7 sm:w-9 sm:h-9" />
          Grillfavoriter
        </h1>
        <p className="mt-2 text-orange-100/70">
          Utrustning vi rekommenderar för bättre grillkvällar
        </p>
      </header>

      <CategoryNav
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <section className="max-w-5xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </section>

      {filteredProducts.length === 0 && (
        <p className="text-center text-orange-100/50 mt-12">
          Inga produkter i den här kategorin än.
        </p>
      )}
    </main>
  );
}
