import { dep1 } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/js/em-jay-ess.mjs';

async function handler(_req, res) {
  const cjs = await import('/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/js/commonjs-module.js');
  if (dep1 === 'dep1' && cjs?.default?.dep2 === 'dep2') {
    res.end('mixed-modules:also:RANDOMNESS_PLACEHOLDER');
  } else {
    res.end('import failed');
  }
}

export default handler;
