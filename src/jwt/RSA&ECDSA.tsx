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
                |       Key Pair             |
                |  +---------------------+  |
                |  | Private Key (sk)     |  |  <-- Kept secret (Signing Key)
                |  | Signing Key          |  |
                |  +---------------------+  |
                |  | Public Key (pk)      |  |  <-- Publicly shared (Verifying Key)
                |  | Verifying Key        |  |
                |  +---------------------+  |
                +---------------------------+
                            |
                            v
               +---------------------------+
               |        Bob                 |
               +---------------------------+
                            |
                            v
               +---------------------------+
               |  Computation Overhead      |
               +---------------------------+
                            |
                            v
               +---------------------------+
               |        Alice               |
               +---------------------------+
                            |
                            | Verify Signature using Bob's Public Key
                            v
               +---------------------------+
               |     Bob's Public Key       |
               | (Used for Verification)    |
               +---------------------------+




*/