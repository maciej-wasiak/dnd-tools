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
    } else {
        card.style.display = 'none';
    }
}

document.querySelector(".settings-toggle").addEventListener("click", function () {toggle_card('settings')});

document.querySelector(".dices-toggle").addEventListener("click", function () {toggle_card('dices')});