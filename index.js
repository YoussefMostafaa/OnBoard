import express from 'express';
import routes from './src/web/routes.js'
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});