# Projects API
Crypto Projects API 

## Endpoints 

* Project by category: `GET /api/projects/category/{category}`
* Category lists: `GET /api/projects/category/{category}`
* Projects by ecosystem : `GET /api/projects/ecosystem/{ecosystem}`
* Ecosystem list: `GET /api/projects/ecosystem/list`
* Projects by tag: `GET /api/projects/tag/{tag}`
* Tags list: `GET /api/projects/tag/list`
* Projects by fund: `GET /api/projects/fund/{fund}`

```javascript
[
    "experts",
    "startups",
    "asset-management",
    "infrastructure",
    "dapps",
]
```

## Projects by ecosystem

* Projects by ecosystem : `GET /api/projects/ecosystem/{ecosystem}`
* Ecosystem list : `GET /api/projects/ecosystem/list`

```javascript
// example of ecosystem (There are many more ask the telegram bot, more call for full list when authorized)
[
  "blast",
  "ethereum",
  "bnb-chain",
  "solana",
  "avalanche",
]
```

## Project Tags

* Projects by tag : `GET /api/projects/tag/{tag}`
* Tags list : `GET /api/projects/tag/list`

```javascript
// example of tag (There are many more ask the telegram bot, more call for full list when authorized)
[
  "mining",
  "validators",
  "governance",
  "polkadot",
  "evm",
]
```

