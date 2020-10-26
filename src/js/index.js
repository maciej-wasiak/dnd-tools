import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

// SETTINGS
const cardsList = ['settings', 'dices'];

function toggle_card(card_name) {
    let card = document.querySelector('.' + card_name + '-card');
    let toggle = document.querySelector('#' + card_name + '-toggle');
    
    if (toggle.checked == true) {
        card.style.display = 'flex';
        localStorage.setItem(card_name + '_checked', 1);
    } else {
        card.style.display = 'none';
        localStorage.setItem(card_name + '_checked', 0);
    }
}

for (let i in cardsList) {
    i = cardsList[i];

    if (i != 'settings'){
        document.querySelector('.settings-list').innerHTML += `
        <li>
            <label for='${i}-toggle' class='${i}-toggle'>
                <input type='checkbox' name='${i}-toggle' id='${i}-toggle'>
                ${i}
            </label>
        </li>`;
    }

    if (localStorage.getItem(i + '_checked') === null) {
        localStorage.setItem(i + '_checked', 1);
    }

    if (localStorage.getItem(i + '_checked') == true) {
        document.querySelector('#' + i + '-toggle').checked = true;
    } else {
        document.querySelector('#' + i + '-toggle').checked = false;
    }

    toggle_card(i);
    // document.querySelector('.' + i + '-toggle').addEventListener('click', () => toggle_card(i)); 
}

// DICES
const dicesList = [2, 4, 6, 8, 10, 12, 20, 100];

function roll_dice(sides) {
    let resault = Math.ceil(Math.random() * sides);
    console.log(resault);
    document.querySelector('.dice-resault').innerHTML = resault;
}

for (let i in dicesList) {
    i = dicesList[i];

    document.querySelector('.dices-box').innerHTML += `
    <button class='dice-button d${i}'>D${i}</button>`;

    console.log(`.d${i}`);
    // document.querySelector('.d'+i).addEventListener('click', () => roll_dice(i));
}


// BUTTONS - ADD EVENT LISTENER
const buttons = {};
buttons['.settings-toggle'] = () => toggle_card('settings');
buttons['.dices-toggle'] = () => toggle_card('dices');
buttons['.d2'] = () => roll_dice(2);
buttons['.d4'] = () => roll_dice(4);
buttons['.d6'] = () => roll_dice(6);
buttons['.d8'] = () => roll_dice(8);
buttons['.d10'] = () => roll_dice(10);
buttons['.d12'] = () => roll_dice(12);
buttons['.d20'] = () => roll_dice(20);
buttons['.d100'] = () => roll_dice(100);

for (const [key, value] of Object.entries(buttons)) {
    // console.log(key, value);
    document.querySelector(key).addEventListener('click', value);
}