import EquipoType, { EstadoEquipo } from "../../../domain/entities/Equipo";
import EquipoDatasourceType from "../types/EquipoDatasourceType";

const EquipoDatasource = () : EquipoDatasourceType => {
    const getAll = async () : Promise<EquipoType[]> => {
        const listaEquipos : EquipoType[] = [
            {
                id : 1,
                nombre : "Equipo1",
                anho : 2024,
                estado : EstadoEquipo.Activo
            },
            {
                id : 2,
                nombre : "Equipo2",
                anho : 2024,
                estado : EstadoEquipo.Activo
            }
        ]

        return listaEquipos
    }

    const getByNombreByAnho = async (nombre : string, anho : number) : Promise<EquipoType[]> =>{
        const listaEquipos : EquipoType[] = [
            {
                id : 1,
                nombre : "Equipo1",
                anho : 2024,
                estado : EstadoEquipo.Activo
            },
            {
                id : 2,
                nombre : "Equipo2",
                anho : 2024,
                estado : EstadoEquipo.Activo
            }
        ]

        return listaEquipos
    }
    
    const get = async (id : number) : Promise<EquipoType> => {
        return {
            id : 2,
            nombre : "Equipo2",
            anho : 2024,
            estado : EstadoEquipo.Activo
        }
    }

    return {
        getAll, getByNombreByAnho, get
    }
}

export default EquipoDatasource