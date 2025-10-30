git//////////////////////////////////////
let nom = prompt(("Comment vous appelez vous?"))

console.log("Bonjour", nom, "Vous êtes au petit déjeuner, désirez vous un thé ou un cafe");

let boisson = prompt((""))

if (boisson === "cafe"){
    console.log("Très bon choix!") ;
 console.log("Et avec ceci? Veuillez répondre par oui, non, tartines et oeufs, tartines et fruits, et puis bon vous avez compris, pas besoin d'un dessin...")
}else if (boisson === "the"){
    console.log("Très mauvais choix!") ;
 console.log("Et avec ceci? un petit dej complet? Veuillez répondre par oui, non, tartines et oeufs, tartines et fruits, et puis bon vous avez compris, pas besoin d'un dessin...")
}else {
    console.log("Veuillez répondre cafe pour café ou the pour the. Pour tout autres choix de boisson chaude, il y à un bar au coin de la rue ou vous pourrez voir si j'y suis (spoiler : peut-être")
}


let accompagnement = prompt((""))
let tidej = accompagnement.split(" ");
if (tidej.length === 1 && tidej.includes("tartines") || tidej.includes("oeufs") || tidej.includes("fruits")) {
    console.log("Très bien mais il manque quelque chose pour que ce petit dejeuner soit équilibrés")
} else if (tidej.length === 2 &&
   ( tidej.includes("fruits") && tidej.includes("oeufs")) ||
    (tidej.includes("fruits") && tidej.includes("tartines")) ||
    (tidej.includes("tartines") && tidej.includes("oeufs"))) {
    console.log("Très bien!");
} else if (tidej.length === 3 &&
    tidej.includes("fruits") &&
    tidej.includes ("tartines")
    && tidej.includes("oeufs")) {
    console.log("Parfait!")
} else if (accompagnement === "non") {
    console.log("Vous devriez prendre l'habitude de manger quelque chose le matin...")
} else {
    console.log("Veuillez répondre par oui, ou par tartines, oeufs ou fruits selon votre choix");
}

console.log("Allez vous prendre une douche aujourd'hui? (oui ou non)")

let hygiène = prompt((""))
if (hygiène === "non") {
    console.log("Très bien! J'imagine que votre passion pour pépé le putois à pris le dessus!");
}
else if (hygiène === "oui") {
    console.log("Enfin ! Alors le but du jeu c'est que l'eau soit transparente à la fin... Mais ne soyez pas trop exigent avec vous-même, il est possible que vous n'y arrivez pas");

}

console.log("Votre voiture est en panne, vous devez donc prendre le bus...");

console.log("Vous montez dans le bus")
if (hygiène === "non") {
    console.log("Le chauffeur exerce son droit de retrait au nom de la sécurité olfactive, hurlant qu'on a pas connu de telles condition de travail tandis qu'un enfant vous demande un autographe, sa mère réticente se dit que c'est pas tous les jours qu'on rencontre l'homme le plus malodorant du monde mais se demande si l'odeur va impregner son rejetton, ajoutant une note odorante à la face repoussante qu'il arbore effrontément")
    let appel = prompt("Souhaitez-vous prévenir votre patron de votre retards (car oui, vous allez devoir marcher")
    if (appel === "oui") {
        console.log("Vous tombez sur sa messagerie. Avec un peu de chance, il ne remarquera pas votre retard...")
    }
    else if (appel === "non") {
        console.log("Esperons qu'il ne remarque rien...")
    }
}
else if (hygiène === "oui") {
    console.log("Le chauffeur vous regarde d'un oeil dubitatif, roule et vous conduis jusqu'à votre arrêt. Vous vous rendez au travail");

}
console.log("Vous arrivez sur votre lieu de travail...");
if (hygiène === "non") {
    console.log("Vous arrivez en retard pour la énième fois et votre patron ne semble pas enchanté par vos extravagances olfactives... Vous ête viré")
} else {
    console.log("Vous tombez nezà nez avec votre patron, qui ne vous apprécie pas du tout. Il vous demande demande de choisir un chiffre");

}
let chiffre = Number(prompt())
if (chiffre <= 0 && chiffre >= 10) {
    console.log("Perdu, vous êtes viré")
} else if (chiffre === 3.14) {
    console.log("On ne va pas tourner en rond, vous êtes virés")
}




