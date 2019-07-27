const util = require("util");
const lambda = require("../src/handler");
const handler = util.promisify(lambda.upload);

const event = {
  resource: "/documents",
  path: "/documents",
  httpMethod: "POST",
  headers: {
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate",
    "Cache-Control": "no-cache",
    "CloudFront-Forwarded-Proto": "https",
    "CloudFront-Is-Desktop-Viewer": "true",
    "CloudFront-Is-Mobile-Viewer": "false",
    "CloudFront-Is-SmartTV-Viewer": "false",
    "CloudFront-Is-Tablet-Viewer": "false",
    "CloudFront-Viewer-Country": "IN",
    "Content-Type":
      "multipart/form-data; boundary=--------------------------302171628994849892628346",
    Host: "60k67gbwp0.execute-api.us-east-1.amazonaws.com",
    "Postman-Token": "a06ff206-e024-4225-a5f2-ef588773a8b4",
    "User-Agent": "PostmanRuntime/7.15.2",
    Via: "1.1 8d6212a2cc7c317013cbabe3a02f8803.cloudfront.net (CloudFront)",
    "X-Amz-Cf-Id": "gTcHronV7oXwk3iZ6g_ULd4SSODYuCq111MTTS95z2OQl1qI9Ai2Rw==",
    "X-Amzn-Trace-Id": "Root=1-5d39b976-17af445e8b34d5513aeb25c4",
    "X-Forwarded-For": "103.228.221.1, 52.46.37.174",
    "X-Forwarded-Port": "443",
    "X-Forwarded-Proto": "https"
  },
  multiValueHeaders: {
    Accept: ["*/*"],
    "Accept-Encoding": ["gzip, deflate"],
    "Cache-Control": ["no-cache"],
    "CloudFront-Forwarded-Proto": ["https"],
    "CloudFront-Is-Desktop-Viewer": ["true"],
    "CloudFront-Is-Mobile-Viewer": ["false"],
    "CloudFront-Is-SmartTV-Viewer": ["false"],
    "CloudFront-Is-Tablet-Viewer": ["false"],
    "CloudFront-Viewer-Country": ["IN"],
    "Content-Type": [
      "multipart/form-data; boundary=--------------------------302171628994849892628346"
    ],
    Host: ["60k67gbwp0.execute-api.us-east-1.amazonaws.com"],
    "Postman-Token": ["a06ff206-e024-4225-a5f2-ef588773a8b4"],
    "User-Agent": ["PostmanRuntime/7.15.2"],
    Via: ["1.1 8d6212a2cc7c317013cbabe3a02f8803.cloudfront.net (CloudFront)"],
    "X-Amz-Cf-Id": ["gTcHronV7oXwk3iZ6g_ULd4SSODYuCq111MTTS95z2OQl1qI9Ai2Rw=="],
    "X-Amzn-Trace-Id": ["Root=1-5d39b976-17af445e8b34d5513aeb25c4"],
    "X-Forwarded-For": ["103.228.221.1, 52.46.37.174"],
    "X-Forwarded-Port": ["443"],
    "X-Forwarded-Proto": ["https"]
  },
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: null,
  stageVariables: null,
  requestContext: {
    resourceId: "q8v4i9",
    resourcePath: "/documents",
    httpMethod: "POST",
    extendedRequestId: "dYnqcGFHIAMF6Jw=",
    requestTime: "25/Jul/2019:14:15:18 +0000",
    path: "/dev/documents",
    accountId: "263640595351",
    protocol: "HTTP/1.1",
    stage: "dev",
    domainPrefix: "60k67gbwp0",
    requestTimeEpoch: 1564064118043,
    requestId: "a11faee4-aee6-11e9-9327-3f26c18f4826",
    identity: {
      cognitoIdentityPoolId: null,
      accountId: null,
      cognitoIdentityId: null,
      caller: null,
      sourceIp: "103.228.221.1",
      principalOrgId: null,
      accessKey: null,
      cognitoAuthenticationType: null,
      cognitoAuthenticationProvider: null,
      userArn: null,
      userAgent: "PostmanRuntime/7.15.2",
      user: null
    },
    domainName: "60k67gbwp0.execute-api.us-east-1.amazonaws.com",
    apiId: "60k67gbwp0"
  },
  body:
    '----------------------------302171628994849892628346\r\nContent-Disposition: form-data; name="document"; filename="account_layout.txt"\r\nContent-Type: text/plain\r\n\r\n<?xml version="1.0" encoding="utf-8"?>\r\n\r\n\r\n<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"\r\n    xmlns:app="http://schemas.android.com/apk/res-auto"\r\n    xmlns:tools="http://schemas.android.com/tools"\r\n    android:layout_width="match_parent"\r\n    android:layout_height="match_parent"\r\n    tools:context=".ProfileActivity">\r\n\r\n\r\n    <ScrollView\r\n        android:layout_width="match_parent"\r\n        android:layout_height="wrap_content"\r\n        android:fillViewport="true"\r\n        android:orientation="vertical">\r\n\r\n    <RelativeLayout\r\n        android:layout_width="match_parent"\r\n        android:layout_height="wrap_content"\r\n        >\r\n\r\n        <LinearLayout\r\n            android:id="@+id/linearLayout3"\r\n            android:layout_width="match_parent"\r\n            android:layout_height="120dp"\r\n            android:background="@color/colorAccent"\r\n            android:orientation="vertical"></LinearLayout>\r\n\r\n\r\n        <de.hdodenhof.circleimageview.CircleImageView\r\n            android:id="@+id/profile_image"\r\n            android:layout_width="208dp"\r\n            android:layout_height="144dp"\r\n            android:layout_marginTop="47dp"\r\n            android:layout_centerHorizontal="true"\r\n            android:src="@drawable/slider1"\r\n            app:civ_border_color="@color/colorAccent"\r\n            app:civ_border_width="2dp" />\r\n\r\n        <LinearLayout\r\n            android:layout_width="wrap_content"\r\n            android:layout_height="wrap_content"\r\n            android:orientation="vertical">\r\n\r\n         <!--- User Name -->\r\n            <RelativeLayout\r\n                android:layout_width="wrap_content"\r\n                android:layout_height="wrap_content">\r\n\r\n                <LinearLayout\r\n                    android:id="@+id/linearLayout"\r\n                    android:layout_width="match_parent"\r\n                    android:layout_height="wrap_content"\r\n                    android:layout_marginTop="220dp"\r\n                    android:layout_marginStart="8dp">\r\n\r\n                    <LinearLayout\r\n                        android:id="@+id/name_view_layout"\r\n                        android:layout_width="match_parent"\r\n                        android:layout_height="match_parent"\r\n                        android:visibility="visible">\r\n\r\n\r\n                        <TextView\r\n                            android:id="@+id/TV_name"\r\n                            android:layout_width="236dp"\r\n                            android:layout_height="wrap_content"\r\n                            android:layout_marginStart="16dp"\r\n                            android:text="User Profile"\r\n                            android:textSize="15dp" />\r\n\r\n                        <Button\r\n                            android:id="@+id/B_edit_name"\r\n                            android:layout_width="wrap_content"\r\n                            android:layout_height="39dp"\r\n                            android:background="@color/transperentWhite"\r\n                            android:text="Edit"\r\n                            android:textSize="15dp"\r\n                            tools:layout_editor_absoluteX="295dp"\r\n                            tools:layout_editor_absoluteY="277dp" />\r\n                    </LinearLayout>\r\n                </LinearLayout>\r\n\r\n                <RelativeLayout\r\n                    android:id="@+id/edit_name_layout"\r\n                    android:layout_width="384dp"\r\n                    android:layout_height="41dp"\r\n                    android:layout_marginTop="220dp"\r\n                    android:layout_marginStart="16dp"\r\n                    android:visibility="invisible"\r\n                    >\r\n\r\n\r\n                    <EditText\r\n                        android:id="@+id/ETV_name"\r\n                        android:layout_width="match_parent"\r\n                        android:layout_height="wrap_content"\r\n                        android:cursorVisible="false"\r\n                        android:hint="Name"\r\n                        android:textSize="15dp" />\r\n\r\n\r\n                </RelativeLayout>\r\n            </RelativeLayout>\r\n             <!--- Email ID -->\r\n                <RelativeLayout\r\n                    android:layout_width="wrap_content"\r\n                    android:layout_height="wrap_content"\r\n                    android:layout_marginTop="10dp">\r\n\r\n\r\n                    <LinearLayout\r\n                        android:id="@+id/email_view_layout"\r\n                        android:layout_width="331dp"\r\n                        android:layout_height="wrap_content"\r\n\r\n                        android:layout_alignParentTop="true"\r\n                        android:layout_marginStart="12dp"\r\n                        android:visibility="visible">\r\n\r\n\r\n                        <TextView\r\n                            android:id="@+id/TV_email"\r\n                            android:layout_width="236dp"\r\n                            android:layout_height="wrap_content"\r\n                            android:layout_marginStart="16dp"\r\n                            android:text="Email"\r\n                            android:textSize="15dp" />\r\n\r\n                        <Button\r\n                            android:id="@+id/B_edit_email"\r\n                            android:layout_width="wrap_content"\r\n                            android:layout_height="39dp"\r\n                            android:background="@color/transperentWhite"\r\n                            android:text="Edit"\r\n                            android:textSize="15dp"\r\n                           />\r\n                    </LinearLayout>\r\n\r\n                    <RelativeLayout\r\n                        android:id="@+id/edit_email_layout"\r\n                        android:layout_width="384dp"\r\n                        android:layout_height="41dp"\r\n                        android:layout_marginStart="14dp"\r\n                        android:visibility="invisible"\r\n                        >\r\n\r\n\r\n                        <EditText\r\n                            android:id="@+id/ETV_email"\r\n                            android:layout_width="match_parent"\r\n                            android:layout_height="wrap_content"\r\n                            android:layout_alignParentStart="true"\r\n                            android:layout_alignParentTop="true"\r\n                            android:layout_marginStart="0dp"\r\n                            android:layout_marginTop="0dp"\r\n                            android:cursorVisible="false"\r\n                            android:hint="Email"\r\n                            android:textSize="15dp" />\r\n\r\n                    </RelativeLayout>\r\n\r\n                </RelativeLayout>\r\n\r\n            <!--- phone number-->\r\n            <RelativeLayout\r\n                android:layout_width="wrap_content"\r\n                android:layout_height="wrap_content"\r\n                android:layout_marginTop="20dp">\r\n\r\n                <LinearLayout\r\n                    android:id="@+id/phone_number_view_layout"\r\n                    android:layout_width="match_parent"\r\n                    android:layout_height="wrap_content"\r\n                    android:layout_marginStart="12dp"\r\n                    android:visibility="visible">\r\n\r\n\r\n                    <TextView\r\n                        android:id="@+id/TV_phone_number"\r\n                        android:layout_width="236dp"\r\n                        android:layout_height="wrap_content"\r\n                        android:layout_marginStart="16dp"\r\n                        android:text="Phone Number"\r\n                        android:textSize="15dp" />\r\n\r\n                    <Button\r\n                        android:id="@+id/B_edit_phone_number"\r\n                        android:layout_width="wrap_content"\r\n                        android:layout_height="39dp"\r\n                        android:background="@color/transperentWhite"\r\n                        android:text="Edit"\r\n                        android:textSize="15dp"\r\n                       />\r\n                </LinearLayout>\r\n\r\n                <RelativeLayout\r\n                    android:id="@+id/edit_phone_number_layout"\r\n                    android:layout_width="384dp"\r\n                    android:layout_height="41dp"\r\n                    android:layout_marginStart="16dp"\r\n                    android:visibility="invisible"\r\n                    >\r\n\r\n\r\n                    <EditText\r\n                        android:id="@+id/ETV_phone_number"\r\n                        android:layout_width="match_parent"\r\n                        android:layout_height="wrap_content"\r\n                        android:cursorVisible="false"\r\n                        android:hint="Name"\r\n                        android:textSize="15dp" />\r\n\r\n                </RelativeLayout>\r\n\r\n            </RelativeLayout>\r\n\r\n\r\n\r\n        </LinearLayout>\r\n\r\n\r\n\r\n\r\n    </RelativeLayout>\r\n    </ScrollView>\r\n</android.support.constraint.ConstraintLayout>\r\n----------------------------302171628994849892628346\r\nContent-Disposition: form-data; name="userId"\r\nContent-Type: application/json\r\n\r\n123ABC\r\n----------------------------302171628994849892628346\r\nContent-Disposition: form-data; name="userName"\r\nContent-Type: application/json\r\n\r\nMAHANTESHA\r\n----------------------------302171628994849892628346--\r\n',
  isBase64Encoded: false
};

describe("Service user document send by services", () => {
  test("require environment variables", async () => {
    const result = await handler(event);
    return result
      .then(data => {
        expect(data).toBe("some");
      })
      .catch(e => {
        expect(e).toBe("Missing required environment variables");
      });
  });
});
