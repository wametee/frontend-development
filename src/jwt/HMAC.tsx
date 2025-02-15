/*

Bob issues some claims
+----------------------------------+
| Subject: Login                  |
| Audience: Admin                 |
| ISS: BobCo                      |
+----------------------------------+
          |
          | HMAC Digital signing of JWT
          v
+---------------------------+
|    Secret Key (priv)      | <----+
+---------------------------+      |
          |                         |
          |                         |
          v                         v
+---------------------------+    +--------------------------+
|        Bob                 |    |        Alice             |
+---------------------------+    +--------------------------+
                                  |  Verify Signature       |
                                  +--------------------------+
                                            ^
                                            |
+---------------------------+               |
|    Secret Key (priv)      | <--------------+
+---------------------------+

Secret key must be shared between the issuer and validator
*/