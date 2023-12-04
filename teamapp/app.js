import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import playerRoutes from './routes/playerRoutes.js';

const app = express();

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(userRoutes);

app.use(teamRoutes);

app.use(playerRoutes);

app.listen(3000, () => {
    console.log("Server Online in Port 3000!")
})

//amigo por favor lembre-se de deslogar do Git na maquina "LINUX" do Laboratorio 57, DSK13LB57-JP patrimonio 131708. É muito periogoso logar git em maquina publica viuu, cuidaaa >.<