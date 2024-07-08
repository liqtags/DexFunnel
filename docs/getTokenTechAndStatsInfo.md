## getTokenTechAndStatsInfo

This endpoint retrieves detailed technical and statistical information about a specific token identified by its address and chain ID.

`POST /api/tokentechstatsinfo`

### Request Payload

```json
{
    "tokenAddress": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump",
    "chainId": 1399811149
}
```

- **tokenAddress**: The unique address of the token for which technical details are requested.
- **chainId**: The identifier of the blockchain chain where the token resides.

### API Response

```json
{
    "tokenStats": [
        {
            "id": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump_1399811149",
            "chainId": 1399811149,
            "address": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump",
            "syncedAt": "2024-06-15T13:34:05.322Z",
            "devDeployedTokens": [],
            "isDevRug": true,
            "tagsCount": {
                "Trojan": 0
            },
            "sniperWallets": [
                "6vpY7Piwu7heJ33FCSLntvu7ptULwpXihvEdFEwSB3df",
                "6reXkunYqEc1TvtwBtyQN1QCdLyDReKFrN8UZZThnTDm",
                "DCqakuL7gV8JQKw1rUC97d2ykL73FjdzM6H9EuYrNoYp",
                "DCqakuL7gV8JQKw1rUC97d2ykL73FjdzM6H9EuYrNoYp",
                "82md2FWm8sP5NmeTkQ3sRr85ThGUsxibfazThBpDVft4",
                "Ff5AtuycWrkpy6N5NCyk2KBqzLk1cbkYyKZkrrViNvbr",
                "6vpY7Piwu7heJ33FCSLntvu7ptULwpXihvEdFEwSB3df"
            ],
            "insiderWallets": [],
            "topHoldersSupply": {
                "10": "30017094994293",
                "25": "40994720753452",
                "50": "50329235597965",
                "75": "50329235654568"
            },
            "topHoldersSupplyPerc": {
                "10": 3.0017,
                "25": 4.0995,
                "50": 5.0329,
                "75": 5.0329
            },
            "isRenownedDev": null,
            "devHoldingSupply": "56603",
            "devHoldingSupplyPerc": "0",
            "isDevNew": true,
            "pumpReplyCount": null,
            "lastPumpReplyTimestamp": null
        }
    ],
    "devMakerData": {
        "chainId": 1399811149,
        "tokenAddress": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump",
        "address": "6vpY7Piwu7heJ33FCSLntvu7ptULwpXihvEdFEwSB3df",
        "currentlyHoldingAmount": "56603",
        "holderSince": 1718458419,
        "totalBoughtAmount": 60735849056603,
        "totalBoughtETH": 1800000000,
        "totalBuyTransactions": 1,
        "totalSellTransactions": 1,
        "totalSoldAmount": 60735849000000,
        "totalBoughtUSD": 257.88781830641494,
        "totalSoldUSD": 268.2465407157128,
        "totalSoldETH": 1872301594,
        "sent": "60735849000000",
        "received": "60735849056603"
    }
}
```

### Response Details

- **tokenStats**: Array containing technical statistics for the specified token.
  - **id**: Unique identifier combining token address and chain ID.
  - **address**: Token address.
  - **syncedAt**: Timestamp when the data was last synchronized.
  - **devDeployedTokens**: Array of tokens deployed by developers.
  - **isDevRug**: Boolean indicating if the token is associated with developer rug pulls.
  - **tagsCount**: Object with counts of specific tags associated with the token.
  - **sniperWallets**: Array of wallet addresses considered as potential sniper wallets.
  - **insiderWallets**: Array of wallet addresses considered as insider wallets.
  - **topHoldersSupply**: Object with top holder supply percentages at various levels.
  - **topHoldersSupplyPerc**: Object with top holder supply percentages in decimal form.
  - **isRenownedDev**: Boolean indicating if the developer is renowned.
  - **devHoldingSupply**: Amount of token held by the developer.
  - **devHoldingSupplyPerc**: Percentage of total token supply held by the developer.
  - **isDevNew**: Boolean indicating if the developer is new.
  - **pumpReplyCount**: Count of pump replies.
  - **lastPumpReplyTimestamp**: Timestamp of the last pump reply.

- **devMakerData**: Developer-specific data related to the token.
  - **chainId**: The identifier of the blockchain chain where the token resides.
  - **tokenAddress**: The unique address of the token.
  - **address**: The wallet address of the developer.
  - **currentlyHoldingAmount**: The current amount of tokens held by the developer.
  - **holderSince**: Timestamp indicating when the developer started holding tokens.
  - **totalBoughtAmount**: Total amount of tokens bought by the developer.
  - **totalBoughtETH**: Total amount of ETH spent on buying tokens.
  - **totalBuyTransactions**: Total number of buy transactions made by the developer.
  - **totalSellTransactions**: Total number of sell transactions made by the developer.
  - **totalSoldAmount**: Total amount of tokens sold by the developer.
  - **totalBoughtUSD**: Total amount spent in USD on buying tokens.
  - **totalSoldUSD**: Total amount received in USD from selling tokens.
  - **totalSoldETH**: Total amount of ETH received from selling tokens.
  - **sent**: Total amount of tokens sent by the developer.
  - **received**: Total amount of tokens received by the developer.