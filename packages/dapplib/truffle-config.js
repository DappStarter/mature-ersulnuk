require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan razor six huge hockey inhale food gasp'; 
let testAccounts = [
"0x1c23d5d5ed472eb84fae437fb9dfad938c5f5fd85d05d6e89bc04455e734322e",
"0xfc7e4fbfb206497cd71e8c73bcb9e4c5af94810c86ced9f640cdecd103173128",
"0x5126a8f48223cfeee66f230bfb3505b5f7520d0afa0f3ae3a81fcf1124b27141",
"0x2efef4c372c43d0fd780577e4009b7fa05b1e8984138e2577e79bfd66f257340",
"0x2dba0e07e52d0751de6f0390b24e13c164c8741b1009b5cd0c5c7b47ea108074",
"0x84cc6350231d56867846318ea2e674f1772dbf3e6e402363cd42d7b9e292a8f7",
"0x2b7b2174e86ff78c5138cae5fce1947f01f2a5029457efe82dbe7291bd7d58f7",
"0x0336f21ebf909cf134f807523fc362055281cc401c7389cd357a70832905bbb0",
"0xa20d2cce19b4af9e8aca3b1e8e1ad5c95a4673ca6ace99ef0ebf91a26c8f3f54",
"0xeb98910de45965fa00daf3390c611efc325d33a94113e7df0f6d92422221bd6b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
