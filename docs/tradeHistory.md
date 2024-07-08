# tradeHistory

The `tradeHistory` endpoint retrieves historical trade data for a specified pair of tokens on a decentralized exchange. It provides insights into token swaps including transaction details, token amounts, prices, and other relevant metadata.

## Request Payload

```json
{
    "baseTokenAddress": "EPksNWdGCMqKCdAkKnTGwvkFZWYFjoGrf369Dgrnpump",
    "quoteTokenAddress": "So11111111111111111111111111111111111111112",
    "fetchTokensMetadata": false,
    "chainId": 1399811149
}
```

### Parameters

- **baseTokenAddress**: Address of the base token in the trade pair.
- **quoteTokenAddress**: Address of the quote token in the trade pair.
- **fetchTokensMetadata**: Flag indicating whether to fetch metadata for tokens (not currently implemented).
- **chainId**: Chain ID indicating the blockchain network.

## API Response

```json
{
    "tradeHistory": [
        {
            "chainId": 1399811149,
            "blockTimestamp": 1718459329,
            "suspectedBaseTokenPrice": "0.00000002867760742104",
            "suspectedBaseTokenPriceUSD": "0.00000410866978447813",
            "poolAddress": "252oTyNTo5AiU2fbHFMizi6Rzaporwm72kSyAAxEWgUq",
            "timestamp": 1718459329,
            "blockNumber": 272001144,
            "tokenIn": "EPksNWdGCMqKCdAkKnTGwvkFZWYFjoGrf369Dgrnpump",
            "tokenOut": "So11111111111111111111111111111111111111112",
            "amountIn": "6666664000000",
            "amountOut": "191183973",
            "amountUSD": "27.391120940068078",
            "transactionHash": "2BBNosnhXUW8KrY29YXVUL5jxW4NMBdRpj7rWUjCCRedFHyuywYe6EpUrhQmkFuGvS8LSPeTFDDCXuWqpyJ7FvXP",
            "logIndex": 2000000,
            "transactionIndex": 0,
            "makerData": {
                "chainId": 1399811149,
                "address": "BUmWvaEF46YHAGmn3ePQLPEvt19sm6k6JRnKHHTiE4Ag",
                "currentlyHoldingAmount": "0",
                "holderSince": 1718459250,
                "totalBoughtAmount": 6666664000000,
                "totalBoughtUSD": 29.79055863008947,
                "totalBuyTransactions": 1,
                "totalSellTransactions": 1,
                "totalSoldAmount": 6666664000000,
                "totalSoldUSD": 27.391120940068078,
                "tokenAddress": "EPksNWdGCMqKCdAkKnTGwvkFZWYFjoGrf369Dgrnpump",
                "totalBoughtETH": 207931518,
                "totalSoldETH": 191183973,
                "sent": 6666664000000,
                "received": 6666664000000,
                "tags": []
            }
        },
        // Additional trade history entries...
    ],
    "tokensMetadata": {}
}
```

### Response Structure

- **tradeHistory**: An array of objects representing individual trade transactions.
  - **chainId**: Chain ID of the blockchain network.
  - **blockTimestamp**: Timestamp of the block in which the trade occurred.
  - **suspectedBaseTokenPrice**: Suspected price of the base token.
  - **suspectedBaseTokenPriceUSD**: Equivalent price in USD of the base token.
  - **poolAddress**: Address of the liquidity pool involved in the trade.
  - **timestamp**: Timestamp of the trade transaction.
  - **blockNumber**: Block number in which the trade occurred.
  - **tokenIn**: Address of the token being traded in.
  - **tokenOut**: Address of the token being traded out.
  - **amountIn**: Amount of tokenIn involved in the trade.
  - **amountOut**: Amount of tokenOut received in the trade.
  - **amountUSD**: Equivalent amount in USD of the trade transaction.
  - **transactionHash**: Hash of the transaction on the blockchain.
  - **logIndex**: Index of the log entry within the block.
  - **transactionIndex**: Index of the transaction within the block.
  - **makerData**: Additional data related to the maker of the trade.
    - *... Maker data fields as per example ...*

- **tokensMetadata**: Metadata object for tokens (currently empty, subject to future implementation).