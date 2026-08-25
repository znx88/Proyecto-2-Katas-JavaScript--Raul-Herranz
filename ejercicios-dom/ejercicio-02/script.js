// 2.1
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

// 2.2
const divWithP = document.createElement('div');
const pInsideDiv = document.createElement('p');
pInsideDiv.textContent = 'Hola, estoy dentro';
divWithP.appendChild(pInsideDiv);
document.body.appendChild(divWithP);

// 2.3
const divLoop = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const p = document.createElement('p');
    p.textContent = `Párrafo número ${i + 1}`;
    divLoop.appendChild(p);
}
document.body.appendChild(divLoop);

// 2.4
const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

// 2.5
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');

for (const app of apps) {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
for (const element of elementsToRemove) {
    element.remove();
}

// 2.8 
const allDivs = document.querySelectorAll('div');
const pMiddle = document.createElement('p');
pMiddle.textContent = 'Voy en medio!';
document.body.insertBefore(pMiddle, allDivs[1]);

const insertDivs = document.querySelectorAll('.fn-insert-here');
for (const div of insertDivs) {
    const pInside = document.createElement('p');
    pInside.textContent = 'Voy dentro!';
    div.appendChild(pInside);
}