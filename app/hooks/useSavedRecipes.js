"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "grill-sparade-recept";

export function useSavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setSavedRecipes(JSON.parse(saved));
  }, []);

  function isRecipeSaved(id) {
    return savedRecipes.some((r) => r.id === id);
  }

  function toggleSaveRecipe(recipe) {
    setSavedRecipes((prev) => {
      const next = prev.some((r) => r.id === recipe.id)
        ? prev.filter((r) => r.id !== recipe.id)
        : [...prev, recipe];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  return { savedRecipes, isRecipeSaved, toggleSaveRecipe };
}
