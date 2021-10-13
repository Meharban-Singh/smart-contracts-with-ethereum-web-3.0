const main = async () => {
    // Contract owner account and a random person account
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal'); // compile the contract 

    // deploy the contract and wait 
    const waveContract = await waveContractFactory.deploy(); // fetch a local Eth blockchain
    await waveContract.deployed();

    // Friendly logs
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);


    // TESTING WAVE COUNTS
    await waveContract.getTotalWaves();
    
    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
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