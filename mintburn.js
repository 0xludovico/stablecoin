let instance = await Stablecoin.deployed();
let accounts = await web3.eth.getAccounts();

// Acuñar tokens
await instance.mint(accounts[1], web3.utils.toWei('1000', 'ether'), {from: accounts[0]});

// Quemar tokens
await instance.burn(accounts[1], web3.utils.toWei('500', 'ether'), {from: accounts[0]});

// Ver balance
let balance = await instance.balanceOf(accounts[1]);
console.log(balance.toString());
