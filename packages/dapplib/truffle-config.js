require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name riot stereo purity gesture slice forward shine'; 
let testAccounts = [
"0x152d393328720c57c9823ccb0240efdf627bd274ca10b657838214b15adc7664",
"0xce3183541fb9bae8a827652df6dc07ef9467815f64d71f9a11fc6fc9bb85d066",
"0x078340fc21a0ff85d1e135de2de48919084d169d2c5e287de46580c879e2edd2",
"0x16a293f8881a5c522122d79d6c0c7b7524df8cf202e9313cb4c576ec552ebf7b",
"0xb470d9951cb3579ebd1dc6e96131ec87fe5f9b1a2cee518f9c0c4d88253b0d32",
"0x1207f6d9c03cd63bdd2b07468888c7a273a67bf7a7691037c619414fa4aeae65",
"0xf71e5973c1a711498e817c10dd8e6c3f0c0ab80e4d8b82bb252071fa7b2e2e25",
"0x8d98767afdd89e485dbaf98a082a25269cdc68e4b1e3d93b0ae5c1b28c0a5463",
"0x781548d8ca7fdfe8e1b48529a7cd6afbb0832c1e6136f297249d4b61564533ca",
"0x1c9fbb1358b17d026b84a5211af6912d561d64f9b6db43612a3bbc3d0519c0e9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


