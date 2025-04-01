#!/usr/bin/env python3
import http.server
import socketserver
import os
import webbrowser

# Change to the src directory
os.chdir('src')

# Set up the server
PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

# Create the server
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server")
    
    # Open the website in the default browser
    webbrowser.open(f'http://localhost:{PORT}')
    
    # Start serving
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
        httpd.shutdown() 