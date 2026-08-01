"use client";

import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import RecipeCard from "./RecipeCard";

export default function AIRecipeSuggester({ isRecipeSaved, onToggleSave }) {
  const [ingredienser, setIngredienser] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRecipe(null);

    try {
      const res = await fetch("/api/recept-forslag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredienser }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Något gick fel");
      setRecipe({ id: `ai-${Date.now()}`, ...data.recipe });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-5xl mx-auto mb-10">
      <div className="bg-[#241a16] border border-orange-900/50 rounded-xl p-5">
        <h2 className="font-heading text-lg font-semibold text-orange-300 flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5" />
          Vad har du hemma? Låt oss föreslå ett recept
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          <input
            type="text"
            value={ingredienser}
            onChange={(e) => setIngredienser(e.target.value)}
            placeholder="t.ex. kyckling, paprika, halloumi..."
            className="flex-1 bg-[#1c1512] border border-orange-900 rounded-lg px-3 py-2 text-sm text-orange-50 placeholder:text-orange-100/40 focus:outline-none focus:border-orange-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-heading text-sm"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            {loading ? "Tänker..." : "Föreslå recept"}
          </button>
        </form>

        {error && <p className="text-sm text-red-400 mt-3">{error}</p>}
      </div>

      {recipe && (
        <div className="mt-4">
          <RecipeCard
            recipe={recipe}
            isSaved={isRecipeSaved(recipe.id)}
            onToggleSave={onToggleSave}
          />
        </div>
      )}
    </section>
  );
}
