# dapps API
General dapps Endpoints

* Get dApps list: `GET /dapps`
* Get dApp by ID: `GET /dapps/{dappId}`
* Get dApp history for a metric: `GET /dapps/{dappId}/history/{metric}`
* Get aggregated dApps metrics: `GET /dapps/aggregated/metrics`
* Get dApps categories: `GET /dapps/categories`
* Get dApps chains: `GET /dapps/chains`
* Search dApps: `GET /dapps/search`
* Get top dApps by a metric: `GET /dapps/top/{metric}`
* Get token chains: `GET /tokens/chains`
* Get token historical price: `GET /tokens/historical-price/{chain}/{address}`
* Get token info: `GET /tokens/info/{chain}/{address}`
* Get token metrics: `GET /tokens/metrics/{chain}/{address}`
* Get token price: `GET /tokens/price/{chain}/{address}`
* Get NFT collections: `GET /nfts/collections`
* Get NFT collection by ID: `GET /nfts/collections/{collectionId}`
* Get NFT collections chains: `GET /nfts/collections/chains`
* Get NFT marketplaces: `GET /nfts/marketplaces`
* Get NFT marketplaces chains: `GET /nfts/marketplaces/chains`
* Get NFT metadata: `GET /nfts/metadata/{chain}/{address}/{nftId}`
* Get NFT metadata chains: `GET /nfts/metadata/chains`
* Get NFT value estimator for collection: `GET /nfts/value-estimator/{collectionId}`
* Get NFT value estimator for specific NFT: `GET /nfts/value-estimator/{collectionId}/{nftId}`
* Get NFT value estimator chains: `GET /nfts/value-estimator/chains`
* Get NFT value estimator for collections: `GET /nfts/value-estimator/collections`
* Get DeFi chains: `GET /defi/chains`
* Get DeFi dApps list: `GET /defi/dapps`
* Get DeFi dApp by ID: `GET /defi/dapps/{dappId}`