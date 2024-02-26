import { Alert, Box, Button, TextField } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"

interface FormularioLoginProps {
    username : string | null
    password : string
    loginIncorrecto : boolean
    usernameOnChangeHandler : (e : React.ChangeEvent<HTMLInputElement>) => void
    passwordOnChangeHandler : (e : React.ChangeEvent<HTMLInputElement>) => void
    loginOnClick : () => void
}

const FormularioLogin = (props : FormularioLoginProps) => {
    return <Box component="form"
            noValidate
            autoComplete="off"
            style={ { textAlign : "center" }}>
            
            <h1>Login</h1>
            <div>
                <TextField required
                    label="Username"
                    margin="normal"
                    value={ props.username == null ? "" : props.username }
                    onChange={ props.usernameOnChangeHandler }/>
            </div>
            <div>
                <TextField required
                    type="password"
                    label="Password"
                    margin="normal"
                    value={ props.password }
                    onChange={ props.passwordOnChangeHandler }/>
            </div>
            <div>
                <Button variant="contained" 
                    style={ { marginRight : "8px" }}
                    onClick={ props.loginOnClick }>
                    Login
                </Button>
                <Button variant="contained">Registro</Button>
            </div>
            {
                (() => {
                    if ( props.loginIncorrecto ) {
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
}

export default FormularioLogin