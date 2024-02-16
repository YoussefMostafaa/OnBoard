import express from 'express';
import  {CreateUserUseCase}  from '../application/users/createuser/create-user.usecase.ts';
import  {DeleteUserUseCase}  from '../application/users/deleteuser/delete-user.usecase.ts';
import  {LoginUserUseCase}  from '../application/users/loginuser/login-user.usecase.ts';
 import {LogoutUserUseCase} from '../application/users/logoutuser/logout-user.usecase.ts';
import cookieParser from 'cookie-parser';
import { UserRepository } from '../data/UserRepository.ts';
const router = express.Router();
router.use(cookieParser()); 

router.post('/createuser', (req, res) => {
    const usecase = new CreateUserUseCase(UserRepository);
    const user = usecase.execute(req.body);
    res.json(user);
});

router.delete('/deleteuser', (req, res) => {
    const usecase = new DeleteUserUseCase(UserRepository);
    const user = usecase.execute(req.body);
    res.json(user);
});

router.post('/login', (req, res) => {
    const usecase = new LoginUserUseCase(UserRepository);
    const user = usecase.execute(req.body);
    res.json(user);
});

router.post('/logout', (req, res) => {
    const usecase = new LogoutUserUseCase(UserRepository);
    const user = usecase.execute(req.body);
    res.json(user);
});





export default router;
