export class TipoEventos {

    id_tipoEvento: number = 0;
    nombre_tipoEvento: string = "";
    descripcion: string = "";

    getIdTipoEvento(){
        return this.id_tipoEvento;
    }

    getNombreTipoEvento(){
        return this.nombre_tipoEvento;
    }

    getDescripcion(){
        return this.descripcion;
    }
}