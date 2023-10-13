// scripts/deploy.js
async function main() {
    // const [deployer] = await ethers.getSigners();

    console.log("Deploying Library...");

    const Library = await ethers.getContractFactory("Library");
    const library = await Library.deploy();


    console.log("Library deployed to:", library.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
