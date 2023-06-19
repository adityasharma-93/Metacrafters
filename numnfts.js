// Create a variable to hold the number of NFTs
let numNFTs = 0;

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, image) {
  const nft = {
    name: name,
    description: description,
    image: image
  };
  numNFTs++;
  return nft;
}

// Create an array to store the minted NFTs
let nfts = [];

// This function will list all the NFTs' metadata
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    const nft = nfts[i];
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image: " + nft.image);
  }
}

// This function will return the total number of minted NFTs
function getTotalSupply() {
  return numNFTs;
}

// Call the functions
const nft1 = mintNFT("NFT 1", "Description 1", "image1.jpg");
const nft2 = mintNFT("NFT 2", "Description 2", "image2.jpg");

nfts.push(nft1);
nfts.push(nft2);

listNFTs();

console.log("Total Supply: " + getTotalSupply());
