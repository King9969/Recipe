import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function Recipecards({ title, description, img, id }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prevLiked) => !prevLiked);
  };

  return (
    <Card className="m-10 p-4 shadow-lg rounded-xl bg-white relative">
      <Card.Img
        variant="top"
        src={img}
        className="rounded-t-xl h-48 object-cover w-full"
      />
      <Card.Body>
        <Card.Title className="my-2 text-xl font-semibold text-black">
          {title}
        </Card.Title>
        <Card.Text className="my-2 text-black">{description}</Card.Text>
        <button
          className={`bg-blue-600 my-4 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-600 rounded transition duration-200 ease-in-out`}
          onClick={() => navigate(`/food/${id}`)}
        >
          Start Cooking
        </button>
        <span
          className={`absolute bottom-10 right-6 cursor-pointer ${
            isLiked ? "text-red-500" : "text-gray-300"
          }`}
          onClick={toggleLike}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            {isLiked ? (
              <path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 16.46 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.96-8.55 11.54L12 21.35z"
              />
            ) : (
              <path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 16.46 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.1 0 3.95 1.56 5 3.94C13.55 4.56 15.4 3 17.5 3 20.58 3 23 5.42 23 8.5c0 3.78-3.4 7.96-8.55 11.54L12 21.35z"
              />
            )}
          </svg>
        </span>
      </Card.Body>
    </Card>
  );
}
