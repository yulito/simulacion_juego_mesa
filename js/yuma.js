import moverFicha from './mover.js';

const doo = document.querySelector('.doo');
const btnIniciar = document.querySelector('.iniciar');
const btnDetener = document.querySelector('.detener');
btnDetener.hidden=true;

const dadoArreglo = [
                    './imagen/nrouno.png',
                    './imagen/nrodos.png',
                    './imagen/nrotres.png',
                    './imagen/nrocuatro.png',
                    './imagen/nrocinco.png',
                    './imagen/nroseis.png'];

let giro = null
let count = 0;
let ciclo = 0;

const lanzarDado = ()=>{   
    btnIniciar.hidden=true;
    btnDetener.hidden=false;
    giro = setInterval(()=>{
        count = 0;
        if(ciclo < 6){            
            doo.src=dadoArreglo[ciclo];                                    
            count=ciclo + 1;
            ciclo++;            
        }else{
            count = 6; 
            ciclo=0;}        
    },80);
}

const frenarGiro=()=>{
    btnDetener.hidden=true;
    clearInterval(giro);     
    moverFicha(count, btnIniciar, doo)
}

btnIniciar.addEventListener('click',lanzarDado);
btnDetener.addEventListener('click',frenarGiro);