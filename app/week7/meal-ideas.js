import React, { useState, useEffect } from "react";

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [idMeal, setIdMeal] = useState("");
  const [strMeal, setStrMeal] = useState("");
  const [strMealThumb, setStrMealThumb] = useState("");

  const getMealIdeas = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json(); // Fixed: response.data should be response.json()

      if (data.meals) {
        // Assuming data.meals is an array of meal ideas
        const mealNames = data.meals.map((meal) => meal.strMeal);
        setMeals(mealNames);
      } else {
        // Handle the case where no meals were found for the ingredient
        setMeals([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Use the useEffect hook to call getMealIdeas when ingredient changes
  useEffect(() => {
    getMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealIdeas;