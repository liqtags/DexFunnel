# getNewPairsByCriteria

This endpoint retrieves new pairs based on specified criteria.

`POST /api/newpairsbycriteria`

## Request Payload
```json
{
    "chainIds": [
        1399811149,
        1,
        56,
        42161,
        81457,
        8453
    ],
    "poolCreationBlockTimestamp": 1718458270,
    "filters": {
        "Mint Auth Disabled": false,
        "Freeze Auth Disabled": false,
        "LP Burned": false,
        "Top 10 Holders": false,
        "With at least 1 social": false,
        "Liquidity": {
            "dollar": true
        },
        "Volume": {
            "dollar": true
        },
        "Market Cap": {
            "dollar": true
        },
        "Txns": {},
        "Buys": {},
        "Sells": {},
        "pumpFunEnabled": true
    }
}
```

- **chainIds** - List of blockchain network identifiers.
- **poolCreationBlockTimestamp** - Timestamp indicating when the pool was created.
- **filters** - Criteria for filtering and analyzing pools or tokens.
  - **Mint Auth Disabled** - Whether minting authorization is disabled.
  - **Freeze Auth Disabled** - Whether freezing authorization is disabled.
  - **LP Burned** - Whether liquidity pool tokens are burned.
  - **Top 10 Holders** - Information about the top 10 holders.
  - **With at least 1 social** - Whether there is at least one social media presence.
  - **Liquidity** - Whether liquidity is considered in dollar terms.
  - **Volume** - Whether volume is considered in dollar terms.
  - **Market Cap** - Whether market cap is considered in dollar terms.
  - **Txns** - Transaction filters.
  - **Buys** - Buy transaction filters.
  - **Sells** - Sell transaction filters.
  - **pumpFunEnabled** - Whether the pump function is enabled.

## API Response Example
```json
[
    {
        "id": "BLsv62XgrQAc7n8r1WvMgVSCqf9B6LrT15Trv7mupump_1399811149",
        "chainId": 1399811149,
        "address": "BLsv62XgrQAc7n8r1WvMgVSCqf9B6LrT15Trv7mupump",
        "symbol": "SAPPL",
        "name": "SOLAPPLE",
        "holders": "2",
        "suspectedBaseToken": "BLsv62XgrQAc7n8r1WvMgVSCqf9B6LrT15Trv7mupump",
        "buys": 3,
        "sells": 0,
        "totalTxs": 3,
        "buyVol": "549.9474049683197",
        "sellVol": "0",
        "totalVol": "549.9474049683197",
        "price": "0.00000003520140492014",
        "liquidityETH": "62.00000000000267",
        "creationTimestamp": 1718459174,
        "buyTax": null,
        "sellTax": null,
        "riskStatus": "SAFE",
        "riskAnalysis": {
            "isMutable": false,
            "ownerBalance": "0",
            "mintAuthority": null,
            "freezeAuthority": null,
            "updateAuthority": "TSLvdd1pWpHVjahSpsvCXUbgwsL3JAcvokwaKt1eokM"
        },
        "poolCreationBlockTimestamp": 1718459174,
        "initialBaseLiquidity": "1073000000",
        "initialQuoteLiquidity": "30",
        "initialLiquidityETH": "60",
        "marketCap": "29.85399192296",
        "links": {},
        "poolOpenTime": null,
        "protocol": "PUMP",
        "liquidityPoolBurnPercentage": "100",
        "liquidityPoolAddresses": [
            "GKRkwMijQT5Vzp4ESLT8RBJBLRwqEUNaThVuLatHsmrD"
        ],
        "totalSupply": "1000000000000000",
        "syncedAt": "2024-06-15T13:46:19.858Z",
        "liquidityUSD": "8882.802630554674",
        "marketCapUSD": "4277.211580416381",
        "socialsCount": 0,
        "top10HoldersSupplyPerc": "3.4612903225806",
        "origin": "PUMP",
        "bondingCurveProgress": 5,
        "isDevNew": null,
        "isDevRug": null,
        "isRenownedDev": null,
        "devHoldingSupplyPerc": null,
        "pumpReplyCount": null,
        "lastPumpReplyTimestamp": null,
        "auditResults": [
            true,
            true,
            true,
            true
        ]
    }
]
```

## Response Object Properties

- **id**: Unique identifier for the pair, combining the address and chainId
- **chainId**: The blockchain chain ID associated with the pair
- **address**: Address of the pair contract
- **symbol**: Symbol of the token pair
- **name**: Name of the token pair
- **holders**: Number of holders of the token pair
- **suspectedBaseToken**: Address of the suspected base token
- **buys**: Number of buy transactions
- **sells**: Number of sell transactions
- **totalTxs**: Total number of transactions
- **buyVol**: Volume of buy transactions
- **sellVol**: Volume of sell transactions
- **totalVol**: Total volume of transactions
- **price**: Price of the token pair
- **liquidityETH**: Liquidity in ETH
- **creationTimestamp**: Timestamp of pair creation
- **buyTax**: Tax on buy transactions (nullable)
- **sellTax**: Tax on sell transactions (nullable)
- **riskStatus**: Risk status of the pair
- **riskAnalysis**:
- **poolCreationBlockTimestamp**: Timestamp of pool creation
- **initialBaseLiquidity**: Initial base liquidity
- **initialQuoteLiquidity**: Initial quote liquidity.
- **initialLiquidityETH**: Initial liquidity in ETH.
- **marketCap**: Market capitalization.
- **links**: Links associated with the pair (empty object).
- **poolOpenTime**: Pool opening time (nullable).
- **protocol**: Protocol name (PUMP in this case).
- **liquidityPoolBurnPercentage**: Liquidity pool burn percentage.
- **liquidityPoolAddresses**: Addresses of liquidity pools.
- **totalSupply**: Total supply of the pair.
- **syncedAt**: Timestamp when data was synced.
- **liquidityUSD**: Liquidity in USD.
- **marketCapUSD**: Market capitalization in USD.
- **socialsCount**: Number of socials associated.
- **top10HoldersSupplyPerc**: Percentage of supply held by top 10 holders.
- **origin**: Origin of the pair (PUMP in this case).
- **bondingCurveProgress**: Progress of the bonding curve.
- **isDevNew**: Whether the developer is new (nullable).
- **isDevRug**: Whether the developer is a rug puller (nullable).
- **isRenownedDev**: Whether the developer is renowned (nullable).
- **devHoldingSupplyPerc**: Percentage of supply held by developer (nullable).
- **pumpReplyCount**: Pump reply count (nullable).
- **lastPumpReplyTimestamp**: Timestamp of last pump reply (nullable).
- **auditResults**: Results of audits (array of boolean values).