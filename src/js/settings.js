let txt = `

<section class="settings-card card">
    <h2>Settings</h2>
    <span>Cards:</span>

    <ul>

        <li>
            <label for="dices-toggle" class="dices-toggle">
                <input type="checkbox" name="dices-toggle" id="dices-toggle">
                Dices
            </label>
        </li>

        <li>
            <label for="slots-toggle">
                <input type="checkbox" name="slots-toggle" id="slots-toggle">
                Spell slots
            </label>
        </li>

        <!--
        <li>
            <label for="">
                <input type="checkbox" name="" id="">

            </label>
        </li>
        -->

    </ul>
</section>

`;

document.querySelector('main').innerHTML += txt;

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

const cards = ['settings', 'dices'];

for(let i in cards) {
    i = cards[i];

    console.log(i);

    if (localStorage.getItem(i + '_checked') === null) {
        console.log(i);
        localStorage.setItem(i + '_checked', 1);
    }

    if (localStorage.getItem(i + '_checked') == true) {
        document.querySelector('#' + i + '-toggle').checked = true;
    } else {
        document.querySelector('#' + i + '-toggle').checked = false;
    }

    toggle_card(i);

    document.querySelector('.' + i + '-toggle').addEventListener('click', () => toggle_card(i)); 
}