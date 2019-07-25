const documentsOperations = require("../../../src/services/document/documents");

test("test with proper document as simple text", async () => {
  var document = "this is my first recent document";
  var docName = "second.txt";
  var userId = "123ABC";
  var name = "MAHANTESHA";
  return documentsOperations
    .addDocument(docName, document, userId, name)
    .then(data => {
      expect(data.userId).toBe("123ABC");
    });
});

test("test adding plain text document with invalid user", () => {
  var docName = "first.txt";
  var document = "this is my first recent document";
  var userId = "INVALID_USER_ID";
  var name = "MAHANTESHA";
  return documentsOperations
    .addDocument(docName, document, userId, name)
    .catch(error => {
      expect(error.statusCode).toBe(404);
    });
});

// test("test get user for the document ", async () => {
//   var document = "this is my first recent document";
//   var userId = "ABC11";
//   var name = "MAHANTESHA";
//   var user = await documentsOperations.addDocument(document, userId, name);
//   expect(user).toBe("something i don't know");
// });

test("test adding document and testing url dynamo db", () => {
  var document = "this is my first recent document";
  var docName = "first.txt";
  var userId = "123ABC";
  var name = "MAHANTESHA";

  return documentsOperations
    .addDocument(docName, document, userId, name)
    .then(data => expect(data.userId).toBe("123ABC"))
    .catch(err => expect(err.statusCode).toBe("Not executed"));
});

// test("test adding plain text document with valid user", () => {
//   var document = "this is my first recent document";
//   var docName = "a.txt";
//   var userId = "123ABC";
//   var name = "MAHANTESHA";
//   documentsOperations.addDocument(docName, document, userId, name);
// });
