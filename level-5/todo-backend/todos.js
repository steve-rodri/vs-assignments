const { v4: uuid } = require("uuid");

module.exports = [
  {
    name: "Wash the Dishes",
    description: "clean all of the dishes",
    imageURL: "https://picsum.photos/400",
    completed: false,
    _id: uuid(),
  },
  {
    name: "Do the laundry",
    description: "lights and darks",
    imageURL: "https://picsum.photos/400",
    completed: false,
    _id: uuid(),
  },
  {
    name: "Sweep the floor",
    description: "sweep the floor",
    imageURL: "https://picsum.photos/400",
    completed: false,
    _id: uuid(),
  },
  {
    name: "Make the bed",
    description: "make the bed",
    imageURL: "https://picsum.photos/400",
    completed: false,
    _id: uuid(),
  },
];
