import React, { useState, useEffect } from "react";
import RecipeCards from "./Recipecard"; // Import the RecipeCard component
import { db } from "./firebase";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchRecipes();
  }, [searchQuery]);

  const fetchRecipes = async () => {
    try {
      let recipesCollection;

      if (searchQuery) {
        // If there is a search query, filter recipes by title starting with the query
        recipesCollection = await db
          .collection("recipe_db")
          .where("title", ">=", searchQuery)
          .where("title", "<=", searchQuery + "\uf8ff")
          .get();
      } else {
        // If no search query, fetch all recipes
        recipesCollection = await db.collection("recipe_db").get();
      }

      const recipesData = recipesCollection.docs.map((doc) => doc.data());
      setRecipes(recipesData);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section className="bg-gray-100 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-black text-center lg:mt-16 mt-8">
          Latest Recipes
        </h2>
        <div className="my-4">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="border text-black border-gray-400 rounded-md p-2 w-full"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {recipes.map((recipe, index) => (
            <RecipeCards key={index} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
