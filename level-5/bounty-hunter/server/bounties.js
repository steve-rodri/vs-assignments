const { v4: uuid } = require("uuid");

const bounties = [
  {
    firstName: "Obi-Wan",
    lastName: "Kenobi",
    living: true,
    bountyAmount: 3232,
    type: "Jedi",
    photoUrl:
      "https://www.nme.com/wp-content/uploads/2019/10/2019_obiwan_2000x1270-696x442.png",
    _id: uuid(),
  },
  {
    firstName: "Qui-Gon",
    lastName: "Jinn",
    living: false,
    bountyAmount: 10000,
    type: "Jedi",
    photoUrl:
      "https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768",
    _id: uuid(),
  },
  {
    firstName: "Anakin",
    lastName: "Skywalker",
    living: true,
    bountyAmount: 15000,
    type: "Jedi",
    photoUrl:
      "https://i0.wp.com/butwhythopodcast.com/wp-content/uploads/2019/12/anakin.jpg?resize=768%2C432&ssl=1",
    _id: uuid(),
  },
  {
    firstName: "Darth",
    lastName: "Maul",
    living: false,
    bountyAmount: 2000,
    type: "Sith",
    photoUrl:
      "https://fastly.syfy.com/sites/syfy/files/styles/1240x700_hero/public/2020/11/darth-maul-the-phantom-menace.jpg?offset-y=0",
    _id: uuid(),
  },
  {
    firstName: "Mace",
    lastName: "Windu",
    living: false,
    bountyAmount: 50000,
    type: "Jedi",
    photoUrl:
      "https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C0%2C1637%2C921&width=768",
    _id: uuid(),
  },
  {
    firstName: "Kylo",
    lastName: "Ren",
    living: true,
    bountyAmount: 5000,
    type: "Sith",
    photoUrl:
      "https://cdn.mos.cms.futurecdn.net/Cy2cWEEBcMHEfmDkpYhbzb-970-80.jpg.webp",
    _id: uuid(),
  },
];

module.exports = bounties;
