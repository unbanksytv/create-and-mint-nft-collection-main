// All values needs to be in single quotes
const ACCOUNT_DETAILS = {
  auth: 'YOUR_NFTPORT_API_KEY_HERE', // Set your APIKey here that the NFTPort team will provide. Ex. orm1or1-efe1-112a-cccd-kqwfkfmk
  contract_address: 'YOUR_CONTRACT_ADDRESS_HERE', // Set your contract address here, not your transaction hash. After creating a contract on NFTPort, retrieve the contract address via the APIs. Ex. 0xfe81cm1l28b21753ebe117c84als2d6588e150ff
  mint_to_address: 'YOUR_WALLET_ADDRESS_HERE', // Set your wallet address here that will be the owner of the minted NFTs. Ex. 0x5cE5D823f4bD8Ec610293fBa65832B479152C7E1
  chain: 'CHAIN_TO_MINT_TO', // Set the chain where the NFTs will be minted to here. At the time of writing, "polygon" and "rinkeby" are possible values.
  max_rate_limit: '2', // Update your ratelimit linked to your APIKey / account from NFTPort. Ex. '1'
  numberOfRetries: '2', // Update your API retry count here so that your NFTPort APIs can attempt a retry if unsuccessful at first.  Ex. '3'
  timeout: '1000', // Milliseconds. Set the timeout for API errors. If there is an error, it will wait then try again. 5000 = 5 seconds.
  mint_range: ['1','2'], // Set your min and max values in here and all NFT editions in this range will be minted and these values are inclusive. Ex. '5','10' will mint NFTs 5, 6, 7, 8, 9 and 10.
  mint_item: '1', // Set your NFT edition number in here and this specific NFT will be minted. Ex. '3'
  uploadGenericMeta: false, // When this value is set to false, then the build/json directory's _metadata.json file will be used when uploadMetas.js is called. When this value is set to true, then the build/genericJSON directory's _metadata.json file will be used when uploadMetas.js is called.
  batch_mint_size: '50', // Set the number of NFTs that are minted per batch_mint. Maximum is 50 NFTs per batch_mint.
  batch_mint_nft_amount: '1', // Set the number of times that each NFT will be minted. For example, if set to 5, then each NFT edition can be sold 5 times.
  salesInterval: '900000', // Set the interval that will be used to check for sales on your contract and then reveal the NFT. 900000 = 15 minutes.
  walletMintList: [
    {
      "wallet_address": "WALLET_ADDRESS_ONE",
      "nft_count": "20"
    },
    {
      "wallet_address": "WALLET_ADDRESS_TWO_HERE",
      "nft_count": "3"
    }
  ] // Set your wallet list that consists of multiple wallets along with how many NFTs should be minted to each wallet address. E.x [ {"wallet_address": "WALLET_ADDRESS_ONE", "nft_count": "20"}, {"wallet_address": "WALLET_ADDRESS_TWO", "nft_count": "3"}, {"wallet_address": "WALLET_ADDRESS_THREE", "nft_count": "39"}]
};

module.exports = {
  ACCOUNT_DETAILS
};
