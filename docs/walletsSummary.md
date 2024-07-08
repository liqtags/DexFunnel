# walletsSummary

This endpoint provides a summary of wallet balances and optionally fetches additional metadata and balances based on the request parameters.

`POST /api/walletsummary`

## Request Payload
```json
{
    "walletAddresses": [
        "0xa6715eafe5d215b82cb9e90a9d6c8970a7c90033",
        "MJKqp326RZCHnAAbew9MDdui3iCKWco7fsK9sVuZTX2"
    ],
    "fetchNativeBalances": false,
    "fetchTokensMetadata": true,
    "fetchWalletBalances": true
}
```

- **walletAddresses**: An array of wallet addresses for which the summary is requested.
- **fetchNativeBalances**: Boolean indicating whether to fetch native token balances (currently set to `false`).
- **fetchTokensMetadata**: Boolean indicating whether to fetch metadata about tokens (currently set to `true`).
- **fetchWalletBalances**: Boolean indicating whether to fetch wallet balances (currently set to `true`).

## API Response
```json
{
    "walletBalances": [],
    "tokensMetadata": {},
    "nativeBalances": {}
}
```

- **walletBalances**: An empty array that may list detailed token balances in future updates.
- **tokensMetadata**: An empty object currently reserved for metadata about tokens.
- **nativeBalances**: An empty object indicating native token balances, which are not fetched when `fetchNativeBalances` is `false`.