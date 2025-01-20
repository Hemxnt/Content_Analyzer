# **Content Analyzer**

![image](https://github.com/user-attachments/assets/983dd245-2151-4485-b118-b6b78682dc4d)

## **Table of Contents**

1. [Project Description](#project-description)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Architecture](#architecture)
5. [Project Setup](#project-setup)
   - [Prerequisites](#prerequisites)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
6. [Project Approach](#project-approach)
7. [Usage](#usage)
8. [Future Enhancements](#future-enhancements)
9. [Contributing](#contributing)

---

## **Project Description**

**Content Analyzer** is a web application that allows users to upload PDF files and image files (such as scanned documents) and extract text content from them. The extracted text can be used for further analysis, searchability, or content improvement. The application leverages advanced PDF parsing and Optical Character Recognition (OCR) technologies to accurately extract text while maintaining formatting.

---

## **Features**

- **File Upload**: Users can easily upload PDF and image files using a drag-and-drop interface or file picker.
- **Text Extraction**:
  - **PDF Parsing**: Extracts text from PDF files while preserving the original formatting.
  - **OCR Processing**: Utilizes OCR technology to extract text from image files.
- **Responsive UI**: A sleek, modern user interface that is responsive and user-friendly.
- **Real-Time Processing**: Displays a loading indicator during file processing and shows the extracted text upon completion.
- **Error Handling**: Provides basic error messages and handles unsupported file types gracefully.

---

## **Tech Stack**

- **Frontend**:
  - **React.js**: JavaScript library for building user interfaces.
  - **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
  - **Vite**: Next-generation frontend tooling for faster development.
  - **Axios**: Promise-based HTTP client for making API requests.
  - **React Dropzone**: Facilitates drag-and-drop file uploads.

- **Backend**:
  - **Node.js**: JavaScript runtime environment.
  - **Express.js**: Web framework for Node.js.
  - **Multer**: Middleware for handling file uploads.
  - **pdf-parse**: Library for parsing and extracting text from PDF files.
  - **tesseract.js**: JavaScript library for OCR.
  - **CORS**: Middleware for enabling Cross-Origin Resource Sharing.

---

## **Architecture**

The application follows a **client-server architecture**:

- **Frontend**:
  - **Components**:
    - `FileUpload`: Handles file selection and upload.
    - `ResultDisplay`: Displays the extracted text.
  - **State Management**: Uses React's `useState` hook to manage loading states and extracted text.
  - **API Interaction**: Communicates with the backend via Axios using RESTful API endpoints.

- **Backend**:
  - **Routes**:
    - `POST /upload`: Endpoint to handle file uploads and text extraction.
  - **File Processing**:
    - Uses `multer` to handle file uploads.
    - Determines the file type and processes accordingly:
      - **PDF**: Utilizes `pdf-parse` to extract text.
      - **Image**: Uses `tesseract.js` for OCR processing.
  - **Response**: Sends back the extracted text in JSON format.

---

## **Project Setup**

### **Prerequisites**

- **Node.js** (v14 or higher) and **npm** installed.
- **Git** installed for cloning the repository.

### **Backend Setup**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Hemxnt/content-analyzer.git
   cd content-analyzer
   ```

2. **Navigate to the Backend Directory**

   ```bash
   cd server
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start the Backend Server**

   ```bash
   node app.js
   ```

   The backend server will start on **port 5000** by default.

### **Frontend Setup**

1. **Navigate to the Frontend Directory**

   Open a new terminal window/tab:

   ```bash
   cd client
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Frontend Development Server**

   ```bash
   npm run dev
   ```

   The frontend development server will start on **port 5173** by default.

4. **Configure API Endpoint**

   Ensure that the API endpoint in `client/src/components/FileUpload.jsx` points to the correct backend URL:

   ```jsx
   axios
     .post('http://localhost:5000/upload', formData)
     // ...
   ```

---

## **Project Approach**

- **Modular Design**: The project is structured to keep the frontend and backend code separate, promoting modularity and ease of maintenance.
- **Clean Code Practices**: Emphasis on writing clean, readable code with comments explaining key functionalities.
- **Responsive UI**: Designed using Tailwind CSS to create a modern, responsive interface that works well across different devices.
- **Loading States**: Implemented loading indicators to enhance user experience during file processing.
- **Error Handling**: Basic error handling to inform users of issues like unsupported file types.
- **Performance Optimization**: Leveraged efficient parsing libraries and minimized unnecessary re-renders in React to optimize performance.

---

## **Usage**

1. **Access the Application**

   - Visit `https://content-analyzer.hemant.tech/` in your web browser.

2. **Upload a File**

   - Drag and drop a PDF or image file onto the upload area, or click to select a file from your device.

3. **Processing**

   - The application will display a "Processing..." message while extracting text from the uploaded file.

4. **View Extracted Text**

   - Upon successful extraction, the extracted text will be displayed on the screen.

5. **Upload Another File**

   - You can upload another file by repeating the steps above. Previous results will be cleared when a new file is uploaded.

---

## **Future Enhancements**

- **User Authentication**: Implement user accounts to save uploaded files and extracted texts.
- **Database Integration**: Use a database like PostgreSQL to store processed data for future reference.
- **File History**: Allow users to view a history of their processed files.
- **Advanced Error Handling**: Provide more detailed error messages and handling for different scenarios.
- **Multi-Language Support**: Extend OCR capabilities to support multiple languages.
- **Cloud Hosting**: Deploy the application to cloud platforms for wider accessibility.

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

   - Click on the "Fork" button at the top right of the repository page.

2. **Clone the Forked Repository**

   ```bash
   git clone https://github.com/your-username/content-analyzer.git
   ```

3. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes and Commit**

   ```bash
   git add .
   git commit -m "Add your message"
   ```

5. **Push Changes to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Submit a Pull Request**

   - Go to the original repository and click on "Pull Requests" to submit your changes for review.

---

**Developed with ❤️ by Hemant**

---

## **Contact**

For any inquiries or support, please contact:

- **Email**: Hemnt41@gmail.com
- **GitHub**: [YourGitHubUsername](https://github.com/Hemxnt)
- **LinkedIn**: [YourLinkedInProfile](https://www.linkedin.com/in/hemxnt)

---

## **Acknowledgments**

- **React.js** community for the powerful UI library.
- **Tailwind CSS** for the utility-first CSS framework.
- **Node.js** and **Express.js** teams for enabling efficient backend development.
- **pdf-parse** and **tesseract.js** contributors for the text extraction capabilities.

---

# **FAQ**

**Q: What file types are supported?**

A: The application supports PDF files and image files with extensions `.jpeg`, `.jpg`, and `.png`.

**Q: Is there a file size limit?**

A: Currently, there is no explicit file size limit set in the application, but very large files may impact performance.

**Q: How is my uploaded data handled?**

A: Uploaded files are processed in memory or stored temporarily during processing and are not saved or shared. The application does not persist any data.

---

# **Additional Resources**

- **Project Repository**: [GitHub - Content-analyzer](https://github.com/Hemxnt/Content_Analyzer)
- **Resume**: [Resume ](https://drive.google.com/file/d/15F6Koj8dUN6hVmklVMu5siIAAstaNjD2/view)
