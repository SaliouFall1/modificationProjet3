document.addEventListener('DOMContentLoaded', () => {

  //Fonction pour Afficher le PopUP (nouvelle fenetre pour entrer les inf) DEPENSE
  var bouton = document.getElementById("button1");
  bouton.addEventListener("click", valide)
  function valide(){
     document.querySelector(".popup").style.display = "flex";
  }
// Fonction pour quitter le PopUP  (retourner sur la fenetre precedente) DEPENSE
  var cloture = document.getElementById("close");
   cloture.addEventListener("click",function(){
     var pop_pup = document.querySelector(".popup").style.display = "none";
     
  });

//Bouton de validation apres l'entrée des données sur le popup depense
const valide_button = document.getElementById("valide");
valide_button.addEventListener('click',function(){

      var titre_depense = document.getElementById("titre").value;
      var montant_depense = parseFloat(document.getElementById("montant").value);
      
      ajoutLigne(titre_depense , montant_depense);

//Fonction qui quitte le popup après validation (depense)
const quitte = document.querySelector(".popup");
quitte.style.display ="none";

//Somme des montant_depense & Affichage 
let totalDepense  = parseFloat(document.querySelector(".prixD").textContent ) || 0;
totalDepense += montant_depense;
let depense= document.querySelector(".prixD");
depense.textContent = totalDepense+ " Cfa";

var budget =document.querySelector(".price");
    
    let totalRevenu = parseFloat(document.querySelector(".prixS").textContent) || 0;

    var Solde = totalRevenu - totalDepense;
    budget.innerHTML = Solde+ " CFA";

});

// fonction pour ajouter ligne dans le tableau (depense)
function ajoutLigne(titre,montant) {
  const tbody = document.querySelector(".tbody");
  const Newrow =document.createElement("tr");
   Newrow.innerHTML = `
                <td><div style="color: green" class="titre"> ${titre}</div></td>
                <td><div style="color: green" class="montant">${montant} francCFA</div></td>
                <td>
                    <form action="button">
                        <button id="but1" type="submit">
                            supprimer
                        </button>
                    </form>
                </td>
            `;
            tbody.insertAdjacentElement("afterbegin",Newrow);

            //recuperation  du bouton supprimé + action de suppression
            
            const button = document.getElementById("but1");
            button.addEventListener("click",function(){
               // alert("bouton recupéré");
                tbody.removeChild(Newrow);
            });

}

/*Fonction pour afficher le tableau avec les données
function afficherTableau(data){
  //Recuperation de l'élément conteneur du tableau
  var tbody = document.querySelector(".tbody");
  // Suppression des anciennes données du tableau
  while(tbody.firstChild){
    tbody.removeChild(tbody.firstChild);
  }
  //Création du tableau
  var tab =document.createElement("table");
  tab.classList.add("#table_depense");
  // Creation du corps du tableau
  var body =document.createElement("tbody");
  //Parcours des données pour créer les lignes du tableau
  for (var i = 0; i < data.length; i++ ){
    var row = data[i];

    var ligne=document.createElement("tr");

    var celluleTitre = document.createElement("td");
    celluleTitre.textContent =row.titre_depense;
    
    var celluleMontant = document.createElement("td");
    celluleMontant.textContent = row.montant_depense;

    var celluleActions = document.createElement("td");
    var  boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent ="Supprimer";
    boutonSupprimer.classList.add("ajout");

  }

}*/

//Fonction pour Afficher le PopUP (nouvelle fenetre pour entrer les inf) REVENU
var buttonR = document.getElementById("button");
buttonR.addEventListener("click",function(){
 var pop = document.querySelector(".popup2");
 pop.style.display=" flex";
});

//Fonction pour quitter le PopUP  (retourner sur la fenetre precedente) REVENU
var fermé = document.getElementById("close2");
fermé.addEventListener("click",function(){
  var pop = document.querySelector(".popup2").style.display="none";
});

var valide_button2 = document.getElementById("valide2");
valide_button2.addEventListener('click',function(){
      var titre_revenu = document.getElementById("titre2").value;
      var montant_revenu = parseFloat(document.getElementById("montant2").value);

      ajoutrow(titre_revenu ,montant_revenu);

//Fonction qui quitte le popup après validation (depense)
const exit =document.querySelector(".popup2");
exit.style.display ="none";              

let totalRevenu = parseFloat(document.querySelector(".prixS").textContent) || 0;
    totalRevenu += montant_revenu; 
    var revenu = document.querySelector(".prixS");
    revenu.textContent = totalRevenu+" CFA";var budget =document.querySelector(".price");
    
    let totalDepense  = parseFloat(document.querySelector(".prixD").textContent ) || 0;

    var Solde = totalRevenu - totalDepense;
    budget.innerHTML = Solde+ " CFA";


});

function ajoutrow(titre2, montant2){
  const tabody = document.querySelector(".tabody");
  const n_ligne = document.createElement("tr");
  n_ligne.innerHTML =` 
              <td><div style="color: green"> ${titre2}</div> </td>
              <td><div style="color: green">${montant2} francCFA </div></td>
              <td>
                      <input id="but2" type="submit" value="supprimer" class="but2"></input>       
              </td>
          `
          tabody.insertAdjacentElement("afterbegin",n_ligne);
          // recuperation du bouton + suppression de la ligne
          // recuperation du bouton
          const button2 = document.querySelector("#but2");
          button2.classList.add("but2");
          /*
          button2.style.backgroundColor="red";
          button2.style.color ="white";
          button2.style.border ="none";
          button2.style.padding ="13px";
          button2.style.width= "40%";
          button2.style.fontWeight ="bold";
          button2.style.cursor ="pointer";
          button2.style.borderRadius= "6px"
          */

          // fonction de suppression
            button2.addEventListener("click",function(){
            tabody.removeChild(n_ligne);
              
          });

}  

// calcul de budget (depense & revenu)
var Cbudget = document.getElementById("button_budget");
    Cbudget.addEventListener("click",function(){
    var budget =document.querySelector(".price");
    
    let totalDepense  = parseFloat(document.querySelector(".prixD").textContent ) || 0;
    let totalRevenu = parseFloat(document.querySelector(".prixS").textContent) || 0;

    var Solde = totalRevenu - totalDepense;
    budget.innerHTML = Solde+ " CFA";
   
});
})
 
