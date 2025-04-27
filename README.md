# FoodGrade - Authenticity Verification for Food Labels

## Project Overview
FoodGrade is a web-based platform designed to verify the authenticity of manufacturing and expiration dates on packaged food products. It aims to address the growing concerns surrounding food safety, consumer protection, and the need for greater transparency in the food industry. By inputting specific information from food packaging, such as barcode numbers, lot codes, and date markings, FoodGrade cross-references this data with a trusted, up-to-date database of valid manufacturing and expiration dates.

## Features
- **Product Label Verification**: Users can input barcode numbers, lot codes, and date markings to verify the legitimacy of food labeling.
- **Consumer Protection**: Helps consumers avoid purchasing expired or incorrectly labeled products.
- **Retailer/Distributor Support**: Retailers and distributors can verify the accuracy of their stock to reduce liability and maintain consumer trust.
- **Transparency in the Food Industry**: Encourages manufacturers to maintain honest labeling practices, promoting transparency and accountability.
- **Reduces Food Waste**: Ensures that products are consumed within their optimal quality period, minimizing unnecessary food waste.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript (React.js for dynamic rendering)
- **Backend**: Node.js (Express.js)
- **Database**: MySQL or PostgreSQL
- **API Integration**: Integration with food safety databases for real-time label verification
- **Authentication**: JSON Web Tokens (JWT) for user authentication
- **Error Handling**: Alerts and notifications for discrepancies between user input and verified data

## Motivation
The motivation behind the FoodGrade project is to provide a reliable solution to consumers, retailers, and distributors for ensuring the accuracy of food label information. With millions of packaged food products being sold globally, it is critical to ensure that date markings on packaging are accurate to prevent health risks, reduce food waste, and foster greater trust between the food industry and consumers.

## Problem Statement
Consumers face significant challenges when it comes to ensuring the accuracy of manufacturing and expiration dates on packaged food products. Misleading or incorrect labeling can lead to the consumption of unsafe food. In addition, fraudulent practices in the food supply chain contribute to a lack of transparency, which reduces consumer trust. FoodGrade addresses these issues by offering a comprehensive, real-time verification platform.

## Project Structure
foodgrade-project/ ├── backend/ │ ├── config/ # Database configuration │ ├── controllers/ # Business logic for handling user requests │ ├── models/ # Data models for database structure │ ├── routes/ # API endpoints for client-server communication │ ├── server.js # Main entry point for the server │ └── utils/ # Utility functions (e.g., error handling) ├── frontend/ │ ├── public/ # Static files (e.g., index.html, images) │ ├── src/ │ │ ├── components/ # React components │ │ ├── pages/ # Different pages like home, verification, about │ │ ├── App.js # Main React component │ │ └── index.js # Entry point for React app ├── .gitignore # Files/folders to be ignored by Git ├── package.json # Project dependencies and scripts └── README.md # Project documentation

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MySQL or PostgreSQL (for database)
- A code editor (e.g., VS Code)
- npm or yarn (for dependency management)

### Installation

#### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/foodgrade.git
cd foodgrade
# For backend
cd backend
npm install

# For frontend
cd frontend
npm install
cd backend
npm start
cd frontend
npm start
DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=foodgrade
SECRET_KEY=your-secret-key-for-jwt
