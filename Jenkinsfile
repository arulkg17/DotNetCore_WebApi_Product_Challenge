pipeline {
    agent any
    def projectPath1 = 'https://github.com/arulkg17/DotNetCore_WebApi_Product_Challenge.git/BOL/BOL.csproj' 
    def projectPath2 = 'https://github.com/arulkg17/DotNetCore_WebApi_Product_Challenge.git/DAL/DAL.csproj' 
    def projectPath3 = 'https://github.com/arulkg17/DotNetCore_WebApi_Product_Challenge.git/BAL/BAL.csproj' 
    def projectPath4 = 'https://github.com/arulkg17/DotNetCore_WebApi_Product_Challenge.git/Arul_DotNet_Core_Cjallenge_Products_WebAPI/DotNetCore_WebAPI.csproj' 

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/arulkg17/DotNetCore_WebApi_Product_Challenge.git'
            }
        }
        stage('Build ') {
            steps {
                echo 'Building project...'
          
                bat "dotnet build ${projectPath4} --configuration Release" // For Windows
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
