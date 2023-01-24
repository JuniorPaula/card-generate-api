# Template cards generate API

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

The application consists of  **API** to generate many links to save on pdfs cards templates.

Requirements

- Node
- npm

Clone the project and run the `npm install` command to install the dependencies.

~~~javascript
npm install
~~~

Bring up the development server using the `npm run dev` command

~~~javascript
npm run dev
~~~

Configure environment variables by creating a `.env` file in the project root, and following the example of the `.env.example` file.


## Application endpoints

## Generate a links templates
~~~javascript
[POST] /generate
~~~

## **Request body**
~~~javascript
{
	"data": [
		{
			"name": "string",
			"profession": "string",
			"email": "string",
			"phone": "string",
			"website": "string",
			"location": "string"
		}
	]
}
~~~

## **Responses**
![Generic badge](https://img.shields.io/badge/OK-200-<COLOR>.svg)

~~~javascript
[
	{
		"url": "string",
		"name": "string"
	}
]
~~~
![Generic badge](https://img.shields.io/badge/bad%20request-400-red)

~~~javascript
{
    "error": "string"
}
~~~