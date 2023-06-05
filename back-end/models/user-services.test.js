const userServices = require("./user-services");

test("test findUserByUserName", async () => {
  const result = await userServices.findUserByUserName("alimm");
  expect(result[0].username).toBe("alimm");
});

test("test add user", async () => {
  user = { username: "jestTest", password: "123" };
  const add = await userServices.addUser(user);
  const result = await userServices.findUserByUserName("jestTest");

  expect(result[0].username).toBe("jestTest");
});
//add a delete for user-services for testing add user.

test("test delete user by username", async () => {
  const result = await userServices.findUserByUserName("jestTest");
  const del = await userServices.deleteUserByUsername(result[0]._id);

  const after_result = await userServices.findUserByUserName("jestTest");
  expect(after_result).toEqual([]);
});
