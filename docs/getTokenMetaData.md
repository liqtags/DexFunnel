# getTokenPairStats

This endpoint retrieves token statistics for a specific base and quote token pair.

## Request Payload
```json
{
    "coinID": 1
}
```

## API Response Example
```json
{TODO}
```

## Response Object Properties

- **rank** - Current rank of the cryptocurrency.
- **key** - Unique key identifier for the cryptocurrency.
- **name** - Name of the cryptocurrency.
- **hasFundingRounds** - Indicates if there have been any funding rounds.
- **symbol** - Ticker symbol of the cryptocurrency.
- **type** - Type of cryptocurrency.
- **rankHistory** - Historical rank data over different time periods (`h24`, `y1`, `d7`, `m6`, `d14`, `MTD`, `YTD`, `q1`, `m3`, `d30`).
- **athMarketCap** - All-time high market capitalization and the date it was reached (`USD`, `dateUSD`).
- **lifeCycle** - Current lifecycle status of the cryptocurrency.
- **unlimitedSupply** - Indicates if the cryptocurrency has an unlimited supply.
- **totalSupply** - Total supply of the cryptocurrency.
- **percentOfCircSupply** - Percentage of the circulating supply.
- **image** - URLs of various image sizes and types (`x60`, `x150`, `icon`, `native`).
- **tokens** - List of associated tokens (empty in this case).
- **category** - Category of the cryptocurrency.
- **categoryId** - ID of the category.
- **tagIds** - List of associated tag IDs.
- **fundIds** - List of associated fund IDs.
- **isTraded** - Indicates if the cryptocurrency is currently traded.
- **marketDataNotAvailable** - Indicates if market data is not available.
- **vesting** - Vesting details (null in this case).
- **hasVesting** - Indicates if there is a vesting schedule.
- **listingDate** - Date when the cryptocurrency was listed.
- **athPrice** - All-time high price in various currencies and the dates (`BTC`, `ETH`, `USD`, `date`, `dateBTC`, `dateETH`).
- **icoData** - Information about the initial coin offering (ICO), including rates, additional links, and allocation chart.
- **icoFullyDilutedMarketCap** - Fully diluted market capitalization during the ICO.
- **fullyDilutedMarketCap** - Current fully diluted market capitalization.
- **availableSupply** - Current available supply of the cryptocurrency.
- **marketCap** - Current market capitalization.
- **volume24h** - 24-hour trading volume.
- **noData** - Indicates if there is no data available.
- **volatility** - Volatility data in various currencies (`USD`, `BTC`).
- **price** - Current price in various currencies (`USD`, `BTC`, `ETH`).
- **histPrices** - Historical prices over different time periods (`14D`, `3Y`, `7D`, `30D`, `24H`, `3M`, `MTD`, `1Y`, `6M`, `YTD`).
- **atlPrice** - All-time low price in various currencies and the dates (`BTC`, `ETH`, `USD`, `dateBTC`, `dateETH`, `dateUSD`).
- **icoStatus** - Status of the ICO.
- **tabs** - List of tabs available for the cryptocurrency (`overview`, `exchanges`, `arbitrage`, `historical-data`, `ico`, `news`, `analytics`, `team`).
- **existsOnTv** - Indicates if the cryptocurrency exists on TradingView.
- **priorityTradingViewExchange** - Priority exchange on TradingView.
- **links** - List of related links (`type`, `value`).
- **crowdsales** - Information about past crowdsales (`id`, `type`, `start`, `end`, `showOnlyMonth`, `tokensForSale`, `status`, `price`, `raise`, `athRoi`, `roi`).
- **historyStartDay** - Start date of the historical data.
- **historyEndDay** - End date of the historical data.
- **description** - Detailed description of the cryptocurrency.
- **shortDescription** - Short description of the cryptocurrency.
- **notification** - Notification details (null in this case).
- **histData** - Historical high and low data over different time periods (`high`, `low`).
- **mineable** - Indicates if the cryptocurrency is mineable.
- **tickersCount** - Number of tickers available.
- **exchangesCount** - Number of exchanges where the cryptocurrency is listed.
- **newsCount** - Number of news articles related to the cryptocurrency.
- **watchlistsCount** - Number of watchlists the cryptocurrency is on.
- **hasTickers** - Indicates if there are tickers available.
- **chartTicker** - Details about the chart ticker (`id`).