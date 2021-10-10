const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal'); // compile the contract 

    // deploy the contract and wait 
    const waveContract = await waveContractFactory.deploy(); // fetch a local Eth blockchain
    await waveContract.deployed();

    // Friendly log
    console.log("Contract deployed to:", waveContract.address);
};


// Run main() with error handling 
const runner = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
runner();