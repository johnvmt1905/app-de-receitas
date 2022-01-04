const MESSAGE = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export async function searchForFoodIngredient(ingredient, history) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    if (data.meals.length === 1) {
      const { idMeal } = data.meals[0];
      history.push(`/comidas/${idMeal}`);
    }
    if (data.meals === null) {
      global.alert(MESSAGE);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function searchByFoodName(name, history) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    if (data.meals.length === 1) {
      const { idMeal } = data.meals[0];
      history.push(`/comidas/${idMeal}`);
    }
    if (data.meals === null) {
      global.alert(MESSAGE);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function searchForTheFirstLetterOfTheFood(firstLetter, history) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const data = await response.json();
    if (data.meals.length === 1) {
      const { idMeal } = data.meals[0];
      history.push(`/comidas/${idMeal}`);
    }
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

export async function searchForBeverageIngredient(ingredient, history) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    if (data.drinks.length === 1) {
      const { idDrink } = data.drinks[0];
      history.push(`/bebidas/${idDrink}`);
    }
    if (data.drinks === null) {
      global.alert(MESSAGE);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function searchNameOfDrink(name, history) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    if (data.drinks.length === 1) {
      const { idDrink } = data.drinks[0];
      history.push(`/bebidas/${idDrink}`);
    }
    if (data.drinks === null) {
      global.alert(MESSAGE);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function searchForTheFirstLetterOfTheDrink(firstLetter, history) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const data = await response.json();
    if (data.drinks.length === 1) {
      const { idDrink } = data.drinks[0];
      history.push(`/bebidas/${idDrink}`);
    }
    if (data.drinks === null) {
      global.alert(MESSAGE);
    }
  } catch (error) {
    console.error(error);
  }
}
