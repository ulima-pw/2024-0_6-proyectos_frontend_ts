import UsuarioType from "../../../domain/entities/Usuario"
import UsuarioDatasourceType, { LoginUsuarioDatasourceType } from "../types/UsuarioDatasourceType"

const UsuarioDatasource = () : UsuarioDatasourceType => {
    const login = async (usuario : UsuarioType) : Promise<LoginUsuarioDatasourceType> => {
        const response = await fetch("http://localhost:8000/proyectos/login-json", {
            method : "post",
            body : JSON.stringify({
                username : usuario.username,
                password : usuario.password
            })
        })
        const data = await response.json()

        if (data.msg == "") {
            return {
                usuario : null,
                msg : ""
            }
        }else {
            return {
                usuario : null,
                msg : data.msg
            }
        }
    }
    return {
        login
    }
}

export default UsuarioDatasource