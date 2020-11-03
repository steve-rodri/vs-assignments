const sum = (x, y) => {
  try {
    if (typeof x !== "number") {
      throw new Error(`${x} is not a number`);
    } else if (typeof y !== "number") {
      throw new Error(`${y} is not a number`);
    } else {
      return x + y;
    }
  } catch (e) {
    console.log(e);
  }
};

sum("1", "2");

let user = { username: "sam", password: "123abc" };
const login = (username, password) => {
  try {
    if (username !== user.username) {
      throw new Error("Username does not match");
    } else if (password !== user.password) {
      throw new Error("Password does not match");
    } else {
      console.log("login successful");
    }
  } catch (e) {
    console.log(e);
  }
};

try {
  login("steve", "123abc");
  login("sam", "123abcd");
  login("sam", "123abc");
} catch (e) {
  console.log(e);
}
