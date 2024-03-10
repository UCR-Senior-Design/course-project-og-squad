import IngredientList from "@/components/ingredientList";
import AttributeList from "@/components/attributeList";
import StepList from "@/components/stepList";
import NotFoundPage from "@/app/not-found";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

async function fetchRecipe(recipeId) {
  try {
    const response = await fetch(
      `http://localhost:3000//api/fetchRecipe?id=${recipeId}`,
      {
        next: {
          revalidate: 0, // use 0 to opt out of using cache
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recipe");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching recipe:", error.message);
    return null; // Return null in case of error
  }
}

export default async function RecipePage({ params }) {
  const { recipeId } = params;
  const data = await fetchRecipe(recipeId);

  if (!data) {
    return <NotFoundPage />;
  }

  return (
    <div className="max-w-3xl mx-auto my-16">
      <div className="flex items-center hover:underline hover:cursor-pointer hover:opacity-70">
        <FaUserCircle className="mr-2 text-xl text-custom-main-dark" />
        <p className="text-xl ">{data.recipe.user_name}</p>
      </div>
      <img
        src={data.recipe.recipe_image}
        alt={data.recipe_name}
        className="mb-3"
      />
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4">{data.recipe.recipe_name}</h1>
        <div className="flex-row items-center justify-center">
          <FaRegHeart className="text-custom-main-dark text-2xl hover:cursor-pointer" />
          <p className="text-lg text-center">{data.recipe.recipe_likes}</p>
        </div>
      </div>

      <AttributeList
        attributes={data.recipe.recipe_attributes}
        time={data.recipe.recipe_time}
        cals={data.recipe.recipe_cals}
      />
      <div className="flex justify-between">
        <div>
          <p className="my-4">{data.recipe.recipe_description}</p>
          <StepList steps={data.recipe.recipe_steps} />
        </div>
        <IngredientList ingredients={data.recipe.recipe_ingredients} />
      </div>
    </div>
  );
}
