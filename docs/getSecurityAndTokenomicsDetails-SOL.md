## getSecurityAndTokenomicsDetails

This endpoint provides security-related information about specified token addresses on a blockchain.

### Request Payload

```json
{
    "addresses": [
        "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump"
    ],
    "chainId": 1399811149
}
```

- **addresses**: An array of token addresses for which security information is requested.
- **chainId**: The identifier for the blockchain chain where the tokens reside.

### API Response

```json
{
    "EN7WZxgqcwAUBxMyki3SpNWAJ9bCxpGaXwB1ArVCpump": {
        "mintAuthority": null,
        "isMutable": false,
        "freezeAuthority": null,
        "updateAuthority": "TSLvdd1pWpHVjahSpsvCXUbgwsL3JAcvokwaKt1eokM",
        "ownerBalance": "0"
    }
}
```

### Response Details

- **mintAuthority**: The authority address that has the permission to mint new tokens (null if not applicable).
- **isMutable**: Indicates whether the token is mutable (can its contract be changed).
- **freezeAuthority**: The authority address that has the permission to freeze token transfers (null if not applicable).
- **updateAuthority**: The authority address that has the permission to update token information.
- **ownerBalance**: The balance of the token owner associated with the specified token address.