const recipes = [
    {
        title: "Fried Rice",
        category: "Breakfast",
        ingredients: [
            "2 cups cooked rice",
            "2 tbsp oil",
            "2 cloves garlic, minced",
            "1/2 cup mixed vegetables (like carrots, peas, or corn)",
            "2 eggs, beaten",
            "2 tbsp soy sauce",
            "Salt and pepper to taste"
        ],
        steps: [
            "Heat oil in a pan. Sauté garlic until fragrant.",
            "Push garlic to the side, pour in beaten eggs, and scramble.",
            "Add vegetables and cook for 2 minutes.",
            "Add rice, soy sauce, salt, and pepper. Stir well.",
            "Cook for 3–5 minutes, then serve hot."
        ]
    },
    {
        title: "Arroz Caldo",
        category: "Breakfast",
        ingredients: [
            "1 cup rice (sticky or regular)",
            "4-5 cups chicken broth or water",
            "1/2 kg chicken (cut into small pieces)",
            "1 onion, chopped",
            "4 garlic cloves, minced",
            "1 thumb-sized ginger, sliced thin",
            "2 tbsp fish sauce",
            "2 tbsp oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Heat oil and sauté garlic, onion, and ginger.",
            "Add chicken and cook until browned.",
            "Mix in fish sauce, then add rice and stir.",
            "Pour in broth or water and bring to a boil.",
            "Simmer, stirring occasionally, until rice is soft.",
            "Season with salt and pepper.",
            "Serve with optional toppings like boiled egg, fried garlic, green onions, or calamansi."
        ]
    },
    // Other recipes...
];

function getRandomRecipe(category = "All") {
    let filteredRecipes = recipes;
    if (category !== "All") {
        filteredRecipes = recipes.filter(recipe => recipe.category === category);
    }
    const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
    return filteredRecipes.length > 0 ? filteredRecipes[randomIndex] : null;
}

function displayRecipe(recipe) {
    setTimeout(() => {
        if (!recipe) {
            document.getElementById('recipeTitle').textContent = "No recipes available!";
            document.getElementById('recipeCategory').textContent = "";
            document.getElementById('ingredientsList').innerHTML = '<li>No ingredients available.</li>';
            document.getElementById('stepsList').innerHTML = '<li>No steps available.</li>';
        } else {
            document.getElementById('recipeTitle').textContent = recipe.title;
            document.getElementById('recipeCategory').textContent = recipe.category;
            document.getElementById('ingredientsList').innerHTML = '';
            document.getElementById('stepsList').innerHTML = '';

            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                document.getElementById('ingredientsList').appendChild(li);
            });

            recipe.steps.forEach(step => {
                const li = document.createElement('li');
                li.textContent = step;
                document.getElementById('stepsList').appendChild(li);
            });
        }

        document.getElementById('recipeContainer').style.display = 'block'; 
    }, 500); 
}

document.getElementById('generateRecipeBtn').addEventListener('click', () => {
    const category = document.getElementById('categoryFilter').value;
    const recipe = getRandomRecipe(category);
    displayRecipe(recipe);
});

document.getElementById('surpriseMeBtn').addEventListener('click', () => {
    const recipe = getRandomRecipe();
    displayRecipe(recipe);
});
