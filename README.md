# DexFunnel

DexFunnel is a API, it can funnel you data as per your needs, I use it for my telegram bot but it can be used for Screener webites and blockchain DD things; see each endpoint linked below and details on the url, endpoint and how to consume this data yourself. 

```Links below link to other pages inside this repo or other repos within my account```

Telegram Bot talks to server and nodes on the same localhost, for your own instances contact me

```javascript
let BASE_URL = 'https://localhost:4200/' // contact for your own node or the prod url
```

## Onchain API Functionality & Docs 
- [getTokenPairStats](docs/getTokenPairStats.md) - retrieves token statistics for a specific base and quote token pair.
- [getNewPairsByCriteria](docs/getNewPairsByCriteria.md) - retrieves new pairs based on specified criteria.
- [getTokenDetailsByAddresses](docs/getTokenDetailsByAddresses-ETH.md) - retrieves detailed information about tokens based on their addresses.
- [getSecurityAndTokenomicsDetails](docs/getSecurityAndTokenomicsDetails-ETH.md) - provides security-related details and tokenomics information.
- [getTokenHolderSummary](docs/getTokenHolderSummary.md) - provides a summary of holders for a specific token, including detailed statistics and transaction history.
- [checkApprovalStatus](docs/checkApprovalStatus.md) - checks the approval status of specified wallet addresses for a particular token on a specified blockchain chain.
- [getTokenTechAndStatsInfo](docs/getTokenTechAndStatsInfo.md) - retrieves detailed technical and statistical information about a specific token identified by its address and chain ID.
- [tradeHistory](docs/tradeHistory.md) - retrieves historical trade data for a specified pair of tokens on a decentralized exchange
- [chart](docs/chart.md) - retrieves chart data for a specified trading pair within a given time range and interval.
- [walletsSummary](docs/walletsSummary.md) - provides a summary of wallet balances and optionally fetches additional metadata
- [nativeBalances](docs/nativeBalances.md) - allows retrieving native token balances for specified wallet addresses across multiple blockchain networks.
- [getTokenMetaData](docs/getTokenMetaData.md) - provide onchain information about a specific cryptocurrency. 

## Data API Funtionality & Docs
- [coinData](docs/coinData.md) - Get coin data from supabase database ```Over 100,000 coins & tokens and counting, updated daily```
- [labels](docs/labels.md) - Address labels API ```Over 1,000,000 labels and counting, updated daily, functionality for custom labels via telegram user account```
- [coinImages](docs/getImages.md) - Crypto images CDN & API ```Over 100,000 images updated daily, in muliple formats```
- [getFunds](docs/getFunds.md) - Get's data about venture capital funds, provide endpoints for weekly & fundrasing reports. ```Over 70,000 Records and updated daily with new funds and VC's!```
- [getEvents](docs/getEvents.md) - Alpha events & new crypto events.
- [getGlossary](docs/getGlossary.md) - API for Crypto glossary and term explanations
- [getProjects](docs/getProjects.md) - API for Crypto dapps, projects & experts  ```Crypto dapps & project data, over 100,000 Records```
- [getUtils](docs/getUtils.md) - Crypto Utils API

## Other repos
- [Crypto Image CDN Repo](https://github.com/liqtags/crypto-images)

## Blockchain API's Funtionality & Docs
- [walletAPI](docs/walletAPI.md) - Wallet Data endpoints & utilities. 
- [pricesAPI](docs/pricesAPI.md) - Onchain Price Data endpoints & NFT prices
- [defiAPI](docs/defiAPI.md) - Defi data endpoints & utilities
- [dappsAPI](docs/dappsAPI.md) - Dapps data endpoints & utilities
- [evmAPI](docs/evmAPI.md) - EVM blockchain endpoints & utilities
- [bitcoinAPI](docs/bitcoinAPI.md) - Bitcoin endpoints & utilities
- [ethereumAPI](docs/ethereumAPI.md) - Ethereum endpoints & utilities
- [solanaAPI](docs/solanaAPI.md) - Solana endpoints & utilities
- [polygonAPI](docs/polygonAPI.md) - Polygon endpoints & utilities
- [nftAPI](docs/nftAPI.md) - NFT endpoints & utilities
- [tokenAPI](docs/tokenAPI.md) - Token data endpoints
- [xrpAPI](docs/xrpAPI.md) - XRP data endpoints

## Usage

Each endpoint documentation provides details about the request payload, example responses, and explanations of the properties in the response objects.

Feel free to explore each endpoint to understand how to integrate and utilize our API effectively.

## Using `apiKey` Parameter

To access certain endpoints or perform specific actions within our API, you need to include an `apiKey` parameter in your request URL. This parameter serves as a security measure to authenticate and authorize your requests.

### Including `apiKey` in Requests

When making API requests that require authentication via API key, append the `apiKey` parameter to your request URL as follows:

```
/endpoint?apiKey=your_actual_api_key_value
```

Replace `your_actual_api_key_value` with the API key you obtained during the signup process.

### Example

For example, if you were to access the `getTokenPairStats` endpoint with an API key:

```
/getTokenPairStats?apiKey=abc123xyz456
```

### Security Considerations

- **Keep it Confidential**: Do not share your API key publicly or expose it in client-side code.
  
- **Rotate Regularly**: Periodically regenerate your API keys to enhance security.

### Rate Limiting

Depending on your API usage plan, rate limits may apply to control the number of requests you can make using your API key within a specific timeframe.

### Troubleshooting

If you encounter issues related to authentication or authorization errors, ensure that:

- The API key is correctly formatted and included in the request URL.
- The API key has the necessary permissions to access the requested endpoint.

# Plans
Free: 
- Price: $0.00 / month
- Monthly calls/actions: 500
- Cost per call: $0.00
- Request per second: 3

Paid Plan 1: 
- Price: $4.99 / month
- Monthly calls/actions: 2,500
- Cost per call: $0.002
- Request per second: 5

Paid Plan 2: 
- Price: $99 / month
- Monthly calls/actions: 50,000
- Cost per call: $0.001
- Request per second: 30

Paid Plan 3: 
- Price: $249 / month
- Monthly calls/actions: 500,000
- Cost per call: $0.00025
- Request per second: 50