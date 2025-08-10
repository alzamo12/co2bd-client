# Project Title

*CO2BD. a PROJECT FOR EVENT MANAGEMENT WEBSITES*


## About

This application is an event management website. It helps user to to find, join and create his own websites handily. This helps user to developed the social

![Alt text describing the image](https://i.ibb.co.com/JwDvVnKM/Screenshot-150.png)


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


Project Name : CO2BD

Project Link: https://co2bd-d6f4f.web.app/

## 📦 Installation & Setup

## 🖥 Run Locally — Step-by-Step

### **Prerequisites**
Make sure you have installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Any required services for the project (e.g., MongoDB, MySQL, Firebase, etc.)

---
### **1. Clone the repository**
```bash
git clone https://github.com/alzamo12/co2bd-client
cd co2bd-client

```
## 🌱 Environment Variables
Create a `.env` file in your project root:
```env
VITE_apiKey= firebase apikey
VITE_authDomain= firebase auth domain
VITE_projectId= firebase projectId
VITE_storageBucket= firebase storageBucket
VITE_messagingSenderId= firebase messaging sender id
VITE_appId= firebase app id
VITE_STRIPE_PUBLISHABLE_KEY== strip e publishable key

```
## Installation
```
npm install 
or 
nmp i

```
## run locally
```
npm run dev
# or
yarn dev

