var s3Instance = require("../../dbOperations/s3Bucket");
test("test uploading data to a s3 bucket doesn't exist", () => {
  var data = {
    Bucket: "users-unorgggganized-files",
    Key: "file-name123",
    Body: "this is first file content. which i'm sending"
  };
  return s3Instance.fileUpload(data).catch(error => {
    expect(error.message).toBe("The specified bucket does not exist");
  });
});

test("test uploading data to a s3 bucket", () => {
  var data = {
    Bucket: "users-unorganized-files",
    Key: "file-name1233434",
    Body: "this is first file content. which i'm sending"
  };
  return s3Instance.fileUpload(data).then(data => {
    expect(data).toBeDefined();
  });
});
