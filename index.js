const submit = document.querySelector("#submit");
const mot = document.querySelector("#mot").value;
const formulaire = document.querySelector(".form");
const affichageMot = document.querySelector(".affichageMot");
const affichageErreur = document.querySelector(".erreur");
const affichageEssai = document.querySelector(".afficherEssai");
var word;
let chars;
let vie = 7;

submit.addEventListener("click", () => {
  const mot = document.querySelector("#mot").value;
  if (mot.length > 5) {
    console.log(mot.value);
    formulaire.style.visibility = "hidden";
    affichageMot.style.visibility = "visible";
    affichageErreur.style.visibility = "hidden";
    affichageEssai.style.visibility = "visible";
    let word = mot.replaceAll(" ", "-");
    let chars = word.split("");
    console.log(chars);
    console.log(word);

    //création des tirets
    for (let i = 0; i < mot.length; i++) {
      let divLetter = document.createElement("div");
      divLetter.id = "letter" + [i];
      if (chars[i] === "-") {
        let letter = document.createTextNode("-");
        divLetter.append(letter);
        affichageMot.appendChild(divLetter);
      } else {
        let letter = document.createTextNode("_");
        divLetter.append(letter);
        affichageMot.appendChild(divLetter);
      }
    }
  } else {
    affichageErreur.style.visibility = "visible";
    affichageErreur.innerHTML = `
        <p> Veuillez choisir un mot ou un groupe de mots plus long</p>
    `;
  }
});

essaie.addEventListener("click", () => {
  const reponse = document.querySelector("#reponse").value;
  console.log(reponse);
  console.log(mot.length);
  console.log(word);
  for (let i = 0; i < mot.length; i++) {
    console.log("test" + chars);
    if (reponse === chars[i]) {
      console.log("trouvé");
      document.querySelector("letter" + [i]).textContent = chars[i];
    } else {
      console.log("nop");
    }
  }
});

console.log(word);
