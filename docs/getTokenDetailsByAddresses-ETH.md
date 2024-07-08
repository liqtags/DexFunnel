## getTokenDetailsByAddressesETH

The `getTokenDetailsByAddressesETH` endpoint retrieves detailed information about Ethereum tokens based on their addresses.

* Token Details: `POST /api/tokendetails`

### Request Payload

```json
{
    "addresses": [
        "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
    ],
    "chainId": 1
}
```

- **addresses**: Array of Ethereum addresses of tokens for which information is requested.
- **chainId**: Ethereum chain ID (e.g., 1 for Ethereum mainnet).

### API Response

```json
{
    "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce": {
        "id": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce_1",
        "chainId": 1,
        "address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
        "decimals": 18,
        "name": "SHIBA INU",
        "symbol": "SHIB",
        "syncedAt": "2024-06-15T17:00:00.000Z",
        "description": null,
        "isVerifiedSourceCode": null,
        "goplusStats": null,
        "ownerAddress": null,
        "totalSupply": "999982354719544828332927831078784",
        "logo": null,
        "website": null,
        "deployerAddress": null,
        "creationBlockNumber": 10569013,
        "creationBlockTimestamp": 1596220363,
        "holdersCount": "1396283",
        "version": "1",
        "liquidityPools": {
            "0xb011ea8096ce5986f3e89b4c2c02f193c82abea8": {
                "chainId": 1,
                "pairId": "0x6b175474e89094c44da98b954eedeac495271d0f_0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
                "poolAddress": "0xb011ea8096ce5986f3e89b4c2c02f193c82abea8",
                "token0Address": "0x6b175474e89094c44da98b954eedeac495271d0f",
                "token1Address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
                "token0Decimals": 18,
                "token1Decimals": 18,
                "protocol": "UNISWAP_V2",
                "syncedAt": "2024-06-11T06:00:00.000Z",
                "creationBlockNumber": null,
                "creationBlockTimestamp": null,
                "dex": null,
                "protocolData": {
                    "price0": "42185.6",
                    "price1": "0.0000237048",
                    "reserve0": "2206520719548169221",
                    "reserve1": "93083348793529842014744",
                    "syncedAt": "2024-06-11T08:25:50.416Z",
                    "poolAddress": "0xb011ea8096ce5986f3e89b4c2c02f193c82abea8",
                    "token0Address": "0x6b175474e89094c44da98b954eedeac495271d0f",
                    "token1Address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
                },
                "version": "1",
                "suspectedBaseToken": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
                "factoryAddress": "0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac",
                "initialReserve0": null,
                "initialReserve1": null
            }
        },
        "riskAnalysis": {
            "buyTax": 0,
            "cantBuy": false,
            "isInDex": true,
            "sellTax": 0,
            "honeypot": false,
            "mintable": false,
            "openSource": true,
            "cantSellAll": false,
            "clogBalance": "246758196641516517616218214695",
            "hiddenOwner": false,
            "isAntiWhale": false,
            "maxBuyToken": "20683269953770792323135824912",
            "transferTax": 0,
            "hasBlacklist": false,
            "hasWhitelist": false,
            "maxSellToken": "20683257796990840471241481922",
            "ownerAddress": null,
            "ownerBalance": "0",
            "proxyContract": false,
            "taxModifiable": false,
            "isExternalCall": false,
            "isSelfDestruct": false,
            "tradingCooldown": false,
            "transferPausable": false,
            "holdersSimulation": {
                "averageSellTax": null,
                "holdersSimulated": 50,
                "canSellHoldersSimulated": 46,
                "cannotSellHoldersSimulated": 4
            },
            "isTradingCooldown": false,
            "canTakeBackOwnership": false,
            "canOwnerChangeBalance": false,
            "isAntiWhaleModifiable": false,
            "isPersonalSlippageModifiable": false
        },
        "limits": {},
        "searchGraphData": null,
        "riskStatus": "SAFE",
        "links": {
            "reddit": "https://www.reddit.com/r/SHIBArmy/",
            "discord": "https://discord.com/invite/shibatoken",
            "twitter": "https://twitter.com/Shibtoken",
            "website": "https://shibatoken.com",
            "telegram": "https://t.me/shibainuthedogecoinkiller"
        },
        "top10HoldersSupply": "605679697980854757872040197457416",
        "origin": null,
        "image": "https://token-media.defined.fi/1_0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce_small.png"
    }
}
```

#### Response Properties:

- **id**: Unique identifier for the token.
- **chainId**: Ethereum chain ID of the token.
- **address**: Ethereum address of the token.
- **decimals**: Number of decimal places used for the token.
- **name**: Name of the token.
- **symbol**: Symbol or ticker of the token.
- **syncedAt**: Timestamp when the token information was last synchronized.
- **description**: Optional description of the token.
- **isVerifiedSourceCode**: Indicates if the token's source code is verified.
- **goplusStats**: Statistics related to the token.
- **ownerAddress**: Ethereum address of the token owner.
- **totalSupply**: Total supply of the token.
- **logo**: URL to the token's logo image.
- **website**: Official website URL of the token.
- **deployerAddress**: Ethereum address of the token deployer.
- **creationBlockNumber**: Ethereum block number when the token was created.
- **creationBlockTimestamp**: Timestamp when the token was created.
- **holdersCount**: Number of unique token holders.
- **version**: Version identifier of the token.
- **liquidityPools**: Information about liquidity pools associated with the token.
- **riskAnalysis**: Risk analysis of the token.
- **limits**: Limits or restrictions related to the token.
- **searchGraphData**: Data related to graph searches.
- **riskStatus**: Assessment of the token's risk status.
- **links**: Various useful links related to the token.
- **top10HoldersSupply**: Supply held by the top 10 token holders.
- **origin**: Origin information of the token.
- **image**: URL to an image representing the token.