const prompt = require("prompt-sync")()
let qone = {
    sentence: "A qui appartient le cheval blanc d'Henri IV? ?",
    responses: ["1) Le cheval est un être libre et égal en droit, personne ne le possède",
        "2) C'est un cheval de location qui appartient à Rent-A-Horse ",
        "3) Henri IV",
        "4) Le cheval est mort depuis, il n'appartient plus à personne"],
    goodAnswer: 3
}
let qtwo = {
    sentence: "Si Louis XIV précède Louis XV, et que Louis XV précède Louis XVI, qui succède à Louis XVI? (indice : C'est aussi un bourbon mais il était imbuvable)",
    responses: ["1) Louis XVII", "2) Louis XVIII", "3) Charles X, Louis-Philippe"],
    goodAnswer: 2
}
let qtree = {
    sentence: "Qui n'était pas sérieux quand il avait 17 ans?(indice : littérature)",
    responses: ["1) Arthur Rimbaud", "2) Paul Verlaine", "3) La Boetie", "4) Charles Baudelaire"],
    goodAnswer: 1
}
let qfour = {
    sentence: "Quel est l'équivalent français de James Bond?(indice : cinéma et littérature)",
    responses: ["1) Fernand Pouillon", "2) Bernard Boursicot", "3) OSS 117", "4) La réponse 4"],
    goodAnswer: 3
}
let qfive = {
    sentence: "Qui irait bien faire un tour du coté de chez Swann? (indice : musique)",
    responses: ["1) Boris Vian", "2) Michel Berger", "3) Marcel Proust", "4) Dave"],
    goodAnswer: 4
}
let tabQuestion = [qone, qtwo, qtree, qfour, qfive]
let bonnerep  = 0

for (let i = 0; i < tabQuestion.length; i++) {
    console.log(tabQuestion[i].sentence);
    for (let j = 0; j < tabQuestion[i].responses.length; j++) {
        console.log(tabQuestion[i].responses[j]);
    }
   let response = prompt ("Choisi une réponse parmi les choix 1, 2, 3 ou 4: ")
    if (Number(response) === tabQuestion[i].goodAnswer) {
        bonnerep++;
        console.log("Vous avez répondu correctement");
    } else {
        console.log("Mauvaise réponse"); 
    }
}
console.log ("Merci d'avoir joué! Vous avez ", bonnerep, "points(s)! A bientôt!")

