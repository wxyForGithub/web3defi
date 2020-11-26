const new_abi =[{ "inputs": [ { "internalType": "uint256", "name": "initialSupply", "type": "uint256" }, { "internalType": "string", "name": "tokenName", "type": "string" }, { "internalType": "uint8", "name": "decimalUnits", "type": "uint8" }, { "internalType": "string", "name": "tokenSymbol", "type": "string" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Freeze", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Unfreeze", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "success", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_value", "type": "uint256" } ], "name": "burn", "outputs": [ { "internalType": "bool", "name": "success", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_value", "type": "uint256" } ], "name": "freeze", "outputs": [ { "internalType": "bool", "name": "success", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "freezeOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "success", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "success", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_value", "type": "uint256" } ], "name": "unfreeze", "outputs": [ { "internalType": "bool", "name": "success", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "withdrawEther", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
  const bytecode  = "60806040523480156200001157600080fd5b50604051620010f9380380620010f9833981810160405260808110156200003757600080fd5b8151602083018051604051929492938301929190846401000000008211156200005f57600080fd5b9083019060208201858111156200007557600080fd5b82516401000000008111828201881017156200009057600080fd5b82525081516020918201929091019080838360005b83811015620000bf578181015183820152602001620000a5565b50505050905090810190601f168015620000ed5780820380516001836020036101000a031916815260200191505b506040818152602083015192018051929491939192846401000000008211156200011657600080fd5b9083019060208201858111156200012c57600080fd5b82516401000000008111828201881017156200014757600080fd5b82525081516020918201929091019080838360005b83811015620001765781810151838201526020016200015c565b50505050905090810190601f168015620001a45780820380516001836020036101000a031916815260200191505b5060409081523360009081526005602090815291812060ff8816600a0a8a02908190556003558751620001e09550909350908701915062000227565b508051620001f690600190602084019062000227565b50506002805460ff90921660ff199092169190911790555050600480546001600160a01b03191633179055620002d3565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200025f5760008555620002aa565b82601f106200027a57805160ff1916838001178555620002aa565b82800160010185558215620002aa579182015b82811115620002aa5782518255916020019190600101906200028d565b50620002b8929150620002bc565b5090565b5b80821115620002b85760008155600101620002bd565b610e1680620002e36000396000f3fe6080604052600436106100ec5760003560e01c80636623fc461161008a578063a9059cbb11610059578063a9059cbb14610391578063cd4217c1146103d7578063d7a78db814610417578063dd62ed3e14610441576100f3565b80636623fc46146102d457806370a08231146102fe5780638da5cb5b1461033e57806395d89b411461037c576100f3565b806323b872dd116100c657806323b872dd14610203578063313ce567146102535780633bed33ce1461027e57806342966c68146102aa576100f3565b806306fdde03146100f8578063095ea7b31461018257806318160ddd146101dc576100f3565b366100f357005b600080fd5b34801561010457600080fd5b5061010d610489565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561014757818101518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561018e57600080fd5b506101c8600480360360408110156101a557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610535565b604080519115158252519081900360200190f35b3480156101e857600080fd5b506101f161057e565b60408051918252519081900360200190f35b34801561020f57600080fd5b506101c86004803603606081101561022657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610584565b34801561025f57600080fd5b50610268610785565b6040805160ff9092168252519081900360200190f35b34801561028a57600080fd5b506102a8600480360360208110156102a157600080fd5b503561078e565b005b3480156102b657600080fd5b506101c8600480360360208110156102cd57600080fd5b50356107fd565b3480156102e057600080fd5b506101c8600480360360208110156102f757600080fd5b503561089e565b34801561030a57600080fd5b506101f16004803603602081101561032157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610958565b34801561034a57600080fd5b5061035361096a565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561038857600080fd5b5061010d610986565b34801561039d57600080fd5b506101c8600480360360408110156103b457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356109fe565b3480156103e357600080fd5b506101f1600480360360208110156103fa57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610cc3565b34801561042357600080fd5b506101c86004803603602081101561043a57600080fd5b5035610cd5565b34801561044d57600080fd5b506101f16004803603604081101561046457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610d8f565b6000805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f8101849004840282018401909252818152929183018282801561052d5780601f106105025761010080835404028352916020019161052d565b820191906000526020600020905b81548152906001019060200180831161051057829003601f168201915b505050505081565b600080821161054357600080fd5b5033600090815260076020908152604080832073ffffffffffffffffffffffffffffffffffffffff9590951683529390529190912055600190565b60035481565b600073ffffffffffffffffffffffffffffffffffffffff83166105a657600080fd5b600082116105b357600080fd5b73ffffffffffffffffffffffffffffffffffffffff84166000908152600560205260409020548211156105e557600080fd5b73ffffffffffffffffffffffffffffffffffffffff8316600090815260056020526040902054828101101561061957600080fd5b73ffffffffffffffffffffffffffffffffffffffff8416600090815260076020908152604080832033845290915290205482111561065657600080fd5b73ffffffffffffffffffffffffffffffffffffffff84166000908152600560205260409020546106869083610dac565b73ffffffffffffffffffffffffffffffffffffffff80861660009081526005602052604080822093909355908516815220546106c29083610dbe565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260056020908152604080832094909455918716815260078252828120338252909152205461070d9083610dac565b73ffffffffffffffffffffffffffffffffffffffff808616600081815260076020908152604080832033845282529182902094909455805186815290519287169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35060019392505050565b60025460ff1681565b60045473ffffffffffffffffffffffffffffffffffffffff1633146107b257600080fd5b60045460405173ffffffffffffffffffffffffffffffffffffffff9091169082156108fc029083906000818181858888f193505050501580156107f9573d6000803e3d6000fd5b5050565b3360009081526005602052604081205482111561081957600080fd5b6000821161082657600080fd5b336000908152600560205260409020546108409083610dac565b3360009081526005602052604090205560035461085d9083610dac565b60035560408051838152905133917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a2506001919050565b336000908152600660205260408120548211156108ba57600080fd5b600082116108c757600080fd5b336000908152600660205260409020546108e19083610dac565b336000908152600660209081526040808320939093556005905220546109079083610dbe565b33600081815260056020908152604091829020939093558051858152905191927f2cfce4af01bcb9d6cf6c84ee1b7c491100b8695368264146a94d71e10a63083f92918290030190a2506001919050565b60056020526000908152604090205481565b60045473ffffffffffffffffffffffffffffffffffffffff1681565b60018054604080516020600284861615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f8101849004840282018401909252818152929183018282801561052d5780601f106105025761010080835404028352916020019161052d565b600073ffffffffffffffffffffffffffffffffffffffff8316610a8257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f3078300000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60008211610af157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f76616c7565000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b33600090815260056020526040902054821115610b6f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f6e6f5f656e6f7567680000000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600560205260409020548281011015610c0557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f6f766572666c6f77730000000000000000000000000000000000000000000000604482015290519081900360640190fd5b33600090815260056020526040902054610c1f9083610dac565b336000908152600560205260408082209290925573ffffffffffffffffffffffffffffffffffffffff851681522054610c589083610dbe565b73ffffffffffffffffffffffffffffffffffffffff84166000818152600560209081526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b60066020526000908152604090205481565b33600090815260056020526040812054821115610cf157600080fd5b60008211610cfe57600080fd5b33600090815260056020526040902054610d189083610dac565b33600090815260056020908152604080832093909355600690522054610d3e9083610dbe565b33600081815260066020908152604091829020939093558051858152905191927ff97a274face0b5517365ad396b1fdba6f68bd3135ef603e44272adba3af5a1e092918290030190a2506001919050565b600760209081526000928352604080842090915290825290205481565b600082821115610db857fe5b50900390565b6000828201838110801590610dd35750828110155b610dd957fe5b939250505056fea2646970667358221220d0c3cdfcab2a91731cdc34d7993575c6a8831842c5774ec8f97be1d6f312218164736f6c63430007050033";

  export {new_abi, bytecode}