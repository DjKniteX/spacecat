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
let magicWidth = 100;


let monsterHP = monster.hp;
//Monster setup
document.getElementById('monsterHP').innerHTML = `${monsterHP} / ${monster.hp}`;
document.getElementById('monsterHP').style = `width: ${monsterWidth}%`

let playerHP = player.hp;
let playerMP = player.mp;
// Player setup
document.getElementById('playerHP').innerHTML = `${player.hp} / ${player.hp}`;
document.getElementById('playerHP').style = `width: ${playerWidth}%`
document.getElementById('playerMP').innerHTML = `${player.mp} / ${player.mp}`;
document.getElementById('playerMP').style = `width: ${playerWidth}%`;

function damage(x, y,z, g, spell) {
    if (g == "attack") {
        if (x >= 5) {
            monsterHP = monsterHP - y;
            document.getElementById('monsterHP').innerHTML = `${monsterHP} / ${monster.hp}`;
            monsterWidth = monsterWidth - z;
            document.getElementById('monsterHP').style = `width: ${monsterWidth}%`
            document.getElementById("text").innerText = "You hit the pizza!"
            document.getElementById("text2").innerText = ""
            if (monsterHP <= 0) {
                document.getElementById("text").innerText = "You ate the pizza!"
                document.getElementById("pizza").removeAttribute('src')
                document.getElementById("monster").textContent = 'You did it!'
                document.getElementById('attack').setAttribute('onclick','done()')
                document.getElementById('magic').setAttribute('data-bs-toggle','none')
    
            }
    } else {
                document.getElementById("text2").innerText = "You miss!"
                playerHP = playerHP - 1
                document.getElementById('playerHP').innerHTML = `${playerHP} / ${player.hp}`;
                playerWidth = playerWidth - 10;
                document.getElementById('playerHP').style = `width: ${playerWidth}%`
                document.getElementById("text").innerText = "Space Pizza hit you for 1 damage!"
                if (playerHP <= 0) {
                    document.getElementById('attack').setAttribute('onclick','done()')
                    document.getElementById('magic').setAttribute('data-bs-toggle','none')
                    document.getElementById("text").innerText = "You're gone. Go play another game."
                    document.getElementById("monster").textContent = 'The Pizza was too much for you'
                }
        }
    } else if (g == "magic") {
        if (x >= 7) {
            if (spell == "thunder") {
                monsterHP = monsterHP - 3;
                document.getElementById('monsterHP').innerHTML = `${monsterHP} / ${monster.hp}`;
                monsterWidth = monsterWidth - 60;
                document.getElementById('monsterHP').style = `width: ${monsterWidth}%`
                document.getElementById("text").innerText = "You hit the pizza with thunder!"
                document.getElementById("text2").innerText = ""
                playerMP = playerMP - 2
                document.getElementById('playerMP').innerHTML = `${playerMP} / ${player.mp}`;
                magicWidth = magicWidth - 40;
                document.getElementById('playerMP').style = `width: ${magicWidth}%`
                if (monsterHP <= 0) {
                    document.getElementById("text").innerText = "You ate the pizza!"
                    document.getElementById("pizza").removeAttribute('src')
                    document.getElementById("monster").textContent = 'You did it!'
                    document.getElementById('attack').setAttribute('onclick','done()')
                    document.getElementById('magic').setAttribute('data-bs-toggle','none')
        
                }
            }
            else if (x >=5) {
                if (spell == "fire") {
                    monsterHP = monsterHP - y;
                    document.getElementById('monsterHP').innerHTML = `${monsterHP} / ${monster.hp}`;
                    monsterWidth = monsterWidth - z;
                    document.getElementById('monsterHP').style = `width: ${monsterWidth}%`
                    document.getElementById("text").innerText = "You hit the pizza with fire!"
                    document.getElementById("text2").innerText = ""
                    playerMP = playerMP - 1
                    document.getElementById('playerMP').innerHTML = `${playerMP} / ${player.mp}`;
                    magicWidth = magicWidth - z;
                    document.getElementById('playerMP').style = `width: ${magicWidth}%`
                    if (monsterHP <= 0) {
                        document.getElementById("text").innerText = "You ate the pizza!"
                        document.getElementById("pizza").removeAttribute('src')
                        document.getElementById("monster").textContent = 'You did it!'
                        document.getElementById('attack').setAttribute('onclick','done()')
                        document.getElementById('magic').setAttribute('data-bs-toggle','none')
            
                    }
                } else if (spell == "ice") {
                    monsterHP = monsterHP - y;
                    document.getElementById('monsterHP').innerHTML = `${monsterHP} / ${monster.hp}`;
                    monsterWidth = monsterWidth - z;
                    document.getElementById('monsterHP').style = `width: ${monsterWidth}%`
                    document.getElementById("text").innerText = "You hit the pizza with ice!"
                    playerMP = playerMP - 1
                    document.getElementById('playerMP').innerHTML = `${playerMP} / ${player.mp}`;
                    magicWidth = magicWidth - z;
                    document.getElementById('playerMP').style = `width: ${magicWidth}%`
                    if (monsterHP <= 0) {
                        document.getElementById("text").innerText = "You ate the pizza!"
                        document.getElementById("pizza").removeAttribute('src')
                        document.getElementById("monster").textContent = 'You did it!'
                        document.getElementById('attack').setAttribute('onclick','done()')
                        document.getElementById('magic').setAttribute('data-bs-toggle','none')
            
                    }
                }
            } 
            } else {
                    document.getElementById("text2").innerText = "You miss!"
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

}


function attack() {
        let random = Math.floor(Math.random() * 10)
        damage(random, 1, 20, 'attack')
    }



function magic() {
    let random = Math.floor(Math.random() * 10)
    let spell = document.querySelector('input[name="spell"]:checked').value;
        damage(random, 2, 40, 'magic', spell)
}

function runaway() {

}

function done() {
    if (monsterHP <= 0) {
        alert("You already ate the pizza. Go play something else!")
    } else if (playerHP <= 0 ) {
        alert("You done messed up. Go play something else.")
    }
}
