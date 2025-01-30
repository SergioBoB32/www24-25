//  1.- MOSTRA PER PANTALLA EL JUGADOR ACTUAL

let jug = [];

function AfegirJugador()  {

    let jugador = document.getElementById("camp_nom").value;
    document.getElementById("jugadors").innerHTML += `${jugador} <br>`;
    
    
    jug.push(jugador);
    
    }

    function  NextPlayer()  {

        document.getElementById("jugador_actual").innerHTML = jug[0];       
        
        
        
//  2.- EXTREURE EL JUGADOR QUE ESTAVA AL COMENÇAMENT

let jugador_actual = jug.shift();


//  3.- COLOCAR-LO AL FINAL DE LA LLISTA 

jug.push(jugador_actual);


//  4.- ESBORRAR LA PANTALLA I EMPRA BUCLE PER MOSTRA TOTA LA LLISTA DE NOU

document.getElementById("jugadors").innerHTML = " ";


for (let i=0;i<jug.length;i++){

    document.getElementById("jugadors").innerHTML +=
    `${jug[i]}<br>`;
}

} 





