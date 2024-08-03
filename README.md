# Static Website with Nginx in Docker

This project demonstrates how to serve a static website using Nginx within a Docker container. The website has a simple layout with a header, title section, and footer, and includes interactive JavaScript features.

## Project Structure

- `Dockerfile`: Defines the Docker image with Nginx.
- `src/`: Contains the static files (HTML, CSS, JavaScript).
  - `index.html`: HTML file with header, main content, and footer.
  - `styles.css`: CSS file for styling the layout.
  - `scripts.js`: JavaScript file for interactive features.
- `README.md`: This file.

## Features

- **Dynamic Header Color**: The background color of the header changes every 5 seconds.
- **Interactive Main Content**: Clicking on the main content area shows an alert message.
- **Date Display**: Displays the current date in the footer.

## Building and Running

1. **Build the Docker Image**

   Build the Docker image with the following command:

   ```bash
   docker build -t my-static-website .

## Running container

docker run -d -p 80:80 --name my-static-website-container -v $(pwd)/src:/usr/share/nginx/html my-static-website


**Volume Mounting Instructions:**
   - Added the `-v $(pwd)/src:/usr/share/nginx/html` option to the `docker run` command, which mounts the local `src/` directory to the container’s Nginx directory. This setup ensures that changes made to the local files are immediately reflected in the container.

**Note: Docker volume mounting is best for practice but not in production development.**
