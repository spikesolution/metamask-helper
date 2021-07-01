const networks = {
  1: "Ethereum Mainnet",
  3: "Ethereum Ropsten",
  4: "Ethereum Rinkeby",
  5: "Ethereum Goerli",
  42: "Ethereum Kovan",
  56: "Binance Smart Chain",
  137: "Matic Mainnet",
  "0x63564c40": "Harmony Mainnet",
};

const tokens = {
  1: [ // Ethereum Mainnet

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

  ],

  137: [ // Matic

    {
      symbol: "ADDY",
      address: "0xc3FdbadC7c795EF1D6Ba111e06fF8F16A20Ea539",
      decimals: 18,
      image: "https://adamant.finance/img/ADDY.png",
    },

    {
      symbol: "BONE",
      address: "0x6bb45cEAC714c52342Ef73ec663479da35934bf7",
      decimals: 18,
      image: "https://bone.polypup.finance/images/egg/9.png",
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
      symbol: "PUP", // PUP
      address: "0xcfe2cf35d2bdde84967e67d00ad74237e234ce59",
      decimals: 18,
      image: "https://pup.polypup.finance/images/egg/2.png",
    },

    {
      symbol: "RDT", // Rediant
      address: "0xB1f9D66426E2e006BAEB41D3d9B8FBc0d1f6008D",
      decimals: 18,
      image: "https://polygon.rediant.finance/images/Logo64x64.png",
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
      address: "0xdd185af1bb417469461edbc95f22df9781a04624",
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

  56: [ // Binance Smart Chain

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

    {
      symbol: "WINGS",
      address: "0x0487b824c8261462f88940f97053e65bdb498446",
      decimals: 18,
      image: "https://gblobscdn.gitbook.com/spaces%2F-Ma1OiRl2YKPy5KEq546%2Favatar-1621448867716.png",
    },

  ],

  "0x63564c40": [ // Harmony Mainnet",

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
};
