import UsuarioType from "../../domain/entities/Usuario"
import UsuarioDatasource from "../datasources/backend/UsuarioDatasource"

const UsuarioRepository = () => {
    const datasource = UsuarioDatasource()

    const login = (usuario : UsuarioType) => {
        const resp = datasource.login(usuario)
        return resp
    }

    return {
        login
    }
}

export default UsuarioRepository