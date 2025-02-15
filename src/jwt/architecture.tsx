/*

+--------------------------------------------------------------+
|                          ✅ HMAC                              |
|--------------------------------------------------------------|
|                 Monolithic Architecture                     |
|--------------------------------------------------------------|
|      +-------------------------------------------------+     |
|      |                User Interface                  |     |
|      +-------------------------------------------------+     |
|      |           Business Logic Layer (HMAC)          |     |
|      +-------------------------------------------------+     |
|      |                Data Interface                  |     |
|      +-------------------------------------------------+     |
|                       |       |                              |
|      +---------------+       +--------------------------+   |
|      |            Database (Single Source)             |   |
|      +-----------------------------------------------+   |
|                     Single Deployable Entity             |
+--------------------------------------------------------------+

+--------------------------------------------------------------+
|                     ✅ RSA or ECDSA                          |
|--------------------------------------------------------------|
|                Microservice Architecture                    |
|--------------------------------------------------------------|
|  +----------------------------------------------------+     |
|  |                 Microservice UI                   |     |
|  +----------------------------------------------------+     |
|  |       Microservice (Authentication - RSA/ECDSA)   |     |
|  |---------------------------------------------------|     |
|  |   Cross Communication (APIs/Message Queuing)      |     |
|  +---------------------------------------------------+     |
|  |   Microservice       Microservice      Microservice  |  |
|  +---------------------------------------------------+     |
|          |                   |                   |         |
|    +-----+-----+       +-----+-----+       +-----+-----+   |
|    |  Database  |       |  Database  |       |  Database  |   |
|    +-----------+       +-----------+       +-----------+   |
|                 Single Deployable Entity                    |
+--------------------------------------------------------------+
Key Takeaways:
HMAC (Monolithic Architecture):
Best for centralized, single-unit applications.
Faster authentication with shared secrets.
Simpler implementation, but not scalable for microservices.
RSA or ECDSA (Microservices Architecture):
Best for distributed, scalable applications.
Uses public/private key pairs for secure verification.
Supports cross-service authentication via APIs or message queues


*/