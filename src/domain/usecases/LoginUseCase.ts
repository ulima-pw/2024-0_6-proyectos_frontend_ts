import UsuarioType from "../entities/Usuario";

interface LoginUseCaseReturnType {
    username : string | null
    msg : string
}

const loginUseCase = async (usuario : UsuarioType) : Promise<LoginUseCaseReturnType> => {
    const response = await fetch("http://localhost:8000/proyectos/login-json", {
        method : "post",
        body : JSON.stringify({
            username : usuario.username,
            password : usuario.password
        })
    })
    const data = await response.json()

    if (data.msg === "") {
        // Login correcto
        // Almacenando en localStorage
        sessionStorage.setItem("USERNAME", usuario.username == null ? "" : usuario.username)

        return {
            username : usuario.username,
            msg : ""
        }
    } else {
        // Login incorrecto
        return {
            msg : "Login incorrecto",
            username : null
        }
    }

}

export default loginUseCase