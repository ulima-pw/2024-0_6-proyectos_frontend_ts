import { Alert, Box, Button, Container, TextField } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
import { useState } from "react"

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
        <Box component="form"
            noValidate
            autoComplete="off"
            style={ { textAlign : "center" }}>
            
            <h1>Login</h1>
            <div>
                <TextField required
                    label="Username"
                    margin="normal"
                    value={ username == null ? "" : username }
                    onChange={ usernameOnChangeHandler }/>
            </div>
            <div>
                <TextField required
                    type="password"
                    label="Password"
                    margin="normal"
                    value={ password }
                    onChange={ passwordOnChangeHandler }/>
            </div>
            <div>
                <Button variant="contained" 
                    style={ { marginRight : "8px" }}
                    onClick={ loginOnClick }>
                    Login
                </Button>
                <Button variant="contained">Registro</Button>
            </div>
            {
                (() => {
                    if (loginIncorrecto) {
                        return <Alert 
                            icon={<CheckIcon fontSize="inherit" />} 
                            severity="error"
                            sx={ { mt : 2 } }>
                            Error en el login.
                        </Alert>
                    }
                })()
            }
            
        </Box>
    </Container>
}

export default LoginPage