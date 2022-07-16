const punto = document.querySelector('.puntos');
let pt = null;
export function quitarPunto(){
    pt = punto.textContent - 1;
    switch(pt){
        case 0:
            perdiste()
        default:
            punto.textContent = pt;
    }
}

function perdiste(){
    swal({
        title: "HAS PERDIDO!! :(",                  
        icon: "error",                    
      }).then(result =>{
        if(result.value){
            location.reload(); 
        }else{location.reload();}
      })
}

export function ganaste(){
    swal({
        title: "HAS GANADO!! :)",                  
        icon: "success",                    
      }).then(result =>{
        if(result.value){
            location.reload(); 
        }else{location.reload();}
      })
}