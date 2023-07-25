import * as yup from "yup";
import { Schema } from "yup";
import { IAddressPatch } from "../interfaces/users.type";

const addressPatchSchema: Schema<IAddressPatch> = yup.object().shape({
  cep: yup.string(),
  state: yup.string(),
  city: yup.string(),
  number: yup.string(),
  road: yup.string(),
  complement: yup.string(),
});

export default addressPatchSchema;
