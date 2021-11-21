const data = {

  1: { // Ethereum Mainnet
    network: "Ethereum Mainnet",
    explorer: "https://etherscan.io/token/",
    tokens: [

      {
        symbol: "BAL",
        address: "0xba100000625a3754423978a60c9317c58a424e3d",
        decimals: 18,
        image: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png",
      },

      {
        symbol: "CVX",
        address: "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
        decimals: 18,
        image: "https://etherscan.io/token/images/ConvexFinance_32.png",
      },

      {
        symbol: "OHM",
        address: "0x383518188c0c6d7730d91b2c03a03c837814a899",
        decimals: 9,
        image: "https://etherscan.io/token/images/olympusdao_32.png",
      },

      {
        symbol: "LDO",
        address: "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
        decimals: 18,
        image: "https://etherscan.io/token/images/lido-dao_32.png",
      },

      {
        symbol: "renBTC",
        address: "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
        decimals: 8,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/5777.png",
      },

      { // 2021-06-15 new sOHM contract
        symbol: "sOHM",
        address: "0x04f2694c8fcee23e8fd0dfea1d4f5bb8c352111f",
        decimals: 9,
        image: "https://etherscan.io/token/images/olympusdao_32.png",
      },

      { // Staked ETH at Lido.fi
        symbol: "stETH",
        address: "0xdfe66b14d37c77f4e9b180ceb433d1b164f0281d",
        decimals: 18,
        image: "https://etherscan.io/token/images/stakedeth_32.png",
      },

      {
        symbol: "USDC",
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        decimals: 6,
        image: "https://polygonscan.com/token/images/centre-usdc_32.png",
      },

    ]
  },

  137: { // Polygon Mainnet
    network: "Polygon Mainnet",
    explorer: "https://polygonscan.com/token/",
    chart: "https://polygon.poocoin.app/tokens/",
    tokens: [

      {
        symbol: "ADDY",
        address: "0xc3FdbadC7c795EF1D6Ba111e06fF8F16A20Ea539",
        decimals: 18,
        image: "https://adamant.finance/img/ADDY.png",
      },

      {
        symbol: "BAL",
        address: "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3",
        decimals: 18,
        image: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png",
      },

      {
        symbol: "BCT",
        address: "0x2f800db0fdb5223b3c3f354886d907a671414a7f",
        decimals: 18,
        image: "",
      },

      {
        symbol: "CRV",
        address: "0x172370d5cd63279efa6d502dab29171933a610af",
        decimals: 18,
        image: "https://polygonscan.com/token/images/curvefi-crv_32.png",
      },

      {
        symbol: "KLIMA",
        address: "0x4e78011ce80ee02d2c3e649fb657e45898257815",
        decimals: 9,
        image: "",
      },

      {
        symbol: "polyBUNNY",
        address: "0x4c16f69302ccb511c5fac682c7626b9ef0dc126a",
        decimals: 18,
        image: "https://polygon.pancakebunny.finance/static/media/token-bunny.7d29b279.svg",
      },

      {
        symbol: "QI",
        address: "0x580A84C73811E1839F75d86d75d88cCa0c241fF4",
        decimals: 18,
        image: "https://app.mai.finance/static/media/qitoken-white.22b084e6.png",
      },

      {
        symbol: "renBTC",
        address: "0xdbf31df14b66535af65aac99c32e9ea844e14501",
        decimals: 8,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/5777.png",
      },

      {
        symbol: "sKLIMA",
        address: "0xb0c22d8d350c67420f06f48936654f567c73e8c8",
        decimals: 9,
        image: "",
      },

      {
        symbol: "USDC",
        address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        decimals: 6,
        image: "https://polygonscan.com/token/images/centre-usdc_32.png",
      },

      {
        symbol: "USDT",
        address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        decimals: 6,
        image: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
      },

      {
        symbol: "WBTC",
        address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
        decimals: 18,
        image: "https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png?1548822744",
      },

      {
        symbol: "WETH",
        address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        decimals: 18,
        image: "https://polycat.finance/images/tokens/weth.svg",
      },

      {
        symbol: "WMATIC",
        address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
        decimals: 18,
        image: "https://assets.coingecko.com/coins/images/14073/small/matic.jpg?1614155404",
      },

    ],
  },

  56: { // Binance Smart Chain
    network: "Binance Smart Chain",
    explorer: "https://bscscan.com/token/",
    chart: "https://poocoin.app/tokens/",
    tokens: [

      {
        symbol: "BTCB",
        address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
        decimals: 18,
        image: "https://bscscan.com/token/images/btcb_32.png",
      },

      {
        symbol: "BUNNY",
        address: "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
        decimals: 18,
        image: "https://bscscan.com/token/images/pancakebunny_32.png",
      },

      {
        symbol: "CAKE",
        address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
        decimals: 18,
        image: "https://bscscan.com/token/images/pancake_32.png?=v1",
      },

      {
        symbol: "CHESS",
        address: "0x20de22029ab63cf9a7cf5feb2b737ca1ee4c82a6",
        decimals: 18,
        image: "https://bscscan.com/token/images/tranchess_32.png",
      },

      {
        symbol: "COBRA",
        address: "0x2c449ba613873e7b980faf2b686207d7bd205541",
        decimals: 18,
        image: "data:image/png;base64,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",
      },

      {
        symbol: "GYRO",
        address: "0x1B239ABe619e74232c827FBE5E49a4C072bD869D",
        decimals: 9,
        image: "",
      },

      {
        symbol: "MND",
        address: "0x4c97c901b5147f8c1c7ce3c5cf3eb83b44f244fe",
        decimals: 18,
        image: "https://mndvault.mound.finance/favicon.png",
      },

      {
        symbol: "MUNCH",
        address: "0xC70636a779118e57E1c6fdAfDd1f919Fae912d2f",
        decimals: 9,
        image: "https://assets.coingecko.com/coins/images/14804/small/logo_-_2021-04-16T082627.266.png?1618532828",
      },

      {
        symbol: "QBT",
        address: "0x17B7163cf1Dbd286E262ddc68b553D899B93f526",
        decimals: 18,
        image: "https://qbt.fi/static/media/qubit_logo_yellow.6ea4cfa1.png",
      },

      {
        symbol: "renBTC",
        address: "0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c",
        decimals: 8,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/5777.png",
      },

      {
        symbol: "sGYRO",
        address: "0xDC93Eb0eB1bF2aC6Da14b3ee54a8d7fBb15bB058",
        decimals: 9,
        image: "",
      },

      {
        symbol: "USDC",
        address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        decimals: 18,
        image: "https://bscscan.com/token/images/centre-usdc_28.png",
      },


      {
        symbol: "WBNB",
        address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        decimals: 18,
        image: "https://bscscan.com/token/images/binance_32.png",
      },

      {
        symbol: "WBTC",
        address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        decimals: 8,
        image: "https://bscscan.com/token/images/bitcointoken_32.png",
      },

    ],
  },

  "0x63564c40": { // Harmony Mainnet",
    network: "Harmony Mainnet",
    explorer: "https://explorer.harmony.one/#/address/",
    tokens: [

      {
        symbol: "11INCH",
        address: "0x58f1b044d8308812881a1433d9Bbeff99975e70C",
        decimals: 18,
        image: "https://d1xrz6ki9z98vb.cloudfront.net/venomswap/tokens/11INCH.png",
      },

      {
        symbol: "bscCOBRA",
        address: "0x3aa9470bdf720d7ff3d3fb78231803431970a329",
        decimals: 18,
        image: "https://d1xrz6ki9z98vb.cloudfront.net/venomswap/tokens/bscCOBRA.png",
      },

      {
        symbol: "sWAGMI",
        address: "0xf38593388079f7f5130d605e38abf6090d981ec2",
        decimals: 9,
        image: "",
      },

      {
        symbol: "VIPER",
        address: "0xea589e93ff18b1a1f1e9bac7ef3e86ab62addc79",
        decimals: 18,
        image: "https://assets.coingecko.com/coins/images/15305/small/0c4b902b40f14db918f4500956386414ab7ebcfe.jpeg?1620371961",
      },

      {
        symbol: "WAGMI",
        address: "0x0dc78c79B4eB080eaD5C1d16559225a46b580694",
        decimals: 9,
        image: "",
      },

      {
        symbol: "xVIPER",
        address: "0xE064a68994e9380250CfEE3E8C0e2AC5C0924548",
        decimals: 18,
        image: "https://assets.coingecko.com/coins/images/15305/small/0c4b902b40f14db918f4500956386414ab7ebcfe.jpeg?1620371961",
      },

    ],
  },

  42161: { // Arbitrum
    network: "Arbitrum One",
    explorer: "https://arbiscan.io/token/",
    tokens: [

      {
        symbol: "CRV",
        address: "0x11cdb42b0eb46d95f990bedd4695a6e3fa034978",
        decimals: 18,
        image: "https://polygonscan.com/token/images/curvefi-crv_32.png",
      },

      {
        symbol: "renBTC",
        address: "0xdbf31df14b66535af65aac99c32e9ea844e14501",
        decimals: 18,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/5777.png",
      },

      {
        symbol: "WBTC",
        address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
        decimals: 18,
        image: "https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png?1548822744",
      },

    ],
  },

  250: { // Fantom
    network: "Fantom Opera",
    explorer: "https://ftmscan.com",
    tokens: [

      {
        symbol: "CRV",
        address: "0x1e4f97b9f9f913c46f1632781732927b9019c68b",
        decimals: 18,
        image: "https://polygonscan.com/token/images/curvefi-crv_32.png",
      },

      {
        symbol: "GEIST",
        address: "0xd8321AA83Fb0a4ECd6348D4577431310A6E0814d",
        decimals: 18,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6IzgxODU4ODt9LmNscy0ze2ZpbGw6I2E3ZmY1ODt9LmNscy00e2ZpbGw6I2ZmZjt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeTE9IjY0IiB4Mj0iMTI4IiB5Mj0iNjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzNDQ2NTIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMzMzMzYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNjQiIGN5PSI2NCIgcj0iNjQiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02NCwyLjgyQTYxLjE4LDYxLjE4LDAsMSwxLDIuODIsNjQsNjEuMjQsNjEuMjQsMCwwLDEsNjQsMi44Mk02NCwwYTY0LDY0LDAsMSwwLDY0LDY0QTY0LDY0LDAsMCwwLDY0LDBaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTYuMDksNzIsNDMuOTQsNDQuMWgwYTI4LjM1LDI4LjM1LDAsMCwxLDQzLjQ2LDMuNjZjLjA4LjA4LjE3LjE1LjI1LjI0YTEwLjE4LDEwLjE4LDAsMCwwLDE4LTYuNTMsMTIuNTYsMTIuNTYsMCwwLDAtMi4xNS02LjI2LDQ4Ljc0LDQ4Ljc0LDAsMCwwLTc1LTQuNDQsNDguMzMsNDguMzMsMCwwLDAtMTMsMzYuNzFDMTUuNjcsNjksMTUuODQsNzAuNDksMTYuMDksNzJaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTEwLDY5LjYxYTcuNTEsNy41MSwwLDAsMC02LTIuOTNINzQuNTZsLS4yLDBhNy42LDcuNiwwLDAsMC03LjYsNy44NGMuMTEsMy45MywzLjg3LDcuMzcsOCw3LjM3aDJhNCw0LDAsMCwxLDIuOCw2Ljc2TDU2LjI2LDExMi4xYzEuNDguMjQsMywuNDIsNC40Ny41MmE0OC44NCw0OC44NCwwLDAsMCw1MC42My0zNi4zQTcuNzEsNy43MSwwLDAsMCwxMTAsNjkuNjFaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNjMuOSw0MWEyMS4yMiwyMS4yMiwwLDAsMC0xMS40NCwzLjc1bC0uMjguMTlBNTMuMjMsNTMuMjMsMCwwLDAsNDQsNTEuNjFMMTMuMDUsODIuNDhjLTEuMzksMS4zOC0uNTEsNS4xMiwzLjg0LDMuMzNMMjEsODQuMjdjNC4zNC0xLjE3LDcuNTMtLjg4LDkuOTEsMi4yNSwyLDIuNjguNzIsNy4wNi43Miw3LjA2LS45NCwzLjA5LDEuNDMsNS4yMSw0LDQuMTdsMS42Ni0uNjFhOC4xMiw4LjEyLDAsMCwxLDEwLDQuMTQsNy4yLDcuMiwwLDAsMSwuNSw1LjE4aDBBMi40NSwyLjQ1LDAsMCwwLDUyLDEwOC44Mkw3My41NSw4Ny4yQzY3LDg2LjU4LDYxLjYsODEuMTEsNjEuNDEsNzQuN0ExMi45MiwxMi45MiwwLDAsMSw3NCw2MS4zN2EyLjU4LDIuNTgsMCwwLDEsLjM5LDBIODcuMDVBMjMuMDYsMjMuMDYsMCwwLDAsNjMuOSw0MVpNNTEuNTIsNjAuMWMtMS4xNiwzLjE5LTMuNTUsNS4yNS01LjMzLDQuNnMtMi4yOS0zLjc3LTEuMTMtNywzLjU1LTUuMjUsNS4zMy00LjZTNTIuNjgsNTYuOTEsNTEuNTIsNjAuMVptMTIuMDksMGMtMS4xNiwzLjE5LTMuNTUsNS4yNS01LjMzLDQuNnMtMi4yOS0zLjc3LTEuMTMtNywzLjU1LTUuMjUsNS4zMy00LjZTNjQuNzgsNTYuOTEsNjMuNjEsNjAuMVoiLz48L2c+PC9nPjwvc3ZnPg==",
      },

      {
        symbol: "renBTC",
        address: "0xdbf31df14b66535af65aac99c32e9ea844e14501",
        decimals: 18,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/5777.png",
      },

      {
        symbol: "USDC",
        address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
        decimals: 6,
        image: "https://polygonscan.com/token/images/centre-usdc_32.png",
      },

      {
        symbol: "WFTM",
        address: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
        decimals: 18,
        image: "https://ftmscan.com/token/images/wFtm_32.png",
      },

    ],
  },

  43114: { // Avalanche mainnet
    network: "Avalanche mainnet",
    explorer: "https://snowtrace.io/",
    tokens: [

      {
        symbol: "MEMO",
        address: "0x136acd46c134e8269052c62a67042d6bdedde3c9",
        decimals: 9,
        image: "https://snowtrace.io/token/images/memoriestoken_32.png",
      },

      {
        symbol: "TIME",
        address: "0xb54f16fb19478766a268f172c9480f8da1a7c9c3",
        decimals: 9,
        image: "https://snowtrace.io/token/images/wonderland-time_32.png",
      },

    ],
  },

};
