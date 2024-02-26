import { Container } from "@mui/material"
import { useState } from "react"
import FormularioLogin from "./components/FormularioLogin"

const LoginPage = () => {
    const [username, setUsername] = useState<string | null>(null)
    const [password, setPassword] = useState<string>("")
    const [loginIncorrecto, setLoginIncorrecto] = useState<boolean>(false)

    const usernameOnChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value)
    }

    const passwordOnChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const loginOnClick = () => {
        console.log("Debera comunicarse con el backend")
    }

    return <Container maxWidth="sm">
        <FormularioLogin 
            username={ username }
            password={ password }
            loginIncorrecto={ loginIncorrecto }
            usernameOnChangeHandler={ usernameOnChangeHandler }
            passwordOnChangeHandler={ passwordOnChangeHandler }
            loginOnClick={ loginOnClick } />
    </Container>
}

export default LoginPage