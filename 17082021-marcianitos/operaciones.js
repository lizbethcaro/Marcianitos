/**
 * Carga inicialmente el programa
 */

var sentido = 10;
var t_x = 400;
var tanque = 0;

/*var marcianitos;
var m_x = 100;
var m_y = 20;*/

window.onload = function()
{
    console.log("Hola.");

    /*marcianitos = document.getElementById("mm1");
    marcianitos.style.left = m_x;
    marcianitos.style.top = m_y;*/

    tanque = document.getElementById("tk");
    tanque.style.left = t_x;

    setInterval( function(){ mover_particulas(); }, 1000 );
    console.log( arreglo1 );
    console.log( arreglo2 );
}


function mover_particulas()
{
    var i = 1;
    var marcianitos = 0;

    for( i = 1; i <= 10; i ++ )
    {
        marcianitos = document.getElementById( "mm" + i );
        console.log( arreglo1[ i ] );
        

        if( arreglo1[ i ] < 20 || arreglo1[ i ] > 200 ) 
        {
            sentido *= -1;
            arreglo2[ i ] += 10;
        }

        arreglo1[ i ] += sentido;
        marcianitos.style.left = arreglo1[ i ];
        marcianitos.style.top = arreglo2[ i ];
    
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

        case 0:
            break;

        case 1:

            t_x += 10;

            break;
    }

    tanque.style.left = t_x;
}
