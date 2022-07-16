import {ganaste, quitarPunto} from './puntos.js';

const prota = document.querySelector('.personaje');
let nro = 0;

//COORDENADAR DE CASILLAS
const cxy = [
    [65,0],[130,0],[195,0],[260,0],[325,0],[390,0],[455,0],[520,0],[585,0],[650,0],
    [650,65],
    [650,126],[585,126],[520,126],[455,126],[390,126],[325,126],[260,126],[195,126],[130,126],[65,126],[0,126],
    [0,189],
    [0,252],[65,252],[130,252],[195,252],[260,252],[325,252],[390,252],[455,252],[520,252],[585,252],[650,252],[715,252]
];

export default function moverFicha(nro, btn, dado){
    return new Promise((resolve)=>{
        resolve(ejecucion(nro))        
        setTimeout(()=>{            
            resolve(refrescar(btn,dado))
        },1000)
    })
}

function ejecucion(n){
    //console.log('Coordenada X: '+cxy[n-1][0]+'px - Coordenada Y: '+cxy[n-1][1]+'px')  
    nro = nro + n;
    if(nro == 4){
        mvLineal()
        nro = 1;
        ajustarPosicion(nro)
    }else if(nro == 7 || nro == 8){
        mvLineal()
        nro = 1;
        quitarPunto()
        ajustarPosicion(nro)
    }else if(nro == 16){
        mvLineal()
        nro = 12;
        quitarPunto()
        ajustarPosicion(nro)
    }else if(nro == 19){
        mvLineal()
        nro = 12;
        ajustarPosicion(nro)
    }else if(nro == 23 || nro == 29){
        mvLineal()
        quitarPunto()        
    }else if(nro == 30){
        mvLineal()
        nro = 26;
        ajustarPosicion(nro)
    }else if(nro == 34){
        mvLineal()
        nro = 31;
        ajustarPosicion(nro)
    }else if(nro >= 35){
        prota.style.marginLeft=cxy[34][0]+'px';
        prota.style.marginTop=cxy[34][1]+'px';
        ganaste()
    }else{
        mvLineal()
    }
    
}

function mvLineal(){
    prota.style.marginLeft=cxy[nro-1][0]+'px';
    prota.style.marginTop=cxy[nro-1][1]+'px';
}

function ajustarPosicion(xy){
    setTimeout(()=>{
        prota.style.marginLeft=cxy[xy-1][0]+'px';
        prota.style.marginTop=cxy[xy-1][1]+'px';
    },2000)
}

function refrescar(btn,dado){
    btn.hidden=false;
    dado.src='./imagen/pregunta.png';
}