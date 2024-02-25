<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</p>
<p align="center">
    <h1 align="center">WPP-ASSISTANT</h1>
</p>
<p align="center">
    <em>Streamline web interactions with WPP-Assistant AI!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/thadeucbr/WPP-Assistant?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/thadeucbr/WPP-Assistant?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/thadeucbr/WPP-Assistant?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/thadeucbr/WPP-Assistant?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/OpenAI-412991.svg?style=flat&logo=OpenAI&logoColor=white" alt="OpenAI">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [Running WPP-Assistant](#-running-WPP-Assistant)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

WPP-Assistant streamlines WhatsApp interactions by integrating AI capabilities to send messages, contact owners, and manage conversations. It orchestrates webhooks, user data, and AI processing to enhance communication efficiency and user engagement. By connecting to MongoDB, OpenAI, and WhatsApp API, it enables automated message handling and AI-driven responses for seamless conversation management and user experience improvement.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | Node.js based architecture with Express for API, MongoDB for data storage, and integration with OpenAI for AI functionality. Modular design with clear separation of concerns. Centralized webhook controller for external service interactions. |
| 🔩 | **Code Quality**  | Consistent coding style, adheres to best practices. Good code readability and maintainability. Proper comments and documentation throughout the codebase. |
| 📄 | **Documentation** | Extensive documentation with code snippets, explanations, and summaries in key files like `webhook.controller.js`, `userModel.js`, and `main.js`. Readme file provides setup instructions and usage guidelines. |
| 🔌 | **Integrations**  | Integrates with MongoDB for data storage, Express for API handling, and OpenAI for AI features. External dependencies include Mongoose and OpenAI API for seamless integration. |
| 🧩 | **Modularity**    | Codebase is modular with separate files for different functionalities like handling incoming messages, user data management, and AI interactions. Encourages code reuse and easy maintenance. |
| 🧪 | **Testing**       | Testing frameworks not explicitly mentioned in the repository contents. May benefit from the addition of unit tests or integration tests for improved reliability. |
| ⚡️  | **Performance**   | Efficient architecture and code design. Utilizes asynchronous operations for improved responsiveness. Resource usage optimized through proper database interactions and AI processing. |
| 🛡️ | **Security**      | Secure handling of data with MongoDB integration. Authentication mechanisms in place for webhook interactions. Potential for further enhancements in data encryption and access control. |
| 📦 | **Dependencies**  | Key dependencies include Mongoose for MongoDB interactions, Express for API handling, and OpenAI API for AI functionalities. Development dependencies include package-lock.json. |
| 🚀 | **Scalability**   | Designed to handle increased traffic through the use of asynchronous processing, scalability potential with MongoDB for data storage, and Express for API routing. May require load testing for optimal scalability planning. |


---

##  Repository Structure

```sh
└── WPP-Assistant/
    ├── config.env.example
    ├── package-lock.json
    ├── package.json
    └── src
        ├── api
        │   ├── app.js
        │   ├── controller
        │   │   └── webhook.controller.js
        │   ├── routes
        │   │   ├── index.routes.js
        │   │   └── webhook.routes.js
        │   └── service
        │       └── findThread.service.js
        ├── config
        │   ├── mongoose.js
        │   └── openAI.js
        ├── database
        │   └── model
        │       └── userModel.js
        ├── ia
        │   ├── createMessage.js
        │   ├── createNewThread.js
        │   ├── retrieveAssistant.js
        │   └── retrieveMessage.js
        ├── main.js
        └── skills
            ├── contactOwner.js
            ├── mainAI.js
            └── sendMessage.js
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                            | Summary                                                                                                                                                                                                                                                                                               |
| ---                                                                                             | ---                                                                                                                                                                                                                                                                                                   |
| [package.json](https://github.com/thadeucbr/WPP-Assistant/blob/master/package.json)             | Code Snippet Summary:**`webhook.controller.js` processes incoming data in the WPP-Assistant repository, managing interactions with external services for handling webhook requests.                                                                                                                   |
| [package-lock.json](https://github.com/thadeucbr/WPP-Assistant/blob/master/package-lock.json)   | Code snippet-Webhook controller: Manages incoming requests for webhooks, verifying authentication and parsing data before passing to the main application.                                                                                                                                            |
| [config.env.example](https://github.com/thadeucbr/WPP-Assistant/blob/master/config.env.example) | Code in webhook.controller.js manages incoming requests from webhooks, coordinating data retrieval with findThread.service.js for streamlined communication flow in the WPP-Assistant repository. This code plays a vital role in handling external interactions within the application architecture. |

</details>

<details closed><summary>src</summary>

| File                                                                          | Summary                                                                                                                                                              |
| ---                                                                           | ---                                                                                                                                                                  |
| [main.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/main.js) | main.js` orchestrates configuration setup and API initialization for the WPP-Assistant repository, connecting to MongoDB and OpenAI before starting the application. |

</details>

<details closed><summary>src.skills</summary>

| File                                                                                                 | Summary                                                                                                                                                                                                                          |
| ---                                                                                                  | ---                                                                                                                                                                                                                              |
| [sendMessage.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/skills/sendMessage.js)   | Summary:**The `sendMessage` function in `sendMessage.js` sends a text message via HTTP POST request to a specified phone number using the provided message content. It interacts with an external endpoint for message delivery. |
| [contactOwner.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/skills/contactOwner.js) | Code Summary:**`contactOwner.js` in `WPP-Assistant/src/skills` sends a message to the owner via WhatsApp API. Involves constructing JSON payload and handling API request.                                                       |
| [mainAI.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/skills/mainAI.js)             | Summary:`mainAI.js` orchestrates AI interactions in the `WPP-Assistant` project. It processes AI responses, triggers actions, and directs interactions based on predefined criteria.                                             |

</details>

<details closed><summary>src.database.model</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                             |
| ---                                                                                                    | ---                                                                                                                                                                                                                 |
| [userModel.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/database/model/userModel.js) | File Summary: userModel.js**Defines **User** model schema for MongoDB using Mongoose. Stores user details like *name*, *contactPhone*, and *threadId*. Essential for user data management in the WPP-Assistant app. |

</details>

<details closed><summary>src.api</summary>

| File                                                                            | Summary                                                                                                                                                                                                                         |
| ---                                                                             | ---                                                                                                                                                                                                                             |
| [app.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/api/app.js) | Code snippet in src/api/app.js sets up Express server, imports routes, and listens on port 3331. This file plays a critical role in the repository's architecture by defining the server's configuration and routing structure. |

</details>

<details closed><summary>src.api.controller</summary>

| File                                                                                                                     | Summary                                                                                                                                                                                                                         |
| ---                                                                                                                      | ---                                                                                                                                                                                                                             |
| [webhook.controller.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/api/controller/webhook.controller.js) | Code Summary:**`webhook.controller.js` handles incoming webhooks to find threads and process AI tasks. Key functions are to locate threads and run AI actions for conversations in the `WPP-Assistant` repository architecture. |

</details>

<details closed><summary>src.api.routes</summary>

| File                                                                                                         | Summary                                                                                                                                                      |
| ---                                                                                                          | ---                                                                                                                                                          |
| [webhook.routes.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/api/routes/webhook.routes.js) | Summary:** `webhook.routes.js` in `WPP-Assistant` routes requests to `webhookController` via Express Router, handling webhook interactions in the API layer. |
| [index.routes.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/api/routes/index.routes.js)     | Index routes connect to webhook routes using Express Router, managing API endpoint paths efficiently in the WPP-Assistant repository architecture.           |

</details>

<details closed><summary>src.api.service</summary>

| File                                                                                                                  | Summary                                                                                                                                                                                              |
| ---                                                                                                                   | ---                                                                                                                                                                                                  |
| [findThread.service.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/api/service/findThread.service.js) | Code in `findThread.service.js` locates thread ID by phone, creates new thread if needed, and saves user details. Essential for user engagement and data management in the WPP-Assistant repository. |

</details>

<details closed><summary>src.config</summary>

| File                                                                                         | Summary                                                                                                                                                                                                                                                                            |
| ---                                                                                          | ---                                                                                                                                                                                                                                                                                |
| [mongoose.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/config/mongoose.js) | Code Summary**:In the mongoose.js file within WPP-Assistant/src/config, this code snippet establishes a connection to the MongoDB database using Mongoose, logging success or errors. This critical feature ensures seamless database connectivity in the repository architecture. |
| [openAI.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/config/openAI.js)     | Code Summary:**Enables OpenAI integration in the WPP-Assistant system by initializing OpenAI with API key and retrieving assistant details. Facilitates AI-powered features.                                                                                                       |

</details>

<details closed><summary>src.ia</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                       |
| ---                                                                                                        | ---                                                                                                                                                                                                                           |
| [createNewThread.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/ia/createNewThread.js)     | Code Summary:**In `createNewThread.js`, it imports `openAI` config to create a new thread using OpenAI's API, returning the thread's ID. This supports AI-driven conversation functionality in the repository's architecture. |
| [createMessage.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/ia/createMessage.js)         | Role**: `createMessage.js` manages AI-assisted response creation within the `WPP-Assistant` repository. It leverages OpenAI to generate messages for specified conversation threads.                                          |
| [retrieveMessage.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/ia/retrieveMessage.js)     | Role:** `retrieveMessage.js` fetches message data from OpenAI for a chat thread in the WPP-Assistant repository.**Features:** Utilizes OpenAI API to retrieve messages with a delay for efficiency.                           |
| [retrieveAssistant.js](https://github.com/thadeucbr/WPP-Assistant/blob/master/src/ia/retrieveAssistant.js) | Summary:**`retrieveAssistant.js` retrieves assistant details using OpenAI API. It plays a key role in fetching assistant information for AI functionalities in the `WPP-Assistant` repository.                                |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

###  Installation

1. Clone the WPP-Assistant repository:

```sh
git clone https://github.com/thadeucbr/WPP-Assistant
```

2. Change to the project directory:

```sh
cd WPP-Assistant
```

3. Install the dependencies:

```sh
npm install
```

###  Running `WPP-Assistant`

Use the following command to run WPP-Assistant:

```sh
node app.js
```

###  Tests

Use the following command to run tests:

```sh
npm test
```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/thadeucbr/WPP-Assistant/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/thadeucbr/WPP-Assistant/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/thadeucbr/WPP-Assistant/issues)**: Submit bugs found or log feature requests for the `WPP-Assistant` project.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/thadeucbr/WPP-Assistant
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
