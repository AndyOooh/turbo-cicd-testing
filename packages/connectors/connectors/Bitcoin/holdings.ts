import axios from 'axios';
import { Holding } from '../../../modules/types';
import { parseHolding } from './parser';

export const fetchHoldings = async (address: string): Promise<Holding> => {
  const res: any = await axios.get(
    `https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`
  );

  const parsedRes = parseHolding(res.data);

  return parsedRes;
};

/*TEST  */
fetchHoldings('bc1qp64y4ssjzhe5x7wsqnjfhnr9n55zt059ry0msa');
