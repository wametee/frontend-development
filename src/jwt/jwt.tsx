/*


                  JWT-based Authentication
------------------------------------------------------------
 User
   │
   ▼
 Log In
   │
   ▼
 Authenticate
   │
   ▼
 Cookie with JWT
   │
   ▼
 Request with Cookie
   │
   ▼
 Access Page
------------------------------------------------------------
          Backend Service (Server)
                  │
                  ▼
         Create & Sign JWT
                  │
                  ▼
            Verify JWT
------------------------------------------------------------

------------------------------------------------------------
|      Session Authentication       |    JWT Authentication  |
------------------------------------------------------------
| - Separate storage required       | - No storage needed    |
| - Invalidation is easy            | - Hard to invalidate   |
| - Scaling needs session store     | - Scaling is easier    |
------------------------------------------------------------


*/