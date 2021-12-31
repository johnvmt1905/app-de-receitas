const MESSAGE = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export async function searchForFoodIngredient(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    if (data.meals === null) {
      global.alert(MESSAGE);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function searchByFoodName(name) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    if (data.meals === null) {
      global.alert(MESSAGE);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function searchForTheFirstLetterOfTheFood(firstLetter) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const data = await response.json();
    if (data.meals === null) {
      global.alert(MESSAGE);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function searchByMealId(id) {
  try {
    const response = await
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    if (data.meals === null) {
      global.alert(MESSAGE);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchByDrinkId(id) {
  try {
    const response = await
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    if (data.drinks === null) {
      global.alert(MESSAGE);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchForBeverageIngredient(ingredient) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    if (data.drinks === null) {
      global.alert(MESSAGE);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function searchNameOfDrink(name) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    if (data.drinks === null) {
      global.alert(MESSAGE);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function searchForTheFirstLetterOfTheDrink(firstLetter) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const data = await response.json();
    if (data.drinks === null) {
      global.alert(MESSAGE);
    }
  } catch (error) {
    console.error(error);
  }
}
