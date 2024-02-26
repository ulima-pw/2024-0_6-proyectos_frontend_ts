import { useState } from "react"

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
        const dataUsername = {
            username : username,
            password : password
        }

        const response = await fetch("http://localhost:8000/proyectos/login-json", {
            method : "post",
            body : JSON.stringify(dataUsername)
        })
        const data = await response.json()

        if (data.msg === "") {
            // Login correcto
            // Almacenando en localStorage
            sessionStorage.setItem("USERNAME", username == null ? "" : username)

            /*navigate("/main", {
                state : {
                    username : username
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