# MERN_STACK_BLOG_APP



## Description

This project is a web application that helps the user to read , add delete and update their blogs. It utilizes ReactJS for the frontend, Node.js and Express for the backend, and MongoDB for the database. .

The application allows users to register and authenticate securely. Once authenticated, users can upload their images, and other content regarding blog from their account to the application.

## Features

- User authentication: Secure registration and login system.
- Add blog : helps user to create their own blog
- Categories: Helps user to find blog according to categories.
- Database integration: Stores user data and blogs  in MongoDB.
- Responsive design: Frontend is built using ReactJS, ensuring a seamless experience across devices.

## Installation

1. Clone the repository:<br>

- git clone https://github.com/username/BLOG-WEB_APPLICATION_MERN_STACK
.git<br>

2. Install dependencies for frontend and backend:<br>
- cd BLOG-WEB_APPLICATION_MERN_STACK
/frontend <br>
- npm install<br>

- cd ../backend <br>
- npm install


3. Configure environment variables:

   - Create a `.env` file in the `backend` directory.
   - Define the following variables:
     ```
     MONGO_URL = your_monogo_url
JWT_SECRET_KEY = your_secret_key
JWT_REFRESH_SECRET_KEY =refresh_secret_key
DB_NAME = database_name that you want to provide
COMPANY_EMAIL = your company email

CLOUDINARY_CLOUD_NAME= cloud_name
	
CLOUDINARY_API_KEY = your_api_key

CLOUDINARY_API_SECRET = your_secret
     ```

4. Start the frontend and backend servers:

cd ../frontend<br/>
npm run dev

cd ../backend<br/>
npm run dev

## Usage

1. Register or log in to the application.
2.Add your blog
3. Wait for the system to upload blogs.
4. Browse through other blogs.

## Technologies Used

- ReactJS
- Node.js
- Express
- MongoDB
-tailwindcss

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes we are happy to accept your contributions.

## Contact

For any inquiries or support, please contact [Aditya Jaiswal](mailto:b22cs025@iitj.ac.in).
