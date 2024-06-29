export default class Cl_Discoteca{

    //Inicializamos atributos
    constructor(){
        this.acumTotal = 0;
        this.contRumbera = 0;
        this.contRMayor21 = 0;
        this.contRumbero = 0;
        this.mayor = 0;
        this.auxNombre = " ";
    }

    //Metodos
    procesarRumbera(ru){
        this.acumTotal+=ru.calcularPago();
        
        if(ru.sexo=='F'){
            this.contRumbera++;
        }
        if (ru.edad >= 21 && ru.sexo == 'F' ){
                this.contRMayor21++;
            }
        }  
    devolveracumTotal(){
        return this.acumTotal;
    }
    devolvercontRumbera(){
        return this.contRumbera;
    }
    devolvercontRMayor21(){
        return this.contRMayor21;
    }
    calcularPorcentaje(){
        return this.contRMayor21*100/this.contRumbera;
    }
    
}