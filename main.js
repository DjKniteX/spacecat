let monster = {
    name: "pizza",
    hp: 5,
    attack: 1
}

let player = {
    name: "Player",
    hp: 10,
    mp: 5,
    attack: 1
}

let playerWidth = 100;
let monsterWidth = 100;


let monsterHP = monster.hp;
//Monster setup
document.getElementById('monsterHP').innerHTML = `${monsterHP} / ${monster.hp}`;
document.getElementById('monsterHP').style = `width: ${monsterWidth}%`

let playerHP = player.hp;
// Player setup
document.getElementById('playerHP').innerHTML = `${player.hp} / ${player.hp}`;
document.getElementById('playerHP').style = `width: ${playerWidth}%`
document.getElementById('playerMP').innerHTML = `${player.mp} / ${player.mp}`;
document.getElementById('playerMP').style = "width: 100%";



function attack() {
    if (monsterHP <= 0) {
        document.getElementById("text").innerText = "You did it! You ate the pizza."
        document.getElementById("text2").innerText = ""
        alert("You finished the alpha, go play some other game!")
    } else {
        let random = Math.floor(Math.random() * 10)
        if (random >= 5) {
            monsterHP = monsterHP - 1;
            document.getElementById('monsterHP').innerHTML = `${monsterHP} / ${monster.hp}`;
            monsterWidth = monsterWidth - 20;
            document.getElementById('monsterHP').style = `width: ${monsterWidth}%`
            document.getElementById("text").innerText = "You hit the pizza!"
        } else {

            if (playerHP <= 0) {
                alert("You dead. Go play some other game")
            } else {
                document.getElementById("text").innerText = "You miss!"
                playerHP = playerHP - 1
                document.getElementById('playerHP').innerHTML = `${playerHP} / ${player.hp}`;
                playerWidth = playerWidth - 10;
                document.getElementById('playerHP').style = `width: ${playerWidth}%`
                document.getElementById("text2").innerText = "Space Pizza hit you for 1 damage!"
            }
        }
    }
}
