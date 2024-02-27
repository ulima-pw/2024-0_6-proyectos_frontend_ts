import EquipoType from "../../../domain/entities/Equipo";

interface EquipoDatasourceType {
    getAll : () => Promise<EquipoType[]>
    getByNombreByAnho : (nombre : string, anho : number) => Promise<EquipoType[]>
    get : (id : number) => Promise<EquipoType>
}

export default EquipoDatasourceType