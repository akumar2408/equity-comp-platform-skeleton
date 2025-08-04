# Equity-Comp Platform (Capstone Skeleton) 🚀

> **Disclaimer:** This repo contains only non-confidential scaffolding, demo
  data, and public information. All proprietary code, data, and workflows
  covered under NDA have been removed.

## What’s here
* **Python / Django REST** backend with a sample `/health/` endpoint.
* **React + Vite** frontend showing a dummy dashboard.
* **Auth pieces stubbed** (JWT, TOTP 2FA) to illustrate structure.
* **CI/CD sample** with GitHub Actions + Docker Compose.

## Tech Highlights
| Layer | Stack |
|-------|-------|
| Frontend | React 18 · TypeScript · Vite |
| API | Django 4 · DRF · django-otp |
| Data | PostgreSQL (Docker) |
| Infra | Docker Compose · GitHub Actions |

## Running locally
```bash
git clone https://github.com/<you>/equity-comp-platform-skeleton.git
cd equity-comp-platform-skeleton
docker compose up --build
# visit http://localhost:3000  -> Dummy UI

