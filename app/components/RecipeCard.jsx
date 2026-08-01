"use client";

import { useState } from "react";
import { Clock, ChevronDown, Bookmark, BookmarkCheck } from "lucide-react";

const DIET_LABELS = {
  kott: "Kött",
  vegetariskt: "Vegetariskt",
  veganskt: "Veganskt",
};

export default function RecipeCard({ recipe, isSaved, onToggleSave }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="bg-[#241a16] border border-orange-900/50 rounded-xl p-5 flex flex-col">
      <div className="flex items-center justify-between text-xs font-heading text-orange-300/80 mb-2">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {recipe.time} · {recipe.difficulty}
        </span>
        <span className="px-2 py-0.5 rounded-full border border-orange-900 text-orange-100/70">
          {DIET_LABELS[recipe.diet]}
        </span>
      </div>

      <div className="flex items-start justify-between gap-2 mb-1">
        <h2 className="font-heading text-lg font-semibold text-orange-50">
          {recipe.name}
        </h2>
        {onToggleSave && (
          <button
            onClick={() => onToggleSave(recipe)}
            aria-label={isSaved ? "Ta bort från mina recept" : "Spara recept"}
            className="shrink-0 text-orange-200/50 hover:text-orange-400 transition-colors"
          >
            {isSaved ? (
              <BookmarkCheck className="w-5 h-5 fill-orange-500 text-orange-500" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
      <p className="text-sm text-orange-100/60 flex-1">{recipe.desc}</p>

      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-4 flex items-center justify-center gap-1 text-sm font-heading text-orange-300 hover:text-orange-400"
      >
        {expanded ? "Dölj recept" : "Visa recept"}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-orange-900/50 text-sm text-orange-100/80 space-y-3">
          <div>
            <h3 className="font-heading text-orange-300 mb-1">Ingredienser</h3>
            <ul className="list-disc list-inside space-y-0.5">
              {recipe.ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-orange-300 mb-1">Gör så här</h3>
            <ol className="list-decimal list-inside space-y-0.5">
              {recipe.instructions.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </article>
  );
}
