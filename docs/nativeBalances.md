# nativeBalances

This endpoint allows retrieving native token balances for specified wallet addresses across multiple blockchain networks.

## Request Payload
```json
{
    "walletAddresses": [
        "0xa6715eafe5d215b82cb9e90a9d6c8970a7c90033"
    ],
    "chainIds": [
        1,
        56,
        42161,
        81457,
        8453
    ]
}
```

## API Response
```json
{
    "walletBalances": [],
    "tokensMetadata": {},
    "nativeBalances": {
        "0xa6715eafe5d215b82cb9e90a9d6c8970a7c90033": {
            "1": "0",
            "56": "0",
            "8453": "0",
            "42161": "0",
            "81457": "0"
        }
    }
}
```

## Explanation
- **walletBalances**: An empty array indicating potential future use for listing token balances.
- **tokensMetadata**: An empty object for potential future metadata related to tokens.
- **nativeBalances**: Provides balances of native tokens for the specified wallet address (`0xa6715eafe5d215b82cb9e90a9d6c8970a7c90033`) across different blockchain networks identified by chain IDs (`1`, `56`, `42161`, `81457`, `8453`). Each chain ID maps to a balance of `"0"` native tokens for the specified wallet address.