import express from 'express';
import cors from 'cors';
import authRoutes, { authenticateToken } from './router/AuthRoutes';

const port: number = 3000;
const app = express();


const corsOptions = {
    origin: 'http://localhost:8081',
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);

app.use('/auth', authRoutes);

app.use(authenticateToken);


app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});

app.use("/", (req, res) => {
    res.status(404).send("Not Found");
});
