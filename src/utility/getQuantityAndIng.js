import { generateRandomId } from "./generateRandomId";
export const getQuantityAndIng = (data) => {
  let newArray = [];

  if (data) {
    // for (let index = 1; index <= 20; index++) {
    //   // filter array of keys including only strMeasure
    //   const quantityArray = Object.entries(data)?.filter((recipe) => {
    //     {
    //       return recipe.includes("strMeasure" + index);
    //     }
    //   });
    //   //  filter array of keys including only strIngredient
    //   const ingredientsArray = Object.entries(data)?.filter((recipe) => {
    //     return recipe.includes("strIngredient" + index);
    //   });

    //   // if there is a valid quantity add to array
    //   if (quantityArray.flat()[1]) {
    //     newArray = [
    //       ...newArray,
    //       {
    //         ingredients:
    //           ingredientsArray.flat()[1] + " - " + quantityArray.flat()[1],
    //       },
    //     ];
    //   }
    // }

    for (let index = 1; index <= 20; index++) {
      const quantity = data[`strMeasure${index}`]?.trim();
      const ingredient = data[`strIngredient${index}`]?.trim();

      if (ingredient && quantity) {
        newArray.push({
          id: generateRandomId(),
          ingredient: `${ingredient} - ${quantity}`,
        });
      }
    }
  }

  return newArray;
};
