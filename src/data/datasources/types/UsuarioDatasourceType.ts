import UsuarioType from "../../../domain/entities/Usuario";

export interface LoginUsuarioDatasourceType {
    usuario : UsuarioType | null
    msg: string
}

interface UsuarioDatasourceType {
    login : (usuario : UsuarioType) => Promise<LoginUsuarioDatasourceType>
}

export default UsuarioDatasourceType