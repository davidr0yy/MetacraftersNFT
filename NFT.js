// Create an array 
let nfts = [];

// Function to mint a new NFT
function mintNFT(name, description, imageUrl) {
    const nft = {
        name: name,
        description: description,
        imageUrl: imageUrl
    };
    nfts.push(nft);
}

// Function to list all NFTs 
function listNFTs() {
    nfts.forEach(nft => {
        console.log(`Name: ${nft.name}, Description: ${nft.description}, Image URL: ${nft.imageUrl}`);
    });
}

// Function to get the total number of NFTs 
function getTotalSupply() {
    console.log(`Total NFTs: ${nfts.length}`);
    return nfts.length;
}

// Displaying NFTs
mintNFT("CryptoPunk", "A unique punk", "Punk.jpg");
mintNFT("CryptoKitties", "A cute looking kitten", "Kitties.jpg");
mintNFT("MoonCat", "A space exploring cat", "Mooncat.jpg");

// Displaying the NFTs and the total supply
listNFTs();
getTotalSupply();
