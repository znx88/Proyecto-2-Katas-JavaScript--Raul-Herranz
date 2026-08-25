// 1.1 
const btnClick = document.createElement('button');
btnClick.id = 'btnToClick';
btnClick.textContent = 'Hame click y mira la consola';
document.body.appendChild(btnClick);

btnClick.addEventListener('click', (evento) => {
    console.log(evento);
});

// 1.2
const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (evento) => {
    console.log(evento.target.value);
});

// 1.3
const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', (evento) => {
    console.log(evento.target.value);
});