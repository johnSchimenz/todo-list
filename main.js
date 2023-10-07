// CONSOLE: Create a project
const ProjectFactory = (title) => {
    title = title;
    description = '';
    dueDate = '';
    priority = '';
    toDoArray = [];
    complete = false;
    openedProject = false;
    deleteButton = false;
    return {title, description, dueDate, priority, complete, openedProject, deleteButton};
}

// CONSOLE: Create a few example projects (will delete later)
const groceries = ProjectFactory('Groceries');
const chores = ProjectFactory('Chores');
const tripPacking = ProjectFactory('Packing for Trip');

// CONSOLE: Array of projects
const projectsArray = [];

// CONSOLE: Push created projects to array
projectsArray.push(groceries);
projectsArray.push(chores);
projectsArray.push(tripPacking);

// DOM: Display projects in the DOM
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

// CONSOLE: Create a toDo item
const toDoItemFactory = (title, dueDate, description) => {
    title = title;
    dueDate = dueDate;
    description = description;
    checkboxButton = false;
    deleteButton = false;
    return {title, dueDate, description, checkboxButton, deleteButton};
}

// CONSOLE: Create some example toDo items (will delete later)
const apples = toDoItemFactory('Apples', '1/1/2023', '1 bag');
const bananas = toDoItemFactory('Bananas', '2/1/2023', '5');
const groundBeef = toDoItemFactory('Ground Beef', '3/1/2023', '2 lb');

const makeBed = toDoItemFactory('Make bed', '1/1/2023', 'Clean sheets for the next week');
const washDishes = toDoItemFactory('Wash dishes', '2/1/2023', 'Sink should be clean');
const vaccuum = toDoItemFactory('Vaccuum', '3/1/2023', 'All carpets and tile floors cleaned');

const tShirts = toDoItemFactory('T-Shirts', '5/5/2023', '5');
const sunblock = toDoItemFactory('Sunblock', '5/5/2023', '1');
const camera = toDoItemFactory('Camera', '5/5/2023', '1');

// CONSOLE: Add toDo items to project objects
groceries.toDoArray = [apples, bananas, groundBeef];
chores.toDoArray = [makeBed, washDishes, vaccuum];
tripPacking.toDoArray = [tShirts, sunblock, camera];

// DOM: Upon click, display toDo items on right side
const projects = document.querySelectorAll('.project');
let currentProjectArray = [];
projects.forEach((project) => {
    project.addEventListener('click', () => {
        // DOM: delete past current project on right side
        const deleteCurrentProject = document.querySelector('#current-project');
        deleteCurrentProject.remove();

        // DOM: display current poject on right side
        currentProjectArray = []; // Not sure if I need this anymore
        let currentProject = document.createElement('div');
        currentProject.setAttribute('id', 'current-project');
        for (let i = 0; i < projectsArray[project.id].toDoArray.length; i++) {
            currentProjectArray.push(projectsArray[project.id].toDoArray[i].title,
                projectsArray[project.id].toDoArray[i].dueDate,
                projectsArray[project.id].toDoArray[i].description,
                projectsArray[project.id].toDoArray[i].checkboxButton,
                projectsArray[project.id].toDoArray[i].deleteButton);
                currentProject.textContent = currentProjectArray;
            /*
            currentProject.textContent = `${projectsArray[project.id].toDoArray[i].title}, ` +
                `${projectsArray[project.id].toDoArray[i].dueDate}, ` +
                `${projectsArray[project.id].toDoArray[i].description}, ` +
                `${projectsArray[project.id].toDoArray[i].checkboxButton}, ` +
                `${projectsArray[project.id].toDoArray[i].deleteButton}`;
            */
        }
        rightBottomContainer.appendChild(currentProject);
    })
})
