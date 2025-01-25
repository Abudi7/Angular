# Real Estate Application

## Developer: Abdulrhman Alshalal

Welcome to the Real Estate Application project. This is a modern web application built using Angular, Angular Material, and various frontend technologies. The application aims to provide an interface for users to manage and browse real estate listings with a smooth user experience, including features like registration, login, and language selection.

## Features

- **User Registration & Login**: Users can register and log in to the platform.
- **Language Toggle**: Supports English and Arabic, allowing users to switch between languages easily.
- **Responsive Design**: The layout adapts to all screen sizes, ensuring a consistent experience across devices, including mobile.
- **Navigation**: A responsive navigation bar with a burger menu for mobile devices.
- **Angular Material**: Used to style forms, buttons, and inputs with a modern look.

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Angular CLI**: To install Angular CLI globally, run:
  ```bash
  npm install -g @angular/cli
  ```

### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Abudi7/Angular
   ```

2. **Navigate to the project directory**:
   ```bash
   cd real-estate
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   ng serve
   ```

   After running the above command, open your browser and visit `http://localhost:4200` to see the application in action.

## File Structure

```
real-estate-app/
  ├── src/
  │   ├── app/
  │   │   ├── login/
  │   │   ├── home/
  │   │   ├── header/
  │   │   ├── services/
  │   │   ├── app.component.ts
  │   │   ├── app.component.html
  │   │   └── app.config.ts
  │   └── assets/
  ├── package.json
  ├── angular.json
  └── README.md
```

## Developer Notes

- **Abdulrhman Alshalal** worked on implementing core features such as user authentication, language switching, and the responsive navigation bar.
- The project aims to provide a seamless experience for users who are browsing real estate listings, with a special focus on responsiveness and internationalization (Arabic and English).
- For further enhancements, you can consider adding features like property listings, filtering options, and a messaging system for users.


# Histroy 
## What We Did Today 25.01.2025

### 1. **Login Functionality**:
   - We implemented the login functionality using Angular and a custom `ApiService`. The user enters their credentials (email and password) and submits them for authentication.
   - Upon successful login, the user’s information is saved in `localStorage` for session management, and the user is redirected to the homepage.

### 2. **Responsive Navigation Bar**:
   - We created a responsive navigation bar that works across different screen sizes.
   - A burger menu was added for mobile devices to keep the interface clean and user-friendly.
   - The navbar shows the logged-in user’s email once they are authenticated.
   
### 3. **Language Toggle**:
   - We added a language selection feature to switch between English and Arabic. The language preference is saved and applied throughout the application.
   - We ensured the page direction changes dynamically based on the selected language (right-to-left for Arabic and left-to-right for English).

### 4. **Angular Setup**:
   - The application was set up with Angular and Angular Material components.
   - We integrated `FormsModule`, `MatFormFieldModule`, `MatInputModule`, and `MatButtonModule` to style and manage forms and inputs efficiently.
   - We ensured smooth integration with `HttpClientModule` to handle HTTP requests for user login.

### 5. **JavaScript and CSS Styling**:
   - We used CSS/SCSS for styling, ensuring the layout is attractive, functional, and works seamlessly across different devices and screen sizes.
   - Custom JavaScript was added for dynamic features like the burger menu and language switching.

---
