## chart

This endpoint retrieves chart data for a specified trading pair within a given time range and interval.

### Request Payload

```json
{
    "chainId": 1399811149,
    "base": "EPksNWdGCMqKCdAkKnTGwvkFZWYFjoGrf369Dgrnpump",
    "quote": "So11111111111111111111111111111111111111112",
    "from": 1718458967,
    "to": 1718459467,
    "intervalSecs": 1,
    "poolAddress": "252oTyNTo5AiU2fbHFMizi6Rzaporwm72kSyAAxEWgUq",
    "countBack": 301
}
```

- **chainId**: The identifier for the blockchain chain.
- **base**: The base token's address or symbol for the trading pair.
- **quote**: The quote token's address or symbol for the trading pair.
- **from**: Start timestamp in Unix epoch seconds for the chart data.
- **to**: End timestamp in Unix epoch seconds for the chart data.
- **intervalSecs**: Interval in seconds for each data point on the chart.
- **poolAddress**: The address of the liquidity pool associated with the trading pair.
- **countBack**: The number of data points requested.

### API Response

```json
{
    "t": [
        1718459247000,
        1718459248000,
        1718459250000,
        1718459254000,
        1718459262000,
        1718459263000,
        1718459270000,
        1718459329000
    ],
    "o": [
        0.0000040177303784003,
        0.0000040177303784003,
        0.00000422961584783874,
        0.00000428416074205858,
        0.00000408325816742217,
        0.00000409674246481409,
        0.00000410890619456835,
        0.00000412105290836822
    ],
    "h": [
        0.0000040177303784003,
        0.00000422961584783874,
        0.00000446858558194765,
        0.00000428416074205858,
        0.00000409674246481409,
        0.00000410890619456835,
        0.00000412105290836822,
        0.00000412105290836822
    ],
    "l": [
        0.0000040177303784003,
        0.0000040177303784003,
        0.0000040818468344641,
        0.00000408325816742217,
        0.00000408325816742217,
        0.00000409674246481409,
        0.00000410890619456835,
        0.00000410866978447813
    ],
    "c": [
        0.0000040177303784003,
        0.00000422961584783874,
        0.00000410890619456835,
        0.00000408325816742217,
        0.00000409674246481409,
        0.00000410890619456835,
        0.00000412105290836822,
        0.00000410866978447813
    ],
    "v": [
        12.894390915320745,
        213.77869775477956,
        14.312773916006028,
        0.026355561946874925,
        14.327101160294061,
        1.4421843270628423,
        14.312773916006028,
        54.782241880136155
    ],
    "debugData": {
        "poolAddress": "252oTyNTo5AiU2fbHFMizi6Rzaporwm72kSyAAxEWgUq"
    }
}
```

### Response Details

- **t**: Array of timestamps in milliseconds representing each data point on the chart.
- **o**: Array of opening prices for each data point.
- **h**: Array of highest prices for each data point.
- **l**: Array of lowest prices for each data point.
- **c**: Array of closing prices for each data point.
- **v**: Array of trading volumes for each data point.
- **debugData**: Additional debug information, such as the pool address used in the request.