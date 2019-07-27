const documentsOperations = require("../../../src/services/document/documents");

test("test with proper document as simple text", async () => {
  let document = "thiss is my first recent document";
  let docName = "seconds.txt";
  let userId = "123TESTABC";
  let name = "TEST_DATA";
  let response = await documentsOperations.addDocument(
    docName,
    document,
    userId,
    name
  );
  return expect(response.userId).toBe("123TESTABC");
});

test("test adding plain text document with invalid user", async () => {
  let docName = "first.txt";
  let document = "this is my first recent document";
  let userId = "INVALID_USER_ID";
  let name = "MAHANTESHA";
  try {
    let response = await documentsOperations.addDocument(
      docName,
      document,
      userId,
      name
    );
    //return expect(response).toBe("Eroror");
  } catch (error) {
    return expect(error.message).toBe("User doesn't exist");
  }
});

// test("test get user for the document ", async () => {
//   var document = "this is my first recent document";
//   var userId = "ABC11";
//   var name = "MAHANTESHA";
//   var user = await documentsOperations.addDocument(document, userId, name);
//   expect(user).toBe("something i don't know");
// });

test("test adding document and testing url dynamo db", async () => {
  let document = "this is my first recent document";
  let docName = "first.txt";
  let userId = "123ABC";
  let name = "MAHANTESHA";

  return documentsOperations
    .addDocument(docName, document, userId, name)
    .then(data => expect(data.userId).toBe("123ABC"));
});

// test("test adding plain text document with valid user", () => {
//   var document = "this is my first recent document";
//   var docName = "a.txt";
//   var userId = "123ABC";
//   var name = "MAHANTESHA";
//   documentsOperations.addDocument(docName, document, userId, name);
// });
