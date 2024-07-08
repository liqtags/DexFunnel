## getTokenHolderSummary

This endpoint provides a summary of holders for a specific token, including detailed statistics and transaction history.

`POST /api/holdersummary`

### Request Payload

```json
{
    "tokenAddress": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump",
    "sortBy": "pnlUSD",
    "chainId": 1399811149
}
```

- **tokenAddress**: The address of the token for which holder information is requested.
- **sortBy**: Optional field to specify the sorting criterion (e.g., "pnlUSD" for sorting by profit/loss in USD).
- **chainId**: The identifier for the blockchain chain where the token resides.

### API Response

```json
[
    {
        "chainId": 1399811149,
        "tokenAddress": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump",
        "address": "D7DFozXtFHMrKbf2xUb2QvcXuTXrx5a2nU37xhDTxDfU",
        "currentlyHoldingAmount": "949670764345432",
        "holderSince": 1718458419,
        "totalBoughtAmount": 0,
        "totalBoughtETH": 0,
        "totalBuyTransactions": 0,
        "totalSellTransactions": 0,
        "totalSoldAmount": 0,
        "totalBoughtUSD": 0,
        "totalSoldUSD": 0,
        "totalSoldETH": 0,
        "sent": "53460835597965",
        "received": 1003131599943397,
        "tags": []
    }
]
```

### Response Details

- **chainId**: The blockchain chain ID.
- **tokenAddress**: The address of the token.
- **address**: The wallet address of the holder.
- **currentlyHoldingAmount**: The current amount of tokens held by the address.
- **holderSince**: Timestamp indicating when the holder started holding the token.
- **totalBoughtAmount**: Total amount of tokens bought by the holder.
- **totalBoughtETH**: Total amount spent in ETH for buying tokens.
- **totalBuyTransactions**: Total number of buy transactions.
- **totalSellTransactions**: Total number of sell transactions.
- **totalSoldAmount**: Total amount of tokens sold by the holder.
- **totalBoughtUSD**: Total amount spent in USD for buying tokens.
- **totalSoldUSD**: Total amount received in USD from selling tokens.
- **totalSoldETH**: Total amount received in ETH from selling tokens.
- **sent**: Total amount of tokens sent by the holder.
- **received**: Total amount of tokens received by the holder.
- **tags**: Additional tags associated with the holder.