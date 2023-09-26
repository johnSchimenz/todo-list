// Create a project
const ProjectFactory = (title) => {
    title = title;
    deleteButton = false;
    return {title, deleteButton};
}

// Create a few example projects (will delete later)
const groceries = ProjectFactory('Groceries');
console.log(groceries);
const chores = ProjectFactory('Chores');
console.log(chores);
const tripPacking = ProjectFactory('Packing for Trip');
console.log(tripPacking);

// Display projects in the DOM
const leftBottomContainer = document.querySelector('#left-bottom-container');

const groceriesProject = document.createElement('div');
groceriesProject.setAttribute('id', groceries.title);
groceriesProject.textContent = groceries.title;
leftBottomContainer.appendChild(groceriesProject);
const choresProject = document.createElement('div');
choresProject.setAttribute('id', chores.title);
choresProject.textContent = chores.title;
leftBottomContainer.appendChild(choresProject);
const tripPackingProject = document.createElement('div');
tripPackingProject.setAttribute('id', tripPacking.title);
tripPackingProject.textContent = tripPacking.title;
leftBottomContainer.appendChild(tripPackingProject);

// Create a todo item
const TodoItemFactory = (title, dueDate, description) => {
    title = title;
    dueDate = dueDate;
    description = description;
    checkboxButton = false;
    deleteButton = false;
    return {title, dueDate, description, checkboxButton, deleteButton};
}

// Create some example todo items (will delete later)
const apples = TodoItemFactory('Apples', '1/1/2023', '1 bag');
const bananas = TodoItemFactory('Bananas', '2/1/2023', '5');
const groundBeef = TodoItemFactory('Ground Beef', '3/1/2023', '2 lb');
console.log(apples);
console.log(bananas);
console.log(groundBeef);

const makeBed = TodoItemFactory('Make bed', '1/1/2023', 'Clean sheets for the next week');
const washDishes = TodoItemFactory('Wash dishes', '2/1/2023', 'Sinke should be clean');
const vaccuum = TodoItemFactory('Vaccuum', '3/1/2023', 'All carpets and tile floors cleaned');
console.log(makeBed);
console.log(washDishes);
console.log(vaccuum);

const tShirts = TodoItemFactory('T-Shirts', '5/5/2023', '5');
const sunblock = TodoItemFactory('Sunblock', '5/5/2023', '1');
const camera = TodoItemFactory('Camera', '5/5/2023', '1');
console.log(tShirts);
console.log(sunblock);
console.log(camera);
