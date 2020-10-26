let txt = `

<section class="dices-card card">
    <h2>Dices</h2>
    <div>
        <button class="dice-button d2">D2</button>
        <button class="dice-button d4">D4</button>
        <button class="dice-button d6">D6</button>
        <button class="dice-button d8">D8</button>
        <button class="dice-button d10">D10</button>
        <button class="dice-button d12">D12</button>
        <button class="dice-button d20">D20</button>
        <button class="dice-button d100">D100</button>
    </div>
    <p class="dice-resault">wynik</p>
</section>

`;

document.querySelector('main').innerHTML += txt;

function roll_dice(sides) {
    let resault = Math.ceil(Math.random() * sides);
    console.log(resault);
    document.querySelector('.dice-resault').innerHTML = resault;
}

const dices = [2, 4, 6, 8, 10, 12, 20, 100];

for (let i in dices) {
    i = dices[i];
    console.log(`.d${i}`);
    document.querySelector(`.d${i}`).addEventListener('click', () => roll_dice(i));
}