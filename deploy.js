const fs = require("fs");
const Web3 = require("web3");
const mnemonic = "duty pause indoor card juice unknown butter clinic picture roast fringe milk"
const truffleURL = "https://rinkeby.infura.io/v3/5de0f941235d4e968310a7ddc02950cb"
const HDWalletProvider = require("truffle-hdwallet-provider");
const provider = new HDWalletProvider(mnemonic, truffleURL)
const web3 = new Web3(provider);
const bytecode = fs.readFileSync('./build/__contract_lottery_sol_Lottery.bin');
const abi = JSON.parse(fs.readFileSync('./build/__contract_lottery_sol_Lottery.abi'));
const deploy = async() => {
    accounts = await web3.eth.getAccounts()
    console.log("Trying to deploy from accounts ", accounts[0]);
    lottery = await 
    new web3.eth.Contract(abi)
        .deploy({ 
            data: '0x'+bytecode, 
            // arguments: ['Hello World'] 
        }).send({
            from: accounts[0], 
            gas:'1000000'
    });
    console.log('contract deployed to',lottery.options.address);
    // const message = await 
    //         greetings.methods.message().call();
    // console.log(message);
    process.exit();             
};
deploy();