import { Request, Response } from "express";
import { createUserService, listUserService } from "../services/user.services";

export const createUserController = async (
  request: Request,
  response: Response
) => {
  const newUser = await createUserService(request.body);
  return response.status(201).json(newUser);
};

export const listUserController = async (
  request: Request,
  response: Response
) => {
  const users = await listUserService(request);
  return response.status(200).json(users);
};
