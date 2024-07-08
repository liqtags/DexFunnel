# Wallet API
General Wallet Endpoints

## Endpoints 
* Get Wallet History: `GET /api/wallets/{wallet_id}/history`
* Get native transactions by wallet: `GET /api/wallets/{wallet_id}/native-transactions`
* Get decoded transactions by wallet: `GET /api/wallets/{wallet_id}/decoded-transactions`
* Get ERC20 token transfers by wallet: `GET /api/wallets/{wallet_id}/erc20-transfers`
* Get NFT transfers by wallet: `GET /api/wallets/{wallet_id}/nft-transfers`
* Get NFT trades by wallet: `GET /api/wallets/{wallet_id}/nft-trades`
* Wallet Net-worth: `GET /api/wallets/{wallet_id}/net-worth`
* Get Native Balance by Wallet: `GET /api/wallets/{wallet_id}/native-balance`
* Get Native Balance for Multiple Wallets: `GET /api/wallets/native-balances?wallet_ids={wallet_ids}`
* Get NFTs by Wallet: `GET /api/wallets/{wallet_id}/nfts`
* Get NFT Collections by Wallet: `GET /api/wallets/{wallet_id}/nft-collections`
* Get ERC20 Token Balance by Wallet: `GET /api/wallets/{wallet_id}/erc20-token-balance`
* Get ERC20 Token Balances with Prices by Wallet: `GET /api/wallets/{wallet_id}/erc20-token-balances-with-prices`
* Get DeFi Protocols by Wallet: `GET /api/wallets/{wallet_id}/defi-protocols`
* Get DeFi Positions by Wallet: `GET /api/wallets/{wallet_id}/defi-positions`
* Get Detailed DeFi Positions by Wallet and Protocol: `GET /api/wallets/{wallet_id}/defi-positions/{protocol_id}`
* Get Chain Activity by Wallet: `GET /api/wallets/{wallet_id}/chain-activity`
* Get Wallet Stats: `GET /api/wallets/{wallet_id}/stats`
* ENS Lookup by Address: `GET /api/ens/address/{wallet_address}`
* ENS Lookup by Domain: `GET /api/ens/domain/{domain}`
* Unstoppable Lookup by Address: `GET /api/unstoppable/address/{wallet_address}`
* Unstoppable Lookup by Domain: `GET /api/unstoppable/domain/{domain}`