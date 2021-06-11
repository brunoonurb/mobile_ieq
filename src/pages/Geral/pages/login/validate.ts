import * as yup from 'yup';
import { portugues } from "../../../../services/validate/global";
yup.setLocale(portugues);

export const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("Preencha o campo de e-mail"),
    password: yup
      .string()
      .min(5, "A senha deve ter no mínimo 5 caracteres")
      .required("Preencha o campo de senha"),
  });