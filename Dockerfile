# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install backend dependencies
RUN npm install

# Install frontend dependencies and build
RUN npm install --prefix frontend
RUN npm run build --prefix frontend

# Set environment
ENV NODE_ENV=production
ENV PORT=5000

# Expose port
EXPOSE 5000

# Start server
CMD ["node", "backend/server.js"]
