import UsuarioType from "../../../domain/entities/Usuario";
import UsuarioDatasourceType, { LoginUsuarioDatasourceType } from "../types/UsuarioDatasourceType";

const UsuarioDatasource = () : UsuarioDatasourceType => {
    const login = async (usuario : UsuarioType) : Promise<LoginUsuarioDatasourceType> => {
        if (usuario.username == "edgar" && usuario.password == "123") {
            // Login correcto
            const resp : LoginUsuarioDatasourceType = {
                usuario : {
                    id : 1,
                    nombre : "Edgar",
                    username : "edgar",
                    password : ""
                },
                msg : ""
            }
            return  resp
        }else {
            const resp : LoginUsuarioDatasourceType = {
                usuario : null,
                msg : "Error en login"
            }
            return resp
        }
    }

    return {
        login
    }
}

export default UsuarioDatasource