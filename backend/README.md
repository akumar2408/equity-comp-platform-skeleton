# Backend (Django REST)

This directory contains a minimal Django project configured with Django REST Framework (DRF). The `api` app exposes a single `/health/` endpoint to verify that the service is running.

## Local setup

1. Create a virtual environment:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run migrations:
   ```bash
   python manage.py migrate
   ```
4. Start the development server:
   ```bash
   python manage.py runserver
   ```

Visit `http://localhost:8000/health/` to see the sample JSON response.

For more information, see [Django documentation](https://docs.djangoproject.com/) and [DRF](https://www.django-rest-framework.org/).
