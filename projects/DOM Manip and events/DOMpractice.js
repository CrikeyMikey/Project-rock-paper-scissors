const container = document.querySelector('#container');


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const content2 = document.createElement('p');
content2.classList.add('p');
content2.textContent = "Hey I'm red!";
content2.style.color = 'red';
container.appendChild(content2);

const content3 = document.createElement('h3');
content3.classList.add('h3');
content3.textContent = "I'm a blue h3!";
content3.style.color = 'blue';
container.appendChild(content3);


const container2 = document.createElement('div');
document.body.appendChild(container2);
container2.style.backgroundColor = 'pink';


const content4 = document.createElement('h1');
content4.classList.add('h1');
content4.textContent = "I'm in a div";
container2.appendChild(content4);

const content5 = document.createElement('p');
content5.classList.add('p2');
content5.textContent = "ME TOO!";
container2.appendChild(content5);

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue'; 
});

