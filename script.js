//sample objects
const square1 = document.getElementById('square-1');
const square2 = document.getElementById('square-2');
const square3 = document.getElementById('square-3');
const square4 = document.getElementById('square-4');

//titles
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');

//animations
const slideIn = 'slideIn 1s cubic-bezier(0.23, 1, 0.32, 1) forwards';
const slideOut = 'slideOut 1s cubic-bezier(0.23, 1, 0.32, 1) forwards';
const ripple = 'ripple 1s cubic-bezier(0.23, 1, 0.32, 1) forwards';

const setup = () => {
    const innerSquare1 = createSquare();
    const innerSquare2 = createSquare('flex-end');
    const innerSquare3 = createSquare('flex-start');

    const innerSquare4 = createSquare();
    innerSquare4.classList.add('overlap');
    const innerSquare42 = createSquare();


    //setup for square 1
    square1.appendChild(innerSquare1);
    square1.addEventListener('mouseenter', () => {
        innerSquare1.style.animation = slideIn;
        t1.style.color = '#FCFCFC';
    });
    square1.addEventListener('mouseleave', () => {
        innerSquare1.style.animation = slideOut;
        t1.style.color = '#424242';
    });

    //setup for square 2
    square2.appendChild(innerSquare2);
    square2.addEventListener('mouseenter', () => {
        innerSquare2.style.animation = slideIn;
        t2.style.color = '#FCFCFC';
    });
    square2.addEventListener('mouseleave', () => {
        innerSquare2.style.animation = slideOut;
        t2.style.color = '#424242';
    });

    //setup for square 3
    square3.appendChild(innerSquare3);
    square3.addEventListener('mouseenter', () => {
        innerSquare3.style.animation = slideIn;
        t3.style.color = '#FCFCFC';
    });
    square3.addEventListener('mouseleave', () => {
        innerSquare3.style.animation = slideOut;
        t3.style.color = '#424242';
    });

    //setup for square 4
    square4.appendChild(innerSquare4);
    square4.appendChild(innerSquare42);
    square4.addEventListener('mouseup', () => {
        innerSquare4.style.animation = ripple;
        innerSquare42.style.animation = ripple;
        innerSquare42.style.animationDelay = '0.3s';
        t4.style.color = '#FCFCFC';
    });
    square4.addEventListener('animationend', (event) => {
        if(event.target.classList.value === 'inner-square') {
            innerSquare4.style.animation = 'none';
            innerSquare42.style.animation = 'none';
            t4.style.color = '#424242';
        }
    });

};

//create the inner square
const createSquare = (alignment = 'center') => {
    const innerSquare = document.createElement('div');
    innerSquare.classList.add('inner-square');
    innerSquare.style.alignSelf = alignment;
    return innerSquare;
}