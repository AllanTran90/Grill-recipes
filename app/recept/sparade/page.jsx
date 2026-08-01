"use client";

import { Bookmark } from "lucide-react";
import { useSavedRecipes } from "../../hooks/useSavedRecipes";
import RecipeCard from "../../components/RecipeCard";

export default function SparadeReceptPage() {
  const { savedRecipes, isRecipeSaved, toggleSaveRecipe } = useSavedRecipes();

  return (
    <main className="min-h-screen bg-[#1c1512] text-orange-50 px-4 py-8 md:px-8">
      <header className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 flex items-center justify-center gap-2 sm:gap-3">
          <Bookmark className="w-7 h-7 sm:w-9 sm:h-9" />
          Mina recept
        </h1>
        <p className="mt-2 text-orange-100/70">
          Recept du sparat, både från receptbanken och AI-förslag
        </p>
      </header>

      <section className="max-w-5xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {savedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isSaved={isRecipeSaved(recipe.id)}
            onToggleSave={toggleSaveRecipe}
          />
        ))}
      </section>

      {savedRecipes.length === 0 && (
        <p className="text-center text-orange-100/50 mt-12">
          Du har inte sparat några recept än. Klicka på bokmärket på ett
          recept för att spara det här.
        </p>
      )}
    </main>
  );
}
