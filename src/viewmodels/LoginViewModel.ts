import { useState } from "react"
import UsuarioType from "../domain/entities/Usuario"
import loginUseCase from "../domain/usecases/LoginUseCase"

const LoginViewModel = () => {
    const [username, setUsername] = useState<string | null>(null)
    const [password, setPassword] = useState<string>("")
    const [loginIncorrecto, setLoginIncorrecto] = useState<boolean>(false)

    const usernameOnChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value)
    }

    const passwordOnChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const loginOnClick = async () => {
        if ( username == null) return

        const usuario : UsuarioType =  {
            username : username,
            password : password
        }
        const resp = await loginUseCase(usuario)

        if (resp.msg == "") {
            // Login correcto
            /*navigate("/main", {
                state : {
                    username : resp.username
                }
            })*/
        } else {
            // Login incorrecto
            setLoginIncorrecto(true)
        }
    }

    return {
        username,
        password,
        loginIncorrecto,
        usernameOnChangeHandler,
        passwordOnChangeHandler,
        loginOnClick
    }
}

export default LoginViewModel