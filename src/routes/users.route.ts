import { Router } from "express";
import {
  createUserController,
  listUserController,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.get(`/api/users`, listUserController);
userRouter.post(`/api/users`, createUserController);
// userRouter.get(`/api/profile`, ensureAuthMiddleware, retriveUserController);
// userRouter.patch(
//   `/api/users/:id`,
//   ensureAuthMiddleware,
//   validateSchemaMiddleware(patchUserShape),
//   updateUserController
// );
// userRouter.delete(`/api/users/:id`, ensureAuthMiddleware, deleteUserController);

export default userRouter;
