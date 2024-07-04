# EduNEXUS

Welcome to EduNEXUS! This repository contains the source code for the EduNEXUS project, an educational platform designed to centralize and streamline access to course materials, videos, documents, and interactive content for students and educators.

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Screenshots](#screenshots)

## Project Description
EduNEXUS is a comprehensive educational platform that allows users to share, access, and manage course materials and resources. The platform aims to solve the problem of fragmented educational resources by centralizing content from various universities and professors, enabling a unified and organized learning experience.

## Features
- **Authentication:** Secure login using Google, GitHub, and email, with a secondary authentication layer for academic emails.
- **Course Management:** Users can create, edit, and share course pages with videos, documents, quizzes, and discussions.
- **Community Creation:** Users can create communities for their universities, ensuring that only authorized users can contribute.
- **Responsive Design:** A user-friendly and responsive interface for a seamless experience on any device.
- **Document and Video Viewing:** Integrated viewers for PDFs and YouTube videos within the platform.

## Technologies Used
- **Frontend:** React, Next.js, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** NextAuth.js, Auth0
- **File Storage:** Google Drive API
- **PDF Viewing:** @react-pdf-viewer/core
- **Styling:** Tailwind CSS

## Setup Instructions
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/EduNEXUS.git
    cd EduNEXUS
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Set up environment variables:** Create a `.env` file in the root directory and add the following:
    ```env
    NEXTAUTH_URL=http://localhost:3000
    MONGODB_URI=your_mongodb_uri
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    GITHUB_ID=your_github_id
    GITHUB_SECRET=your_github_secret
    AUTH0_DOMAIN=your_auth0_domain
    AUTH0_CLIENT_ID=your_auth0_client_id
    AUTH0_CLIENT_SECRET=your_auth0_client_secret
    ```
4. **Run the development server:**
    ```bash
    npm run dev
    ```
5. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

## Usage
- **Authentication:** Sign up or log in using Google, GitHub, or email.
- **Create a Community:** Navigate to the community creation page and fill out the required information.
- **Add Course Content:** Within a community, create and manage course pages by uploading documents, adding videos, and creating quizzes.
- **View Content:** Access shared course materials, documents, and videos directly within the platform.

## Contributing
We welcome contributions from the community! If you'd like to contribute to EduNEXUS, please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact
For any questions or inquiries, please contact:
- **Mouad Mennioui**
- **Email:** mouad.mennioui@example.com

## Screenshots
Below is a video demonstrating the functionality of EduNEXUS:


### Video Demo
![Video Demo](

https://github.com/mouad-suuu/EduNexus/assets/126404554/2cb1a516-2d17-48e0-ae8a-c80afda0df7f

)

