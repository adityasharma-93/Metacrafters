
let numNFTs = 0;
function mintNFT(name, description, image) {
  const nft = {
    name: name,
    description: description,
    image: image
  };
  numNFTs++;
  return nft;
}

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

function getTotalSupply() {
  return numNFTs;
}

const nft1 = mintNFT("NFT 1", "Description 1", "image1.jpg");
const nft2 = mintNFT("NFT 2", "Description 2", "image2.jpg");

nfts.push(nft1);
nfts.push(nft2);

listNFTs();

console.log("Total Supply: " + getTotalSupply());
