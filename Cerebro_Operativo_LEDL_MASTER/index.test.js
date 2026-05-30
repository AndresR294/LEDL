import {startHydrogenServer} from '../utils';
import Index from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/src/routes/index.server';

describe('index', () => {
  let hydrogen;
  let session;

  beforeAll(async () => {
    hydrogen = await startHydrogenServer();
    hydrogen.watchForUpdates(Index);
  });

  beforeEach(async () => {
    session = await hydrogen.newPage();
  });

  afterAll(async () => {
    await hydrogen.cleanUp();
  });

  it('should be a 200 response', async () => {
    const response = await session.visit('/');
    expect(response.status()).toBe(200);
  }, 60000);
});
