export interface LoginInterface {
    email?: string;
    senha? :string;
}

export interface User {
    name: string;
    email: string;
    password: string;
    profile: string;
    sector: string;
}

export interface StateUser {
    id: string | undefined;
}
