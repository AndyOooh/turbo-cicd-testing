// create a simle express server. dont use createMicroservice or createProxyMiddleware

import express, { Request, Response } from 'express';

import { fetchHoldings } from 'connectors';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ping', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/runConnect', (req: Request, res: Response) => {
  const { address } = req.body;
  const holding = fetchHoldings(address);
  res.send(holding);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
