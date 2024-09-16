# Email Sender
## _Send predefined e-mails from different Clients in an __Easy Way___

All registered clients will be able to send emails, just by hitting this API, with the correct token. 

The API identifies the client and according to the type of message to send, it will select one of the preloaded templates.

👉 API used by app mobile _ADA - Entrenamiento Auditivo_, available in [Android](https://play.google.com/store/apps/details?id=com.entrenamiento_auditivo) and [iOS](https://apps.apple.com/uy/app/ada/id1636156710?l=es). 

## 🛠 Features

- Allows to generate new tokens for clients. For each app that wants to send emails through this API, a token will be generated
- You have the option to send an email with one of the preloaded templates, or simply send a new email with a subject and body

> Anyone can access the endpoints of this API,
> but only clients with the correct token
> will be able to send emails

## ⚙️ Tech

Specifications:

- [NodeJS](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nodemailer](https://nodemailer.com/about/)

## 💻 Installation

Running `npm run` can access to the scripts.

```sh
npm install

# test
npm run test:watch

# dev environment
npm run dev 

# prod environment
npm run start
```

#### Initialize .env file
Create .env file in the root of the project:

```
NODE_BCRYPT_SALT_ROUNTDS=
NODE_SECRET_JWT=
NODE_API_KEY=

# app configuration
HOST=
PORT=

# Client: CUSTOMER_1
CUSTOMER_1_EMAIL=
CUSTOMER_1_EMAIL_PASS=
CUSTOMER_1_EMAIL_HOST=
CUSTOMER_1_EMAIL_PORT=

# Client: CUSTOMER_2
# ...
```

## 👨‍💻 Example

#### Endpoints

| Endpoint | Method | Params | Specification |
| ------ | ------ | ------ | ------ | 
| /api/client/ | GET | ClientType, Name [API Key required] | Return a new token, to be used by ClientType |
| /api/email/ | POST | SenderName, To, Subject, PreExistingTemplate, Link [Token required] | Send email from ClientType (got from token, email specified in .env) |

#### New client
Each new client must be added to the API in the following way:

- Add client type in src/enums/clientType.ts
- Add type of emails (templates) in src/enums/preExistingTemplate.ts
- Add new templates in src/template
- Add client data in .env file
    - CUSTOMER_1_EMAIL
    - CUSTOMER_1_EMAIL_PASS
    - CUSTOMER_1_EMAIL_HOST
    - CUSTOMER_1_EMAIL_PORT
- Add new client data in src/utils/envServices.ts
- Add new client templates in src/utils/template.ts
- Hit `/api/client/ (GET)` with the `API Key` specified in .env to get new client `token`

## ⚡️ Development

Soon the idea will be to store data, in this way new clients can be added simply through an endpoint, without the need to modify the API. It will be necessary to add templates, if needed.

