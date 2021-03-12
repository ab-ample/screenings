let first = document.querySelector('.seed');
let str = 'La historia trata de la transformación del Barrio Chino de Barcelona a través de la vida de varias personas que transcurren en paralelo: la de un viejo marino en busca de habitación por este barrio, la de una joven prostituta y su novio, y la de unos trabajadores marroquíes obsesionados con la existencia de Dios.';
let words = str.split(" ");
let count = 0;
let sound = new Audio('sounds/hammer.wav');

// first.innerHTML = words[count];
first.style.fontSize = (first.clientWidth / 6) + 'px';

let addChild = (event) => {
    sound.play();
    

    parent = event.target;
    /*
    1. Get parent Witdh and Height
    2. If parent Width (100%) > parent height (50%) = child Width 50% and Height 100%
    3. If not child Width 100% and Height 50%
    */

    let previous = parent.innerHTML;
    parent.innerHTML = '';

    if (parent.clientWidth > parent.clientHeight) {
        let child_1 = document.createElement('div');
        child_1.className = 'panel height hline';
        // child_1.addEventListener('click', addChild);

        child_1.innerHTML = previous;
        child_1.style.fontSize = (parent.clientWidth / 6) + 'px';

        parent.appendChild(child_1);

        count++;

        let child_2 = document.createElement('div');
        child_2.className = 'panel height';
        // child_2.addEventListener('click', addChild);

        child_2.innerHTML = words[count];
        child_2.style.fontSize = (parent.clientWidth / 6) + 'px';

        parent.appendChild(child_2);
    } else {
        let child_1 = document.createElement('div');
        child_1.className = 'panel width wline';
        // child_1.addEventListener('click', addChild);

        child_1.innerHTML = previous;
        child_1.style.fontSize = (parent.clientWidth / 6) + 'px';

        parent.appendChild(child_1);

        count++;

        let child_2 = document.createElement('div');
        child_2.className = 'panel width';
        // child_2.addEventListener('click', addChild);

        child_2.innerHTML = words[count];
        child_2.style.fontSize = (parent.clientWidth / 6) + 'px';

        parent.appendChild(child_2);
    }

    count = count >= words.length - 1 ? 0 : count++;
    event.stopPropagation();
}

first.addEventListener('click', addChild);