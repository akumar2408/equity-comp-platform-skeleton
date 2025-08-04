# System Architecture

The Equity‑Comp Platform skeleton follows a simple tiered architecture:

* **Frontend** – A React + Vite single‑page application (`/frontend`) that serves the user interface. It communicates with the API via JSON over HTTP.

* **API** – A Python Django REST Framework backend (`/backend`) exposing RESTful endpoints, including a `/health/` endpoint. Authentication is stubbed with JWT and TOTP‑based 2FA to illustrate structure.

* **Database** – A relational database (e.g. PostgreSQL) accessed via Django’s ORM. In this skeleton the database is configured via environment variables and migrations.

* **CI/CD** – Sample GitHub Actions and Docker Compose files illustrate how to build, test and deploy the application.

The diagram below illustrates the flow:

```
    [React/Vite SPA] <---HTTP---> [Django REST API] <----> [Database]
                            |
                            +----> [Auth Provider (stubbed)]
```
