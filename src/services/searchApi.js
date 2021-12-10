export async function searchByIngredient(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function searchByName(name) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function searchForTheFirstLetter(firstLetter) {
  if (firstLetter.length > 1) {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
  } else {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
