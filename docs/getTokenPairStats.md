# getTokenPairStats

This endpoint retrieves token statistics for a specific base and quote token pair.

`POST /api/tokenpairstats`

## Request Payload
```json
{
    "baseToken": "0x912ce59144191c1204e64559fe8253a0e49e6548",
    "quoteToken": "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    "chainId": 42161
}
```

## API Response Example
```json
[
    {
        "interval_start": "2024-06-15T13:47:00.000Z",
        "name": "5m",
        "swap_count": 8,
        "buy_count": 6,
        "sell_count": 2,
        "buy_volume": 272.2678420586137,
        "sell_volume": 217.97776045448407,
        "unique_buyers": 6,
        "unique_sellers": 2,
        "first_base_price_usd": 0.00000410890619456835,
        "last_base_price_usd": 0.0000040177303784003,
        "global_unique_buyers": 6,
        "global_unique_sellers": 2,
        "global_unique_makers": 6,
        "poolAddress": "252oTyNTo5AiU2fbHFMizi6Rzaporwm72kSyAAxEWgUq"
    }
]
```

## Response Object Properties

- **interval_start**: Start timestamp of the interval
- **name**: Interval name (e.g., "5m" for 5 minutes)
- **swap_count**: Number of swaps within the interval
- **buy_count**: Number of buy transactions within the interval
- **sell_count**: Number of sell transactions within the interval
- **buy_volume**: Volume of buy transactions within the interval
- **sell_volume**: Volume of sell transactions within the interval
- **unique_buyers**: Number of unique buyers within the interval
- **unique_sellers**: Number of unique sellers within the interval
- **first_base_price_usd**: First recorded price of the base token in USD within the interval
- **last_base_price_usd**: Last recorded price of the base token in USD within the interval
- **global_unique_buyers**: Total number of unique buyers globally
- **global_unique_sellers**: Total number of unique sellers globally
- **global_unique_makers**: Total number of unique makers globally
- **poolAddress**: Address of the liquidity pool associated with the token pair.