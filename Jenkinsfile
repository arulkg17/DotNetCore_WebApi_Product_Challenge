pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/arulkg17/DotNetCore_WebApi_Product_Challenge.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building project...'
		        // Business Object Layer 
                def projectPath = 'https://github.com/arulkg17/DotNetCore_WebApi_Product_Challenge.git/BOL/BOL.csproj' // Update this path as needed
                bat "dotnet build ${projectPath} --configuration Release" // For Windows

                // Data Access Layer 
                def projectPath = 'https://github.com/arulkg17/DotNetCore_WebApi_Product_Challenge.git/DAL/DAL.csproj' // Update this path as needed
                bat "dotnet build ${projectPath} --configuration Release" // For Windows

                // Business Access Layer
                def projectPath = 'https://github.com/arulkg17/DotNetCore_WebApi_Product_Challenge.git/BAL/BAL.csproj' // Update this path as needed
                bat "dotnet build ${projectPath} --configuration Release" // For Windows

		        // UI Layer 
                def projectPath = 'https://github.com/arulkg17/DotNetCore_WebApi_Product_Challenge.git/Arul_DotNet_Core_Cjallenge_Products_WebAPI/DotNetCore_WebAPI.csproj' // Update this path as needed
                bat "dotnet build ${projectPath} --configuration Release" // For Windows
                    // sh "dotnet build ${projectPath} --configuration Release" // For Linux or macOS

            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
}
