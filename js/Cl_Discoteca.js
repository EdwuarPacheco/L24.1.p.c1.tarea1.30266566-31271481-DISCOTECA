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
        
        if(ru.sexo =='F'){
            this.contRumbera++;
        }
        if(ru.sexo == 'M'){
            this.contRumbero++;
        }
        if (ru.edad > 21 && ru.sexo == 'F' ){
                this.contRMayor21++;
            }
        
        if(this.contRumbera < this.contRumbero){
                return this.auxNombre= "HOMBRE";
            }
            else if(this.contRumbero < this.contRumbera){
                return this.auxNombre= "MUJERES";
            }
            else if(this.contRumbera == this.contRumbero){
                return this.auxNombre= "AMBOS POR IGUAL";
            }
        }
        
    devolverAcumTotal(){
        return this.acumTotal;
    }
    devolverAuxNombre(){
        return this.auxNombre;
    }
    calcularPorcentaje(){
        return this.contRMayor21*100/this.contRumbera;
    }
    
}