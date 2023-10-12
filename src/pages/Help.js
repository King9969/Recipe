import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdCheck, MdError } from "react-icons/md";

function RecipeForm() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [recipes, setRecipes] = useState([]);
  const [img, setImg] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [servings, setServings] = useState("");
  const [title, setTitle] = useState("");
  const [editingRecipeId, setEditingRecipeId] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const fetchRecipes = async () => {
    if (user) {
      const recipesCollection = await db
        .collection("recipe_db")
        .where("userId", "==", user.uid)
        .get();
      const recipesData = recipesCollection.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }));
      setRecipes(recipesData);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [user]);

  const handleAddOrUpdateRecipe = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please fill in the Title field.");
      return;
    }

    const newRecipe = {
      userId: user.uid,
      img,
      ingredients,
      instructions,
      servings,
      title,
    };

    try {
      if (editingRecipeId) {
        await db.collection("recipe_db").doc(editingRecipeId).set(newRecipe);
        toast.success("Recipe updated successfully!", {
          icon: <MdCheck />,
        });
      } else {
        const docRef = await db.collection("recipe_db").add(newRecipe);
        const newRecipeId = docRef.id;
        newRecipe.id = newRecipeId;
        await db
          .collection("recipe_db")
          .doc(newRecipeId)
          .update({ id: newRecipeId });
        navigate(`/food/${newRecipeId}`);
        toast.success("Recipe added successfully!", {
          icon: <MdCheck />,
        });
      }

      setImg("");
      setIngredients("");
      setInstructions("");
      setServings("");
      setTitle("");

      fetchRecipes();
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.", {
        icon: <MdError />,
      });
    }
  };

  const handleDeleteRecipe = async (docId) => {
    try {
      await db.collection("recipe_db").doc(docId).delete();
      fetchRecipes();
      toast.success("Recipe deleted successfully!", {
        icon: <MdCheck />,
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "An error occurred while deleting the recipe. Please try again later.",
        {
          icon: <MdError />,
        }
      );
    }
  };

  const handleEditRecipe = (recipe) => {
    setImg(recipe.img);
    setIngredients(recipe.ingredients);
    setInstructions(recipe.instructions);
    setServings(recipe.servings);
    setTitle(recipe.title);
    setEditingRecipeId(recipe.docId);

    console.log(recipe.instructions);
  };

  return (
    <div className="container mx-auto lg:p-32 py-44">
      <h2 className="text-2xl font-bold mb-4">Add or Update Recipe</h2>
      <form onSubmit={handleAddOrUpdateRecipe} className="mb-8">
        {/* Title */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Image URL"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <textarea
            placeholder="Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="p-2 border rounded w-full"
            rows="5"
          />
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <textarea
            placeholder="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="p-2 border rounded w-full"
            rows="5"
          />
        </div>

        {/* Servings */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          {editingRecipeId ? "Update Recipe" : "Add Recipe"}
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <li key={recipe.docId} className="mb-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={recipe.img}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                <div className="flex justify-between space-x-2">
                  <button
                    onClick={() => handleEditRecipe(recipe)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteRecipe(recipe.docId)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => navigate(`/food/${recipe.docId}`)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default RecipeForm;
