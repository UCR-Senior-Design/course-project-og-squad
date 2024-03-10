import React from "react";

export default function IngredientSection({ formData, setFormData }) {
  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index].name = value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      ingredients: newIngredients,
    }));
  };

  const addIngredient = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ingredients: [...prevFormData.ingredients, { name: "" }],
    }));
  };

  const removeIngredient = (index) => {
    if (formData.ingredients.length === 1) {
      return;
    }
    const newIngredients = [...formData.ingredients];
    newIngredients.splice(index, 1);
    setFormData((prevFormData) => ({
      ...prevFormData,
      ingredients: newIngredients,
    }));
  };

  return (
    <>
      <ul>
        {formData.ingredients.map((ingredient, index) => (
          <li key={index} className="flex flex-col mb-4">
            <div className="flex items-center">
              <input
                type="text"
                value={ingredient.name}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 flex-grow"
                required
              />
              <button
                type="button"
                onClick={() => removeIngredient(index)}
                className={`ml-2 ${
                  formData.ingredients.length === 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                } bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600`}
                disabled={formData.ingredients.length === 1}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={addIngredient}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Add Ingredient
      </button>
    </>
  );
}