export class Eventos {

    id_evento: number = 0;
    id_tipoEvento: number = 0;
    categoria: string = "";
    nombre: string = "";
    fecha_Inicio: Date = null;
    fecha_Fin: Date = null;

    constructor(params: any){
        this.id_evento = params.id_evento;
        this.id_tipoEvento = params.id_tipoEvento;
        this.categoria = params.categoria;
        this.nombre = params.nombre;
        this.fecha_Inicio = params.fecha_Inicio;
        this.fecha_Fin = params.fecha_Fin;
    }

    getIdEvento() {
        return this.id_evento;
    }

    getIdTipoEvento() {
        return this.id_tipoEvento;
    }

    getCategoria(){
        return this.categoria;
    }

    getNombre(){
        return this.nombre;
    }

    getFechaInicio(){
        return this.fecha_Inicio;
    }

    getFechaFin(){
        return this.fecha_Fin;
    }
}
