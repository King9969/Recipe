import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";

const MainSection = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [ratings, setRatings] = useState(0);
  const [newComment, setNewComment] = useState("");

  const fetchRecipes = async () => {
    try {
      const recipesCollection = await db.collection("recipe_db").get();
      const recipesData = recipesCollection.docs.map((doc) => doc.data());
      setRecipes(recipesData);

      const selectedRecipe = recipesData.find((recipe) => recipe.id === id);
      setSelectedRecipe(selectedRecipe);

      // Fetch the comments array from the selected recipe's document
      if (selectedRecipe) {
        const commentsArray = selectedRecipe.comments || []; // Assuming comments is an array field in the document
        console.log(commentsArray);
        setComments(commentsArray);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleRateClick = () => {
    // Implement your rating logic here, e.g., show a modal for users to rate the recipe.
    // Update the 'ratings' state based on user's rating.
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      try {
        // Fetch the current comments from Firestore
        const recipeRef = db.collection("recipe_db").doc(id);
        const recipeDoc = await recipeRef.get();
        const currentComments = recipeDoc.data().comments || [];

        // Add the new comment to the local comments array
        const updatedComments = [...currentComments, newComment.trim()];

        // Update the comments in Firestore
        await recipeRef.update({ comments: updatedComments });

        // Update the comments state with the new comment
        setComments(updatedComments);
        setNewComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [id]);

  return (
    <main className="h-full flex flex-col md:flex-row p-6 pt-32 bg-gray-100">
      <section className="w-full md:w-3/4 m-2 p-4 mb-4 md:mb-0 md:ml-4 bg-white rounded border shadow-md">
        <div
          className="bg-black w-full  mb-4 rounded relative"
          style={{ height: "30rem" }}
        >
          {selectedRecipe && (
            <video
              className="absolute inset-0 w-full h-full rounded"
              controls
              key={selectedRecipe.url}
            >
              <source src={selectedRecipe.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <h1 className="text-xl font-bold mb-4 border-b-2 pb-2">
          {selectedRecipe ? selectedRecipe.title : ""}
        </h1>
        <div className="py-4">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>

          {selectedRecipe && selectedRecipe.instructions && (
            <ol className="list-decimal pl-6">
              {selectedRecipe.instructions
                .split(/"(\d+)\.\s+/)
                .map((step, index) => {
                  if (step.trim() !== "" && isNaN(step)) {
                    const cleanedStep = step.replace(/"$/, "").trim();
                    return (
                      <li key={index} className="text-lg font-medium mb-2">
                        {cleanedStep}
                      </li>
                    );
                  }
                  return null;
                })}
            </ol>
          )}
        </div>
        <div className="mt-4"></div>
        <div className="mt-6">
          <h2 className="font-bold text-xl mb-4 border-b-2 pb-2">Comments</h2>
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-800">{comment}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleCommentSubmit} className="mt-6">
            <textarea
              rows="4"
              placeholder="Add your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </section>

      <aside className="w-full md:w-1/4 bg-white p-4 rounded-lg border m-2 shadow-md">
        <h2 className="font-bold text-xl mb-6 border-b-2 pb-2">
          Ingredient's List
        </h2>
        <div className="overflow-y-auto" style={{ height: "30rem" }}>
          <ul className="space-y-2">
            {selectedRecipe &&
              selectedRecipe.ingredients &&
              selectedRecipe.ingredients.split(",").map((ingredient, index) => {
                const trimmedIngredient = ingredient.trim();
                if (
                  trimmedIngredient.startsWith('"') &&
                  trimmedIngredient.endsWith('"')
                ) {
                  return (
                    <li
                      key={index}
                      className={`mb-1 p-2 border-b-2 rounded-md flex items-center cursor-pointer hover:bg-gray-200 hover:text-black transition
                ${
                  selectedRecipe &&
                  selectedRecipe.title === selectedRecipe.title
                    ? "bg-blue-600 text-white"
                    : ""
                }`}
                    >
                      <input
                        type="checkbox"
                        className="mr-2"
                        id={`ingredient-${index}`}
                      />
                      <label
                        htmlFor={`ingredient-${index}`}
                        className="font-semibold"
                      >
                        {trimmedIngredient.slice(1, -1)}
                      </label>
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={index}
                      className={`mb-1 p-2 border-b-2 rounded-md flex items-center cursor-pointer hover:bg-gray-200 hover:text-black transition
                ${
                  selectedRecipe &&
                  selectedRecipe.title === selectedRecipe.title
                    ? "bg-blue-600 text-white"
                    : ""
                }`}
                    >
                      <input
                        type="checkbox"
                        className="mr-2"
                        id={`ingredient-${index}`}
                      />
                      <label
                        htmlFor={`ingredient-${index}`}
                        className="font-semibold"
                      >
                        {trimmedIngredient}
                      </label>
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      </aside>
    </main>
  );
};

export default MainSection;
