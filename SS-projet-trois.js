const prompt = require('prompt-sync')()

let name = {
    player: "Guerrier de feu",
    computer: "Sombre lutin",
}
let hitbox = {
    player: maxvalue =50,
    computer: maxvalue =50,
};
function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function attaque(nomAttaque, degats, chance, cible, type = "attaque") {
    const result = randomize(1, chance);
    
    if (result === 1) {
        if (type === "attaque") {
            hitbox[cible] -= degats;
            console.log(nomAttaque + " réussie ! " + name[cible] + " perd " + degats + " PV.");
        } else if (type === "soin") {
            hitbox[cible] += degats;
            console.log(nomAttaque + " réussie ! " + name[cible] + " récupère " + degats + " PV.");
        }
    } else {
        console.log("l'attaque a échoué ");
    }
}
const nomAttaque = {
    "frappe rapide": (cible) => attaque("Frappe rapide", 10, 2, cible, "attaque"),
    "soin leger": (cible) => attaque("Soin leger", 10, 3, cible,"soin"),
    "coup puissant": (cible) => attaque("Coup puissant", 20, 3, cible, "attaque"),
    "frappe devastatrice": (cible) => attaque("Frappe dévastatrice", 30, 4, cible, "attaque")
};

function combat() {
    while (hitbox.player > 0 && hitbox.computer > 0) {
        console.log("Le guerrier de feu a ", hitbox.player, "points de vie et le sombre lutin a ", hitbox.computer, " points de vie");
        console.log("Les attaques et sorts disponibles sont : frappe rapide ; soins leger ; coup puissant et  frappe devastatrice");
        console.log("Veuillez choisir un sort ou une attaque");
            let choix = prompt("").toLocaleLowerCase();
            let cible = (choix === "soin leger") ? "player" : "computer";
            nomAttaque[choix](cible);
        if (hitbox.computer <= 0) {
            console.log("Félicitations à vous, Guerrier de feu, vous avez vaincu le Sombre lutin");
            break;
        }
        console.log("C'est au tour de sombre lutin...");
        let attaquesList = Object.keys(nomAttaque);
        if (hitbox.computer > 20) {
            attaquesList = attaquesList.filter(function (attaque) {
                if (attaque == "soin leger") {
                    return false;
                } else {
                    return true;
                }
            });
        }
        let randomIndex = randomize(0, attaquesList.length - 1);
        let choixcomputer = attaquesList[randomIndex];
        let ciblecomputer = (choixcomputer === "soin leger") ? "computer" : "player"; 
        nomAttaque[choixcomputer](ciblecomputer);
        console.log("Sombre lutin avait choisi ",choixcomputer);
        console.log("Cest au tour du gerrier de feu...");
        
        if (hitbox.player <= 0) {
            console.log("AAAARHHHH ! Le Guerrier de feu a été vaincu par le Sombre lutin !");
            break;
        }
    }
}
console.log("Bonjour à vous guerrier de feu, vous devez affronter dans un duel épique le sombre lutin. Que le combat commence...");
combat();



