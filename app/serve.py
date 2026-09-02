#!/usr/bin/env python3
"""Static dev server for the vault: serves the repo root (notes app + PDFs)
and redirects / to the app shell."""
import http.server
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path in ("/", "/index.html"):
            self.send_response(302)
            self.send_header("Location", "/app/")
            self.end_headers()
            return
        super().do_GET()


class Server(http.server.ThreadingHTTPServer):
    allow_reuse_address = True


print(f"Serving {ROOT} on http://localhost:{PORT}/app/")
Server(("", PORT), Handler).serve_forever()
