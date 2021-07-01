import * as yup from "yup";
import { portugues } from "../../../../services/validate/global";
yup.setLocale(portugues);

export const userSchema = yup.object().shape({
  name: yup.string().required("Preencha o campo de nome"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Preencha o campo de e-mail"),
  password: yup
    .string()
    .min(5, "A senha deve ter no mínimo 5 caracteres")
    .required("Preencha o campo de senha"),
  phone: yup.string(),
  profile: yup.string().required("Preencha o campo de perfil"),
  sector: yup.string().required("Preencha o campo de setor"),
  sectorsActuated: yup.array().required("Preencha o campo de setor"),
});
