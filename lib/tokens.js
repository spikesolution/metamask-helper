const data = {

  1: { // Ethereum Mainnet
    network: "Ethereum Mainnet",
    explorer: "https://etherscan.io/token/",
    tokens: [

      {
        symbol: "OHM",
        address: "0x383518188c0c6d7730d91b2c03a03c837814a899",
        decimals: 9,
        image: "https://etherscan.io/token/images/olympusdao_32.png",
      },

      { // 2021-06-15 new sOHM contract
        symbol: "sOHM",
        address: "0x04f2694c8fcee23e8fd0dfea1d4f5bb8c352111f",
        decimals: 9,
        image: "https://etherscan.io/token/images/olympusdao_32.png",
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
        symbol: "BNT",
        address: "0x1894f703fEfAf52baC0f780EbF0dd8E9bb5310eb",
        decimals: 18,
        image: "https://www.polypulsar.farm/images/farms/bnt.png",
      },

      {
        symbol: "BPUL",
        address: "0x68f044B59D96ec856aC72C29Df997348c8C1fFf3",
        decimals: 18,
        image: "https://www.polypulsar.farm/images/farms/bpul.png",
      },

      {
        symbol: "CRYSTL",
        address: "0x76bf0c28e604cc3fe9967c83b3c3f31c213cfe64",
        decimals: 18,
        image: "https://polycrystal.finance/images/cakebg.png",
      },

      {
        symbol: "FISH",
        address: "0x3a3df212b7aa91aa0402b9035b098891d276572b",
        decimals: 18,
        image: "https://assets.coingecko.com/coins/images/15226/small/smallLogo.png?1620269393",
      },

      {
        symbol: "ICE",
        address: "0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef",
        decimals: 18,
        image: "data:image/png;base64,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",
      },

      {
        symbol: "IRON",
        address: "0xda3adc4111914b223953516f75c54afbfb597c45",
        decimals: 18,
        image: "https://polygon.iron.finance/static/media/IRON.484ee2b8.png",
      },

      {
        symbol: "OMEN",
        address: "0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E",
        decimals: 18,
        image: "https://augury.finance/_nuxt/img/omen.b433161.png",
      },

      {
        symbol: "PAW",
        address: "0x6971aca589bbd367516d70c3d210e4906b090c96",
        decimals: 18,
        image: "https://polycat.finance/images/ifos/paw.svg",
      },

      {
        symbol: "polyBUNNY",
        address: "0x4c16f69302ccb511c5fac682c7626b9ef0dc126a",
        decimals: 18,
        image: "https://polygon.pancakebunny.finance/static/media/token-bunny.a8b61846.svg",
      },

      {
        symbol: "SDO", // SafeDollar
        address: "0x86bc05a6f65efdada08528ec66603aef175d967f",
        decimals: 18,
        image: "https://app.safedollar.fi/static/media/stake.7ad02ad8.png",
      },

      {
        symbol: "TITAN",
        address: "0xaaa5b9e6c589642f98a1cda99b9d024b8407285a",
        decimals: 18,
        image: "https://assets.coingecko.com/coins/images/16031/small/76583210.png?1622634331",
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

      {
        symbol: "YELD",
        address: "0xd0f3121A190d85dE0AB6131f2bCEcdbfcfB38891",
        decimals: 18,
        image: "https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/YELD.svg",
      },

    ],
  },

  56: { // Binance Smart Chain
    network: "Binance Smart Chain",
    explorer: "https://bscscan.com/token/",
    chart: "https://poocoin.app/tokens/",
    tokens: [

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
        symbol: "RDT", // Rediant
        address: "0xB1f9D66426E2e006BAEB41D3d9B8FBc0d1f6008D",
        decimals: 18,
        image: "https://polygon.rediant.finance/images/Logo64x64.png",
      },

      {
        symbol: "STEEL",
        address: "0x9001ee054f1692fef3a48330cb543b6fec6287eb",
        decimals: 18,
        image: "https://bscscan.com/token/images/ironfinance-share_32.png",
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
        symbol: "VIPER",
        address: "0xea589e93ff18b1a1f1e9bac7ef3e86ab62addc79",
        decimals: 18,
        image: "https://assets.coingecko.com/coins/images/15305/small/0c4b902b40f14db918f4500956386414ab7ebcfe.jpeg?1620371961",
      },

      {
        symbol: "xVIPER",
        address: "0xE064a68994e9380250CfEE3E8C0e2AC5C0924548",
        decimals: 18,
        image: "https://assets.coingecko.com/coins/images/15305/small/0c4b902b40f14db918f4500956386414ab7ebcfe.jpeg?1620371961",
      },

    ],
  },

};
