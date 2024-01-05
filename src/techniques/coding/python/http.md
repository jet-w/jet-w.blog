---
#cover: /assets/images/unisa.jpg
title: Http Authorization
date: 2023-12-30
author: Haiyue
icon: /assets/icon/common/pool.svg
category:
  - python
  - http authorization
star: false
sticky: false
---

## Basic Authorization
``` python
from base64 import b64encode

# Authorization token is using base 64 to encode
def basic_auth(username, password):
    token = b64encode(f"{username}:{password}".encode('utf-8')).decode("ascii")
    return f'Basic {token}'
```

## Bearer authorization bearer
Bearer Authorization is an HTTP authentication scheme commonly used with <span style="color:orange">OAuth 2.0</span>. In this approach, the client includes an access token in the "Authorization" header using the "Bearer" scheme, granting permission to access protected resources. <span style="color:orange">The server validates the token for authorization</span>. It's a widely used method for securing API access, especially in scenarios involving third-party applications.


A Bearer token is a type of token used for authentication and authorization and is used in web applications and APIs to hold user credentials and indicate authorization for requests and access.

Generating Bearer tokens based on protocols and specifications such as OAuth and JWT (JSON Web Token). The authenticated user obtains the Bearer token issued by the server and sends it to the server in the header of the request. The server verifies the received bearer token and controls user access based on the token. The Bearer token is also usually sent over an encrypted connection via HTTPS. This prevents unauthorized access by malicious third parties even if the token is stolen.
