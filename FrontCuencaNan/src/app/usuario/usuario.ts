export abstract class Usuario {

    id_usuario: number = 0;
    cedula: string = "";
    nombres: string = "";
    apellidos: string = "";
    mail: string = "";
    direccion: string = "";
    genero: string = "";
    fecha_nacimiento: Date = null;
    nombre_usuario: string = "";
    contrasena: string = "";
    celular: string = "";
    foto: string = "";
    intereses: string = "";

    constructor(params: any) {
        this.id_usuario = params.id_usuario;
        this.cedula = params.cedula;
        this.nombres = params.nombres;
        this.apellidos = params.apellidos;
        this.mail = params.mail;
        this.direccion = params.direccion;
        this.genero = params.genero;
        this.fecha_nacimiento = params.fecha_nacimiento;
        this.nombre_usuario = params.nombre_usuario;
        this.contrasena = params.contrasena;
        this.celular = params.celular;
        this.foto = params.foto;
        this.intereses = params.intereses;

    }

    getIdUsuario() {
        return this.id_usuario;
    }

    getCedula() {
        return this.cedula;
    }

    getNombres() {
        return this.nombres;
    }

    getApellidos() {
        return this.apellidos;
    }

    getMail() {
        return this.mail;
    }

    getDireccion() {
        return this.direccion;
    }

    getGenero(){
        return this.genero;
    }

    getFechaNacimiento(){
        return this.fecha_nacimiento;
    }

    getNombreUsuario(){
        return this.nombre_usuario
    }

    getContrasena(){
        return this.contrasena;
    }

    getCelular(){
        return this.celular;
    }

    getFoto(){
        return this.foto;
    }

    getIntereses(){
        return this.intereses;
    }

}