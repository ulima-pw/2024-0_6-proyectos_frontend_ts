export enum EstadoEquipo {
    Activo = "A",
    Inactivo = "I"
}

interface EquipoType {
    id? : number
    nombre : string
    anho : number
    estado : EstadoEquipo
}

export default EquipoType