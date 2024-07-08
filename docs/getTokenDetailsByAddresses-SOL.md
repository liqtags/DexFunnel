## getTokenDetailsByAddresses SOL

The `getTokenDetailsByAddresses` endpoint resolves detailed information about specific tokens based on their addresses within a specified blockchain.

### Request Payload

```json
{
    "addresses": [
        "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump"
    ],
    "chainId": 1399811149
}
```

- **addresses**: An array of token addresses for which detailed information is requested.
- **chainId**: The identifier for the blockchain chain.

### API Response

```json
{
    "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump": {
        "id": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump_1399811149",
        "chainId": 1399811149,
        "address": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump",
        "decimals": 6,
        "name": "Persis",
        "symbol": "PESIS",
        "syncedAt": "2024-06-15T13:34:05.681Z",
        "description": null,
        "isVerifiedSourceCode": null,
        "goplusStats": null,
        "ownerAddress": null,
        "totalSupply": "1000000000000000",
        "logo": "https://cf-ipfs.com/ipfs/QmRGbNGVwq2efHtcyHNVeDhDXabRfTkLCSbPVbfDSm3DY5",
        "website": null,
        "deployerAddress": "6vpY7Piwu7heJ33FCSLntvu7ptULwpXihvEdFEwSB3df",
        "creationBlockNumber": 271999099,
        "creationBlockTimestamp": 1718458419,
        "holdersCount": "6",
        "version": "1",
        "liquidityPools": {
            "D7DFozXtFHMrKbf2xUb2QvcXuTXrx5a2nU37xhDTxDfU": {
                "chainId": 1399811149,
                "pairId": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump_So11111111111111111111111111111111111111112",
                "poolAddress": "D7DFozXtFHMrKbf2xUb2QvcXuTXrx5a2nU37xhDTxDfU",
                "token0Address": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump",
                "token1Address": "So11111111111111111111111111111111111111112",
                "token0Decimals": 6,
                "token1Decimals": 9,
                "protocol": "PUMP",
                "syncedAt": "2024-06-15T12:00:00.000Z",
                "creationBlockNumber": 271999099,
                "creationBlockTimestamp": 1718458419,
                "dex": null,
                "protocolData": {
                    "id": "D7DFozXtFHMrKbf2xUb2QvcXuTXrx5a2nU37xhDTxDfU",
                    "mint": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump",
                    "global": "4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf",
                    "lpInfo": {
                        "complete": false,
                        "realSolReserves": "578865063",
                        "tokenTotalSupply": "6966180631402821399",
                        "realTokenReserves": "772787859339725",
                        "virtualSolReserves": "30578865063",
                        "virtualTokenReserves": "1052687859339725"
                    },
                    "price0": "0.00000002904836869894",
                    "price1": "34425341.07040691375732421875",
                    "baseMint": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump",
                    "reserve0": "1052687859339725",
                    "reserve1": "30578865063",
                    "quoteMint": "So11111111111111111111111111111111111111112",
                    "baseDecimal": 6,
                    "bondingCurve": "D7DFozXtFHMrKbf2xUb2QvcXuTXrx5a2nU37xhDTxDfU",
                    "feeRecipient": "CebN5WGQ4jvEPvsVU4EoHEpgzq1VV7AbicfhtW4xC9iM",
                    "quoteDecimal": 9,
                    "token0Address": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump",
                    "token1Address": "So11111111111111111111111111111111111111112",
                    "associatedBondingCurve": "mh9Fr7ReVJSqV8h4vSmiMZrGFkn8imAKh6DQfEWQtW6"
                },
                "version": "1",
                "suspectedBaseToken": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump",
                "factoryAddress": "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P",
                "initialReserve0": "1073000000000000",
                "initialReserve1": "30000000000"
            }
        },
        "riskAnalysis": {
            "isMutable": false,
            "ownerBalance": "0",
            "mintAuthority": null,
            "freezeAuthority": null,
            "updateAuthority": "TSLvdd1pWpHVjahSpsvCXUbgwsL3JAcvokwaKt1eokM"
        },
        "limits": {},
        "searchGraphData": null,
        "riskStatus": "SAFE",
        "links": {
            "twitter": "https://x.com/Soleyessol",
            "website": "https://www.persis.today/",
            "telegram": "https://t.me/+p_AXoBS0w2Q2N2Nl"
        },
        "top10HoldersSupply": "30017094994293",
        "origin": "PUMP",
        "image": "https://token-media.defined.fi/1399811149_EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump_small.png"
    }
}
```

### Response Details

- **id**: Unique identifier combining token address and chain ID.
- **chainId**: The identifier for the blockchain chain.
- **address**: Token contract address.
- **decimals**: Number of decimal places the token uses.
- **name**: Token name.
- **symbol**: Token symbol.
- **syncedAt**: Timestamp when the data was last synchronized.
- **description**: Description of the token.
- **isVerifiedSourceCode**: Indicates if the token's source code is verified.
- **goplusStats**: Additional statistical data (if available).
- **ownerAddress**: Address of the token owner (if available).
- **totalSupply**: Total supply of the token.
- **logo**: URL to the token's logo image.
- **website**: URL to the token's official website.
- **deployerAddress**: Address of the token deployer.
- **creationBlockNumber**: Block number when the token was created.
- **creationBlockTimestamp**: Timestamp when the token was created.
- **holdersCount**: Number of unique token holders.
- **version**: Token version.
- **liquidityPools**: Information about associated liquidity pools.
- **riskAnalysis**: Security and risk analysis details.
- **limits**: Limitations or restrictions related to the token (if any).
- **searchGraphData**: Graph-based data for searching (if applicable).
- **riskStatus**: Current risk status of the token.
- **links**: Links to relevant social media and website.
- **top10HoldersSupply**: Total token supply held by the top 10 holders.
- **origin**: Token origin or protocol.
- **image**: URL to a larger image of the token logo.