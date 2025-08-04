from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def health(request):
    """
    Sample endpoint for health check.
    """
    return Response({"status": "ok"})
