// 1.El programa tiene que elegir una palabra para adivnarla 
// array de palbra a adivinar 

const LlistatParaules = ["latigo","sandia","pollo","chocolate","gas"];

// como elegir un elemento aleatorio de un vector

   let ParaulaSecreta;

// array con lineas de la palabra a adivinar (tantas lineas como letras)

   let ArrayParaulaGuions = [];

   let ArrayParaulaSecreta;  
// Numero de fallos y aciertos

   let NumErrades=0;
   let NumEncerts=0;
// lista de letras ya dichas

   const llistatLletres = [];

   
   function Inicialitzar () {

      var input = document.getElementById("letra");
      input.addEventListener("keypress", function(event) {if (event.key === "Enter") {
         event.preventDefault();
         document.getElementById("boton").click();
      }

      })

       // seleccio de la paraula de manera aleatoria
       // returns random integer from 0 to 9:
       //
       
       let posicion = Math.floor(Math.random() * LlistatParaules.length);
   

       // triem la paraula de l'array diccionario

       ParaulaSecreta = LlistatParaules[posicion];



       ArrayParaulaSecreta = Array.from(ParaulaSecreta);

       document.getElementById("palabra_solucion").innerHTML = ParaulaSecreta ;


    

    let num_guions = ArrayParaulaSecreta.length;
    for (let i=0;i<num_guions;i++) {
            ArrayParaulaGuions[i] = '_';  
            
    }

    for (let i=0;i<num_guions;i++) {
      document.getElementById("palabra").innerHTML += 
      `${ArrayParaulaGuions[i]} `;
    }

   }

function Enviar()  {

let encert = false;

let lletra_escrita = document.getElementById("letra").value;

llistatLletres.push(lletra_escrita);
document.getElementById("llistat_lletres").innerHTML += `${lletra_escrita} <br>`;
//esborra la lletra introduida al formulari//
document.getElementById("formulario").reset();




// 3.-COMPROVEN SI LA LLETRA ESTA A LA ArrayParaulaSecreta
// Modifiquen Array-GUIONES AMB LES LLETRES ENDEVINADES
// MARQUEN ENCERT=TRUE  I INCREMENT EL NOMBRE D'ENCERTS
//



for (let i = 0; i < ArrayParaulaSecreta.length; i++) {
   if (ArrayParaulaSecreta[i] == lletra_escrita) {
       ArrayParaulaGuions[i] = lletra_escrita;
      encert = true;
     NumEncerts++;
   }
}


if (!encert) {
   NumErrades++;
}

//5.ESBORREN LA PARAULA

document.getElementById("palabra").innerHTML = "";

for (let i=0; i <ArrayParaulaGuions.length;i++) {
   document.getElementById("palabra").innerHTML += 
   `${ArrayParaulaGuions[i]} `;
 }

 document.getElementById("letra").focus();
  Dibuixar(NumErrades, NumEncerts);

}

function Dibuixar (errades,encerts) {

let imatge = document.getElementById("imagen");

switch(errades) {
    case 0:  
          
 imatge.src = "../3.-El penjat/IMG/PENJAT/A0.png";
 break;

     case 1:  
          
 imatge.src = "../3.-El penjat/IMG/PENJAT/A1.png";
 break;

     case 2:  
          
 imatge.src = "../3.-El penjat/IMG/PENJAT/A2.png" ;
 break;

 case 3:  
          
 imatge.src = "../3.-El penjat/IMG/PENJAT/A3.png" ;
 break;

 case 4:  
          
 imatge.src = "../3.-El penjat/IMG/PENJAT/A4.png" ;
 break;

 case 5:  
          
 imatge.src = "../3.-El penjat/IMG/PENJAT/A5.png";
 break;

 case 6:  
          
 imatge.src = "../3.-El penjat/IMG/PENJAT/A6.png";
 break;

 
}


if (NumEncerts== ArrayParaulaSecreta.length){
   document.getElementById("fraseencert").innerHTML += `has guanyat la resposta'ha costat ${llistatLletres.length} lletres`;
   document.getElementById("victoria").style.display="block";

}


if (NumErrades== ArrayParaulaSecreta.length){
   document.getElementById("fraseerrada").innerHTML += `has perdut la resposta era ${ParaulaSecreta}`;
   document.getElementById("derrota").style.display="block"

}

}
