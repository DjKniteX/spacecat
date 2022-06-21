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
        let random = Math.floor(Math.random() * 10)
        if (random >= 5 ) {
                monsterHP = monsterHP - 1;
                document.getElementById('monsterHP').innerHTML = `${monsterHP} / ${monster.hp}`;
                monsterWidth = monsterWidth - 20;
                document.getElementById('monsterHP').style = `width: ${monsterWidth}%`
                document.getElementById("text").innerText = "You hit the pizza!"
                if (monsterHP <= 0) {
                    document.getElementById("text").innerText = "You ate the pizza!"
                    document.getElementById("pizza").removeAttribute('src')
                    document.getElementById("monster").textContent = 'You did it!'
                    document.getElementById('attack').setAttribute('onclick','done()')
    
                }
        } else {
                    document.getElementById("text").innerText = "You miss!"
                    playerHP = playerHP - 1
                    document.getElementById('playerHP').innerHTML = `${playerHP} / ${player.hp}`;
                    playerWidth = playerWidth - 10;
                    document.getElementById('playerHP').style = `width: ${playerWidth}%`
                    document.getElementById("text").innerText = "Space Pizza hit you for 1 damage!"
                    if (playerHP <= 0) {
                        document.getElementById('attack').setAttribute('onclick','done()')
                        document.getElementById("text").innerText = "You're gone. Go play another game."
                        document.getElementById("monster").textContent = 'The Pizza was too much for you'
                    }
        }
    }


function done() {
    if (monsterHP <= 0) {
        alert("You already ate the pizza. Go play something else!")
    } else if (playerHP <= 0 ) {
        alert("You done messed up. Go play something else.")
    }
}

function magic() {
    var checkedValue = document.querySelector('.form-check-input:checked').value;
    monsterHP = monsterHP - 2;
    document.getElementById('monsterHP').innerHTML = `${monsterHP} / ${monster.hp}`;
    monsterWidth = monsterWidth - 40;
    document.getElementById('monsterHP').style = `width: ${monsterWidth}%`

}

function nextModal() {
    console.log("test")
}
