import { useEffect, useState } from "react";
import { Error } from "../../../interface/geral/error";

interface IItemCard {
    name: string;
    icon: any;
    screen: string;
}

const itensHome = [
    { name: "Chamada", icon: "list", screen: "Chamada" },
    { name: "Relatorio", icon: "list", screen: "Relatorio" },
    { name: "Escala", icon: "list", screen: "Escala" },
    { name: "Minha Escala", icon: "list", screen: "Minha Escala" },
];
export function useHome() {
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [itens, setItens] = useState<IItemCard[]>([]);

    useEffect(() => {
        listsItens();
    }, []);

    async function listsItens() {
        setLoading(true);

        try {
            setItens(itensHome);

            setError({ statusError: false });
        } catch (err: any) {
            const { data } = err.response;
            setError({ statusError: true, message: "Erro ao carregar itens" });
        } finally {
            setLoading(false);
        }
    }
    return { error, loading, itens, listsItens };
}
