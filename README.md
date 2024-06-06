# TestHaven

I am writing a new application called TestHaven for ingesting 
test results for various teams applications. I want this to 
utilize a microservices approach with a React user interface 
and microservice specific PostgreSQL database(s). Documentation 
is to be done as code using Struturizr and each microservice 
should be Dockerized. More over all components will be created 
in a monorepo favoring JavaScript/TypeScript and there will be 
a docker compose file at the root to spin everything up for 
rapid development.

## Conventional Commits

I will be using Conventional Commits for my commit messages.

## High Level Plan

1. Set up a monorepo structure.
2. Create a separate directory for each microservice and the React UI.
3. Each microservice will have its own Dockerfile and PostgreSQL database.
4. The React UI will also have its own Dockerfile.
5. Create a docker-compose.yml file at the root of the project to orchestrate all the services.
6. Use Structurizr for documentation as code.

### Basic Directory Structure

```text
/TestHaven
  /microservice1
    Dockerfile
    /src
    /db
  /microservice2
    Dockerfile
    /src
    /db
  /ui
    Dockerfile
    /src
  docker-compose.yml
```

Each Dockerfile will contain instructions to build the Docker image
for the specific service.

For a Node.js based service, it might look like this:

```Dockerfile
FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]
```

The docker-compose.yml file at the root of your project will be
used to spin up all your services.  It might look like this:

```yaml
version: '3'
services:
  microservice1:
    build: ./microservice1
    ports:
      - 8081:8080
    volumes:
      - ./microservice1:/usr/src/app
    depends_on:
      - db1
  microservice2:
    build: ./microservice2
    ports:
      - 8082:8080
    volumes:
      - ./microservice2:/usr/src/app
    depends_on:
      - db2
  ui:
    build: ./ui
    ports:
      - 3000:3000
    volumes:
      - ./ui:/usr/src/app
  db1:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example
  db2:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example
```

This is a very basic setup and you'll need to adjust it according to
your needs.  For example, you might want to add environment variables,
link the databases to services, etc.

## Best Practices for Structuring a Monorepo for JavaScript/TypeScript projects

1. Directory Structure: Organize your codebase in a logical and consistent manner. Each package (microservice or UI in your case) should have its own directory. Commonly used libraries can be placed in a shared directory.  
2. Package Management: Use a package manager that supports monorepos, like Yarn Workspaces or Lerna. These tools make it easier to manage dependencies and scripts across multiple packages.  
3. Code Sharing: Extract common code into separate packages to avoid duplication. This can include utility functions, components, types, etc.  
4. Independent Versioning: If using Lerna, consider using independent versioning. This allows you to update and publish packages independently of each other.  
5. TypeScript Configuration: Use project references in your tsconfig.json to speed up TypeScript compilation. Each package should have its own tsconfig.json, and there should be a root tsconfig.json that references all packages.  
6. Testing: Each package should be responsible for its own tests. Consider using a testing framework that supports monorepos, like Jest.  
7. Continuous Integration: Set up your CI pipeline to build, test, and deploy each package independently.

Here's an example of what your directory structure might look like:

```text
/TestHaven
  /packages
    /microservice1
      /src
      /tests
      package.json
      tsconfig.json
    /microservice2
      /src
      /tests
      package.json
      tsconfig.json
    /ui
      /src
      /tests
      package.json
      tsconfig.json
  /shared
    /utils
      /src
      package.json
      tsconfig.json
  package.json
  tsconfig.json
  lerna.json
  docker-compose.yml
```


## References

* [C4 Model](https://c4model.com/)
* [Structurizr](https://structurizr.com/)
* [Lerna](https://lerna.js.org/)
* [Conventional Commits](https://www.conventionalcommits.org/)
* [Conventional Commits Cheat Sheet](https://gist.github.com/Zekfad/f51cb06ac76e2457f11c80ed705c95a3)