/**
 * Carga inicialmente el programa
 */

var sentido = 10;
var t_x = 400;
var tanque;
var bala_x = 0;
var bala_y = 380;
var g_puntos = 0; 
var g_velocidad = 1;
var g_contador1 = 0;
var g_marca = 20;

/**
 * Carga iniciamente el programa.
 */
window.onload = function()
{
    tanque = document.getElementById("tk");
    tanque.style.left = t_x;
    setInterval( function(){ mover_particulas(); }, 50 ); //ejecucuin autonoma.
}

/**
 * Se encarga de mover todo.
*/
function mover_particulas()
{
    g_contador1 ++;

    if( g_contador1 > g_marca )
    {
        mover_marcianitos();
        mover_bala();
        comprobacion();    

        g_contador1 = 0;
    }
    console.log(g_contador1);  
}

/**
 * Mover la bala 
 */
function mover_bala()
{
    if( bala_y > 0 ) bala_y -= 20;
    document.getElementById( "bala" ).style.left = bala_x;
    document.getElementById( "bala" ).style.top = bala_y;
    //console.log( bala_y ); 
}

/**
 * se encarga de mover los marcianitos.
 */
function mover_marcianitos()
{
    var i = 1;
    var marcianitos = 0;
    var avance_y = 0;

    console.log( arreglo1.length );

    for( i = 1; i < arreglo1.length; i ++ )
    {
        //Esta es la decicion de sis devuelve en los extremos. Rebaño.
        if( arreglo1[ i ] < 20 || arreglo1[ i ] > 600 )
        {
            avance_y = 10; //Aumentamos avance en Y o verticalmente.
            sentido *= -1; //Cambiamos el sentido dl avence.
            break; // DEtenemos el ciclo , no me interes seguir avenzando si alguien toca el borde.
        }
    }

    //Con ets eciclo recorremos el total de marcianoitos.
    for( i = 1; i < arreglo1.length; i ++ )
    {
        //Está e sla decicsion de si devielve a los extremos.
        arreglo2[ i ] += avance_y; // Bajamos un paso al tocar los extremos. Antes el avance era de 10.
        arreglo1[ i ] += sentido; //Mueve los marcianitos de un lado al otro.

        //Tomamo sdel document los objestos como tal. Divs con texto.
        marcianitos = document.getElementById( "mm" + i );
        marcianitos.style.left = arreglo1[ i ]; //Asignamos los variables a los objetos gráficos.
        marcianitos.style.top = arreglo2[ i ];

        if( arreglo2[ i ] > 380 / 20 ) g_marca = 10;
    
    }

}





/**
 * funcion parar mover el tanque.
 * @param numero       Es el tipo de movimiento.
 */
function mover_defensor( des )
{
    //var tanque = document. getElementById("");

    switch( des )
    {
        case -1:

            t_x -= 10;

            break;

        case 0: //El disparo del usuario.

        if( bala_y <= 0 ) //validar el disparo en curso
        {
            bala_y = 380; //Devolvemos la bala.
            bala_x = t_x; //Tomamos la posicion del tanque
        }
           
            break;

        case 1:

            t_x += 10;

            break;
    }

    tanque.style.left = t_x;
    
}

/**
 * Comprobar colisones.
 */
function comprobacion()
{
    let i = 1;

    for( i  = 1; i <= arreglo1.length; i ++ )
    {
        if(bala_x >= arreglo1[ i ] && bala_x <= arreglo1[ i ] + 10) //Ancho de la bala.
        {
            if(bala_y >= arreglo2[ i ] && bala_y <= arreglo2[ i ] + 20) // Largo de la bala.
            {
                document.getElementById( "mm" + i ). innerHTML = "";
                g_puntos ++;
                document.getElementById("puntaje").value = g_puntos;
                console.log("acertaste");
                
            }
            
        }
    }

 //console.log("comprobacion");
}
    


