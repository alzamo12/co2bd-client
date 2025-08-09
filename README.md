# Project Title

*CO2BD. a PROJECT FOR EVENT MANAGEMENT WEBSITES*


## About

This application is an event management website. It helps user to to find, join and create his own websites handily. This helps user to developed the social

## Features

* User registration and login (Firebase Auth)
* Profile update (display name & photo URL)
* Protected routes
* Event management: create, update events
* Date picker and validation logic
* Loading spinners and toast notifications
* Social login (e.g., Google, Facebook)
* Theme customization
* Input form validation
* User will be able to see joined events data
* Apply of JWT token
* Log out in unauthorize or forbidden access

## Tech Stack

* **Frontend:** React, React Router, React Hook Form, tanstack Query, Tailwind CSS, daisyui, react-datepicker,
* **Backend:** Firebase Authentication, Express.js, Mongodb, Firebase-admin
* **HTTP:** Axios (with a secure instance)
* **Notifications:** React-Toastify, SweetAlert2
* **Deployment:** Frontend: Firebase,
                  Backend: Vercel

## Folder Structure

```bash
├── public                 # Static files and HTML template
├── src
│   ├── assets             # Images, icons, fonts
│   ├── components         # Reusable UI components
│   ├── firebase         # Reusable UI components
│   ├── hooks              # Custom React hooks (useAuth, useAxiosSecure)
│   ├── layouts              # layouts
│   ├── pages              # Route-based page components (Register, Login, Home, EventEditor)
│   ├── Providers           # API calls and Firebase config
│   ├── routers            # React Context providers (AuthContext)
│   ├── index.css             # Global styles and Tailwind config
│   ├── main.jsx          # Entry point
│   └── ...
├── .env                   # Environment variables
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation (this file)
```


## Configuration

Create a `.env` file in the root and add the following:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```


Project Name : CO2BD

Project Link: https://co2bd-d6f4f.web.app/

## 📦 Installation & Setup

1️⃣ **Clone the Repository**
```bash
git clone https://github.com/alzamo12/co2bd-client
cd richter-restaurant-backend
