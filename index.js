const express = require('express');
const routes = require('./src/web/routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});