interface UserLogged {
    name: string;
    email: string;
    profile: string;
    sector: string;
    sectorsActuated: Array<string>;
    sub: string;
}
interface LoginInterface {
    email?: string;
    senha?: string;
}

interface ParansForgotPassword {
    email?: string;
}

interface DadosForgotPassword {
    email?: string;
    code?: string;
    password?: string;
    confirmPassword?: string;
}

export { LoginInterface, ParansForgotPassword, DadosForgotPassword, UserLogged };
