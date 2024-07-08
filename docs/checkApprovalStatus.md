## checkApprovalStatus

This endpoint checks the approval status of specified wallet addresses for a particular token on a specified blockchain chain.

`POST /api/checkapprovalstatus`

### Request Payload

```json
{
    "chainId": 1399811149,
    "tokenAddress": "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump",
    "walletAddresses": [
        "MJKqp326RZCHnAAbew9MDdui3iCKWco7fsK9sVuZTX2"
    ]
}
```

- **chainId**: The identifier of the blockchain chain where the token resides.
- **tokenAddress**: The address of the token for which approval status is checked.
- **walletAddresses**: An array of wallet addresses for which the approval status is requested.

### API Response

```json
{
    "MJKqp326RZCHnAAbew9MDdui3iCKWco7fsK9sVuZTX2": true
}
```

### Response Details

- The response is a JSON object where each key represents a wallet address from the request payload.
- The value associated with each wallet address key is a boolean (`true` or `false`), indicating whether the specified wallet address has approved the token (`true`) or not (`false`).