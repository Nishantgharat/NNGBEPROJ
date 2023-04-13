import assets from "./assets";

const NFTData = [
  {
    id: "NFT-01",
    name: "ITC Limited",
    creator: "BSE: 500875  NSE : ITC",
    price: "AAA",
    description:
      "The ratings continue to reflect the company’s excellent business risk profile due to its presence in diverse businesses, a dominant position in the Indian cigarette market and strong sustainable profitability. The ratings also factor in ITC’s exceptionally strong financial risk profile. These rating strengths are partially offset by exposure to risks inherent in the various businesses.",
    image: assets.nft01,
    bids: [
      {
        id: "BID-11",
        name: "HDFC Securities",
        price: "AAA",
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "CARe Ratings",
        price: "A1+",
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "CRISIL",
        price: "A1+",
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Reliance Industries Ltd",
    creator: "BSE: 500325  NSE : RELIANCE",
    price: "AA",
    description:
      "RIL enjoys the leadership position in the Indian polymer market. Globally, RIL is the third-largest producer of paraxylene and among top 10 producers of polypropylene (PP) and purified terephthalic acid (PTA). Besides, RIL is the world’s largest integrated polyester producer and among the top 10 global producers of mono-ethylene glycol (MEG).",
    image: assets.nft02,
    bids: [
      {
        id: "BID-21",
        name: "CRISIL",
        price: "AA",
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-03",
    name: "Titan Company Ltd",
    creator: "BSE: 500114  NSE : TITAN",
    price: "A1+",
    description:
      "Titan Company Limited was incorporated in 1984 at Hosur, Tamil Nadu, as a joint venture between the Tata Group (25.02%) and Tamil Nadu Industrial Development Corporation Limited (TIDCO) (27.88% . Initially incorporated as Titan Watches Limited in 1984, the company changed its name to Titan Industries Ltd. in September 1993 and subsequently in 2013, the name was changed to Titan Company Limited",
    image: assets.nft03,
    bids: [
      {
        id: "BID-31",
        name: "HDFC Securities",
        price: "A1+",
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "CARE",
        price: "AAA",
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "NFT-04",
    name: "Bajaj Finance Ltd",
    creator: "BSE: 500034 NSE : BAJFINANCE",
    price: "AAA",
    description:
      "BFL is a deposit-taking non-banking financial company and is the finance lending arm of the Bajaj Group. It is a diversified finance company with exposure to various segments such as auto loans, consumer durables loans, personal loans, home loans, loan against property, unsecured loans to small and medium enterprises, loan against shares, vendor finance.",
    image: assets.nft04,
    bids: [
      {
        id: "BID-41",
        name: "HDFC Securities",
        price: "AAA",
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "CARE Ratings",
        price: "A1+",
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "CRISIL",
        price: "AAA",
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      // {
      //   id: "BID-44",
      //   name: "Vincent Swift",
      //   price: 54.15,
      //   image: assets.person02,
      //   date: "December 31, 2019 at 3:50 PM",
      // },
    ],
  },
  {
    id: "NFT-05",
    name: "Oil & Natural Gas Corpn Ltd",
    creator: "BSE: 500312  NSE : ONGC",
    price: "A-",
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft05,
    bids: [
      {
        id: "BID-51",
        name: "HDFC Securites",
        price: "A-",
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  // {
  //   id: "NFT-06",
  //   name: "Black box model",
  //   creator: "Leo Messi",
  //   price: 20.25,
  //   description:
  //     "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
  //   image: assets.nft06,
  //   bids: [
  //     {
  //       id: "BID-61",
  //       name: "Jessica Tan",
  //       price: 20.25,
  //       image: assets.person02,
  //       date: "December 12, 2019 at 12:10 PM",
  //     },
  //     {
  //       id: "BID-62",
  //       name: "Jennifer Sia",
  //       price: 20.5,
  //       image: assets.person03,
  //       date: "December 27, 2019 at 1:50 PM",
  //     },
  //     {
  //       id: "BID-63",
  //       name: "Rosie Wong",
  //       price: 20.75,
  //       image: assets.person04,
  //       date: "December 31, 2019 at 3:50 PM",
  //     },
  //     {
  //       id: "BID-64",
  //       name: "Siti Nurhaliza",
  //       price: 21.25,
  //       image: assets.person02,
  //       date: "December 31, 2019 at 3:50 PM",
  //     },
  //     {
  //       id: "BID-65",
  //       name: "Kaitlyn Lee",
  //       price: 7.25,
  //       image: assets.person02,
  //       date: "December 31, 2019 at 3:50 PM",
  //     },
  //   ],
  // },
  // {
  //   id: "NFT-07",
  //   name: "Abstracto soulful art",
  //   creator: "Victor de la Cruz",
  //   price: 18.25,
  //   description:
  //     "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Ullamcorper platea penatibus ornare egestas nulla ligula hendrerit nisl suscipit sociosqu maximus, tincidunt aptent habitant purus pharetra ultrices dapibus laoreet nisi lacinia. Porta malesuada netus vel sapien conubia porttitor aliquam ut pretium ante litora molestie senectus magna egestas sociosqu, eget aliquet fames pharetra felis posuere varius fringilla quisque in arcu montes eu ullamcorper.",
  //   image: assets.nft07,
  //   bids: [],
  // },
];

export { NFTData };
