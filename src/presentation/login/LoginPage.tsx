import { Container } from "@mui/material"
import FormularioLogin from "./components/FormularioLogin"
import useLoginViewModel from "../../viewmodels/LoginViewModel"

const LoginPage = () => {
    const loginViewModel = useLoginViewModel()

    return <Container maxWidth="sm">
        <FormularioLogin 
            username={ loginViewModel.username }
            password={ loginViewModel.password }
            loginIncorrecto={ loginViewModel.loginIncorrecto }
            usernameOnChangeHandler={ loginViewModel.usernameOnChangeHandler }
            passwordOnChangeHandler={ loginViewModel.passwordOnChangeHandler }
            loginOnClick={ loginViewModel.loginOnClick } />
    </Container>
}

export default LoginPage