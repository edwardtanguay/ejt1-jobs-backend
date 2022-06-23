import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());

const port = process.env.PORT;

app.get('/jobs', (req, res) => {
	res.send([
		{
			name: "job 1"
		},
		{
			name: "job 2"
		}
	]);
});

app.get('*', function(req, res){
  res.status(404).send('<h1>404</h1>');
});

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
})