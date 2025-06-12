# Portfolio

A React-based portfolio website.

## Deployment to DigitalOcean

This project is configured to be deployed to a DigitalOcean droplet using Docker and Nginx.

### Prerequisites

- A DigitalOcean account
- A droplet with Docker installed
- Basic knowledge of Docker and SSH

### Deployment Steps

1. **Clone the repository on your local machine**

```bash
git clone <repository-url>
cd portfolio
```

2. **Build and push the Docker image**

```bash
# Build the Docker image
docker build -t portfolio .

# Tag the image for your registry (optional)
docker tag portfolio your-registry/portfolio:latest

# Push to registry (optional)
docker push your-registry/portfolio:latest
```

3. **Deploy to DigitalOcean Droplet**

SSH into your droplet:

```bash
ssh root@your-droplet-ip
```

Pull and run the Docker container:

```bash
# If using a registry
docker pull your-registry/portfolio:latest

# Run the container
docker run -d -p 80:80 --name portfolio your-registry/portfolio:latest
```

Alternatively, you can copy the Dockerfile and nginx.conf to your droplet and build there:

```bash
# On your droplet
mkdir -p portfolio
# Copy your project files to the droplet
# Then build and run
cd portfolio
docker build -t portfolio .
docker run -d -p 80:80 --name portfolio portfolio
```

4. **Access your website**

Your portfolio should now be accessible at `http://your-droplet-ip`

### Configuration Files

- **Dockerfile**: Multi-stage build that compiles the React app and serves it with Nginx
- **nginx.conf**: Nginx configuration optimized for serving a React single-page application
