interface LoginInterface {
    email?: string;
    senha?: string;
}

interface ParansForgotPassword {
    email?: string;
}

interface ForgotPassword {
    email?: string;
    codePassword?: string;
}

export { LoginInterface, ParansForgotPassword, ForgotPassword };
