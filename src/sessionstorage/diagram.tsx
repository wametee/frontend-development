

/*
------------------------------------------------------------
|          Session Vs JWT: The Differences You May Not Know!         |
------------------------------------------------------------

                  Session-based Authentication
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
 Cookie with Session ID
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
          Create Session
                  │
                  ▼
         Session Store (Database)
                  ▲
                  │
         Verify Session
------------------------------------------------------------

                              VS

*/