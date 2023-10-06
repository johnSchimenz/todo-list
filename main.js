// Create a project
const ProjectFactory = (title, description) => {
    title = '';
    description = '';
    dueDate = '';
    priority = '';
    toDoArray = [];
    complete = false;
    openedProject = false;
    deleteButton = false;
    return {title, description, dueDate, priority, complete, openedProject, deleteButton};
}

// Create a few example projects (will delete later)
const groceries = ProjectFactory('Groceries');
const chores = ProjectFactory('Chores');
const tripPacking = ProjectFactory('Packing for Trip');

// Array of projects
const projectsArray = [];

// Push created projects to array
projectsArray.push(groceries);
projectsArray.push(chores);
projectsArray.push(tripPacking);

// Display list of created projects
console.log(projectsArray);

/*
// Display projects in the DOM
const leftBottomContainer = document.querySelector('#left-bottom-container');
const rightBottomContainer = document.querySelector('#right-bottom-container');
let counter = 0;

const groceriesProject = document.createElement('div');
//groceriesProject.setAttribute('id', groceries.title.toLowerCase());
groceriesProject.setAttribute('id', counter);
groceriesProject.setAttribute('class', 'project');
groceriesProject.textContent = groceries.title;
leftBottomContainer.appendChild(groceriesProject);
counter++;
const choresProject = document.createElement('div');
//choresProject.setAttribute('id', chores.title.toLowerCase());
choresProject.setAttribute('id', counter);
choresProject.setAttribute('class', 'project');
choresProject.textContent = chores.title;
leftBottomContainer.appendChild(choresProject);
counter++;
const tripPackingProject = document.createElement('div');
//tripPackingProject.setAttribute('id', 'packing-for-trip'); // Different from others since title has spaces
tripPackingProject.setAttribute('id', counter); // Different from others since title has spaces
tripPackingProject.setAttribute('class', 'project');
tripPackingProject.textContent = tripPacking.title;
leftBottomContainer.appendChild(tripPackingProject);
counter++;
*/

// Create a toDo item
const toDoItemFactory = (title, dueDate, description) => {
    title = title;
    dueDate = dueDate;
    description = description;
    checkboxButton = false;
    deleteButton = false;
    return {title, dueDate, description, checkboxButton, deleteButton};
}

// Create some example toDo items (will delete later)
const apples = toDoItemFactory('Apples', '1/1/2023', '1 bag');
const bananas = toDoItemFactory('Bananas', '2/1/2023', '5');
const groundBeef = toDoItemFactory('Ground Beef', '3/1/2023', '2 lb');

const makeBed = toDoItemFactory('Make bed', '1/1/2023', 'Clean sheets for the next week');
const washDishes = toDoItemFactory('Wash dishes', '2/1/2023', 'Sink should be clean');
const vaccuum = toDoItemFactory('Vaccuum', '3/1/2023', 'All carpets and tile floors cleaned');

const tShirts = toDoItemFactory('T-Shirts', '5/5/2023', '5');
const sunblock = toDoItemFactory('Sunblock', '5/5/2023', '1');
const camera = toDoItemFactory('Camera', '5/5/2023', '1');

// Add toDo items to project objects
groceries.toDoArray = [apples, bananas, groundBeef];
chores.toDoArray = [makeBed, washDishes, vaccuum];
tripPacking.toDoArray = [tShirts, sunblock, camera];

// Display a project and toDo items
console.log(groceries.title);
for (let i = 0; i < groceries.toDoArray.length; i++) {
    console.log(groceries.toDoArray[i].title);
}
/*
// Upon click, display toDo items on right side
const projects = document.querySelectorAll('.project');
projects.forEach((project) => {
    project.addEventListener('click', () => {
        let currentProject = document.createElement('div');
        currentProject.textContent = projectsArray[project.id];
        console.log(projectsArray[project.id]);
        //currentProject.textContent = projectsArray[project.id];
        rightBottomContainer.appendChild(currentProject);
    })
})
*/