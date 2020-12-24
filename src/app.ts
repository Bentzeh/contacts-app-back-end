import express from 'express';

// Create a new express app instance
const app: express.Application = express();

const port = 8080; // default port to listen

// define a route handler for the default home page
app.get('/', (req, res) => {
	res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
	console.log(process.env.NODE_ENV);
	console.log(`server started at http://localhost:${port}`);
});
