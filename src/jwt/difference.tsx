/*


+----------------------------+----------------------------+
|    Session Authentication  |     JWT Authentication    |
+----------------------------+----------------------------+
| ✅ Requires separate       | ✅ No separate storage     |
|    storage for sessions    |    needed                 |
+----------------------------+----------------------------+
| ✅ Server stores session  | ❌ JWT is self-contained   |
|    data                   |    (invalidating is hard)  |
+----------------------------+----------------------------+
| ✅ Scaling requires       | ✅ Scaling is easier,      |
|    managing session store  |    since JWT is stateless |
+----------------------------+----------------------------+
| ✅ Better for stateful    | ✅ Better for stateless    |
|    applications           |    applications           |
+----------------------------+----------------------------+
| ✅ More secure since      | ❌ JWT, if stolen, can     |
|    session expires on logout |    be used until expiry  |
+----------------------------+----------------------------+
| ❌ Requires extra DB      | ✅ No DB required for     |
|    or cache management    |    token storage          |
+----------------------------+----------------------------+
| ❌ More server overhead   | ✅ Less server overhead   |
+----------------------------+----------------------------+

Use Session Authentication for stateful applications with a centralized authentication model.
Use JWT Authentication for scalable, stateless applications where API-driven authentication is preferred.
JWT is faster for distributed systems, but session authentication is more secure since it allows easy logout.


*/