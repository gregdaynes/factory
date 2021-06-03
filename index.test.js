const faker = require("faker")
const factory = require("./index")
const { test } = require("tap")

// const user = factory({
//   $name: "User",
//   $save: (state) => console.log(state),
//
//   email: faker.internet.email,
//   findName: faker.name.findName,
//   id: faker.datatype.number,
//   idProfile: faker.datatype.uuid,
//   notes: faker.random.words,
//   password: faker.internet.password,
//   userName: faker.internet.userName,
// })
//
// user({
//   firstName: "testy",
//   notes: undefined,
//   password: null,
// }).save()

test("the thing", async (t) => {
  const x = factory()

  console.log(x)

  t.end()
})
