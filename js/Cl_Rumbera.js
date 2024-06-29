export default class Cl_Rumbera{

    //Inicializamos atributos
    constructor(n, c, e, s){
        this.nombre = n;
        this.cedula = c;
        this.edad = e;
        this.sexo = s;
    }
    
    //Metodos
    set nombre(n){
        this._nombre=n;
    }
    set cedula(c){
        this._cedula=+c;
    }
    set edad(e){
        this._edad=+e;
    }
    set sexo(s){
        this._sexo=s;
    }

    get nombre(){
       return this._nombre;
    }
    get cedula(){
       return this._cedula;
    }
    get edad(){
       return this._edad;
    }
    get sexo(){
       return this._sexo;
    }
    calcularPago(){
        let pago = 25
        if(this.sexo == "M"){
            return pago;
        }
        else if(this.sexo == "F"){
            return pago*25/100;
        }
        else{
            return 0;
        }
    }
}