"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import { RECIPES, DIET_CATEGORIES } from "../data/recipes";
import CategoryNav from "../components/CategoryNav";
import RecipeCard from "../components/RecipeCard";
import AIRecipeSuggester from "../components/AIRecipeSuggester";
import { useSavedRecipes } from "../hooks/useSavedRecipes";

export default function ReceptPage() {
  const [activeDiet, setActiveDiet] = useState("alla");
  const { isRecipeSaved, toggleSaveRecipe } = useSavedRecipes();

  const filteredRecipes =
    activeDiet === "alla"
      ? RECIPES
      : RECIPES.filter((r) => r.diet === activeDiet);

  return (
    <main className="min-h-screen bg-[#1c1512] text-orange-50 px-4 py-8 md:px-8">
      <header className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 flex items-center justify-center gap-2 sm:gap-3">
          <BookOpen className="w-7 h-7 sm:w-9 sm:h-9" />
          Receptbank
        </h1>
        <p className="mt-2 text-orange-100/70">
          Grillrecept för alla — kött, vegetariskt och veganskt
        </p>
      </header>

      <AIRecipeSuggester
        isRecipeSaved={isRecipeSaved}
        onToggleSave={toggleSaveRecipe}
      />

      <CategoryNav
        categories={DIET_CATEGORIES}
        activeCategory={activeDiet}
        onSelect={setActiveDiet}
      />

      <section className="max-w-5xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isSaved={isRecipeSaved(recipe.id)}
            onToggleSave={toggleSaveRecipe}
          />
        ))}
      </section>

      {filteredRecipes.length === 0 && (
        <p className="text-center text-orange-100/50 mt-12">
          Inga recept i den här kategorin än.
        </p>
      )}
    </main>
  );
}
