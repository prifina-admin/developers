var operations = require("../../src/dbOperations/dynamoDb");

test("testing get data if User Not present", () => {
  params = {
    TableName: "User",
    Key: {
      Id: "ABC11",
      name: "MAHANTESHA"
    }
  };
  operations.getObject(params).catch(error => {
    expect(error).toBeDefined();
  });
});

test("testing get data if User is present", () => {
  let params = {
    TableName: "User",
    Key: {
      Id: "123ABC",
      name: "MAHANTESHA"
    }
  };

  return operations.getObject(params).then(data => {
    expect(data).toBeDefined();
  });
});

test("testing put data to dynamo db", () => {
  let params = {
    TableName: "User",
    Item: {
      Id: "123TESTABC",
      name: "TEST_DATA"
    }
  };

  return operations.putObject(params).then(data => {
    expect(data).toBeDefined();
  });
});
