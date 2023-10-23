# os-tweets-gql-api

**GQL API providing data for Tweet analytics**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a GraphQL API that provides data for Tweet analytics. It's built using TypeScript and powered by various technologies including Apollo Server, Prisma, and MongoDB.

## Table of Contents

- [os-tweets-gql-api](#os-tweets-gql-api)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Development](#development)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

```bash
git clone <repository-url>
cd os-tweets-gql-api
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

4. Set up your environment variables by creating a `.env` file and configuring it.

5. Start the application:

```bash
npm start
```

## Usage

After installation, the GraphQL API will be accessible at `http://localhost:<port>/graphql` where `<port>` is the port you configured in your environment variables.

You can use tools like [Apollo Studio](https://www.apollographql.com/docs/studio/) or [GraphQL Playground](https://github.com/prisma/graphql-playground) to interact with the API.

## Development

If you want to contribute to this project or run it in a development environment, you can use the following scripts:

- Start the development server with auto-reloading:

```bash
npm run dev
```

- Generate Prisma client code:

```bash
npm run generate:prisma
```

- Generate TypeScript types and resolvers using GraphQL Codegen:

```bash
npm run codegen
```

## Testing

To run tests, use the following command:

```bash
npm test
```

We use Jest for testing, and you can add your test cases to the `__tests__` directory.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them.
4. Push your changes to your fork and submit a pull request.

Please ensure your code follows the project's coding standards and is well-documented.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify the content and structure of this README to better suit your project's needs. Replace `<repository-url>` with the actual URL of your Git repository.
