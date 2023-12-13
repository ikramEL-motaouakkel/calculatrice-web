 //fonction qui affiche la valeur
 function afficher(val) 
 { 
     document.getElementById("uni").value+=val 
 } 

          //fonction qui efface l'écran 
          function effacer() 
          { 


              document.getElementById("uni").value = "" 
          }       
          
          //fonction qui évalue le chiffre et renvoie la sortie
          function calculer() 
          { 
              let a = document.getElementById("uni").value 
              let b = eval(a) 
              document.getElementById("uni").value = b 
          } 