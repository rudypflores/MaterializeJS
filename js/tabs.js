//Retrieve all tabs
let tabs = document.getElementsByClassName('tab');
let content = document.getElementById('content');
let menu = document.getElementById('menu');
let main = document.getElementById('main');

//Add a tap animation
for(let tab of tabs) {

    let card;

    tab.addEventListener('mouseup', (e) => {

        //scroll back to top
        window.scrollTo(0,0);
        main.style.position = 'relative';
        
        menu.src = './img/return.svg';
        menu.addEventListener('click', () => {
            content.lastChild.remove();
            menu.src = './img/menu.svg';
        });

        //card object
        card = document.createElement('div');
        card.id = 'card';

        //subject
        let subject = document.createElement('h1');
        subject.id = 'subject';
        subject.innerHTML = tab.childNodes[3].childNodes[1].innerHTML;

        //horizontal rule
        let h = document.createElement('hr');
        h.style.width = '95%';

        //container
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        //portrait
        let portrait = document.createElement('img');
        portrait.src = tab.childNodes[1].src;
        portrait.classList.add('portrait');

        //name
        let name = document.createElement('h2');
        name.innerHTML = tab.childNodes[3].childNodes[3].innerHTML;

        //body
        let body = document.createElement('p');
        body.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta velit vestibulum ipsum elementum laoreet. Phasellus sodales felis eget congue dapibus. Morbi porttitor ipsum ac tincidunt bibendum. Nullam rhoncus magna ac ligula faucibus mattis. Aliquam vulputate rutrum lectus suscipit malesuada. Nulla blandit orci eget lorem dignissim, eu vulputate eros vehicula. Aliquam a nulla non lectus sodales viverra eu et nulla. Proin non posuere libero. Mauris id porttitor metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc et orci quis tellus mattis rutrum non quis risus. Curabitur efficitur ut mi sit amet posuere. Quisque lacinia tortor ac massa vulputate, in laoreet orci facilisis. Aenean nec lacus cursus, mattis nibh vitae, venenatis elit.';
        body.id = 'paragraph';

        //add to DOM
        card.append(subject);
        card.append(h);
        wrapper.append(portrait);
        wrapper.append(name);
        card.append(wrapper);
        card.append(body);

        content.appendChild(card);
    });
}