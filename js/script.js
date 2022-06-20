// Verifica che il file sia collegato correttamente //

console.log('JS OK')

// Steps //

const firstName = prompt('Qual è il tuo nome?', 'francesco');
console.log(firstName);

const lastName = prompt('Qual è il tuo cognome?', 'rossi');
console.log(lastName);

const favColor = prompt('Scrivi il tuo colore preferito', 'verde');
console.log(favColor);

let pwGen = `your generated password is ${firstName}${lastName}${favColor}21`
console.log(pwGen);

const resultParagraph = document.getElementById('sample-id');
console.log(resultParagraph);

resultParagraph.innerText = pwGen;