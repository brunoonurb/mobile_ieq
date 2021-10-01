interface LoginInterface {
    email?: string;
    senha?: string;
}

interface ParansForgotPassword {
    email?: string;
}

interface DadosForgotPassword {
    email?: string;
    codePassword?: string;
    password?: string;
    confirmPassword ?: string;
}

export { LoginInterface, ParansForgotPassword, DadosForgotPassword };
