var userOperationsInstance = require("../../../services/user/user");

test("get user test", () => {
  var userId = "123ABC";
  var name = "MAHANTESHA";
  userOperationsInstance
    .getUser(userId, name)
    .then(user => expect(user.Item.name).toBe("MAHANTESHA"));
});

test("get user doesn't has unOrganisedDocuments", () => {
  var userId = "123ABC";
  var name = "MAHANTESHA";
  userOperationsInstance.getUser(userId, name).then(data => {
    data.Item["unOrganisedDocuments"] = { "a.txt": "abc.iml.pow.com" };
    console.log("updated user:", data);
    expect(data.Item.hasOwnProperty("unOrganisedDocuments")).toBe(true);
  });
});

test("get user has unOrganisedDocuments", () => {
  var userId = "123ABC";
  var name = "MAHANTESHA";
  userOperationsInstance.getUser(userId, name).then(data => {
    expect(data.Item.hasOwnProperty("unOrganisedDocuments")).toBe(true);
  });
});
