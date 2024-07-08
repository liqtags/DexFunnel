## getSecurityAndTokenomicsDetailsETH

This endpoint provides security-related details and tokenomics information specific

`POST /api/securitywithtokeonmics`

### Request Payload

```json
{
    "addresses": [
        "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
    ],
    "chainId": 1
}
```

- **addresses**: An array of Ethereum token addresses for which security information is requested.
- **chainId**: The identifier for the Ethereum chain (1 for Ethereum mainnet).

### API Response

```json
{
    "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce": {
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
        "maxBuyToken": "20682770865190094956866880896",
        "transferTax": 0,
        "hasBlacklist": false,
        "hasWhitelist": false,
        "maxSellToken": "20682758708703486955616481922",
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
        "isPersonalSlippageModifiable": false,
        "syncedAt": "2024-06-15T17:18:35.576Z"
    }
}
```

### Response Details

- **buyTax**: Tax applied when buying the token.
- **cantBuy**: Indicates if buying the token is restricted.
- **isInDex**: Specifies if the token is part of an index.
- **sellTax**: Tax applied when selling the token.
- **honeypot**: Indicates if the token is identified as a honeypot.
- **mintable**: Specifies if the token is mintable.
- **openSource**: Indicates if the token contract is open-source.
- **cantSellAll**: Indicates if selling all tokens is restricted.
- **clogBalance**: Balance of tokens held by the contract.
- **hiddenOwner**: Indicates if the token has a hidden owner.
- **isAntiWhale**: Specifies if anti-whale measures are implemented.
- **maxBuyToken**: Maximum amount of tokens that can be bought in a single transaction.
- **transferTax**: Tax applied on token transfers.
- **hasBlacklist**: Indicates if there is a blacklist for addresses.
- **hasWhitelist**: Indicates if there is a whitelist for addresses.
- **maxSellToken**: Maximum amount of tokens that can be sold in a single transaction.
- **ownerAddress**: Address of the token owner (null if unknown).
- **ownerBalance**: Balance of tokens owned by the owner.
- **proxyContract**: Specifies if the token uses a proxy contract.
- **taxModifiable**: Indicates if token tax settings can be modified.
- **isExternalCall**: Specifies if the token contract can make external calls.
- **isSelfDestruct**: Specifies if the token contract can self-destruct.
- **tradingCooldown**: Indicates if there is a trading cooldown period.
- **transferPausable**: Indicates if token transfers can be paused.
- **holdersSimulation**: Simulation details regarding token holders.
- **isTradingCooldown**: Specifies if the trading cooldown is active.
- **canTakeBackOwnership**: Indicates if ownership can be reclaimed.
- **canOwnerChangeBalance**: Indicates if the token owner can change the token balance.
- **isAntiWhaleModifiable**: Indicates if anti-whale settings can be modified.
- **isPersonalSlippageModifiable**: Indicates if personal slippage settings can be modified.
- **syncedAt**: Timestamp when the data was last synchronized.