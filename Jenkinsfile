pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/arulkg17/DotNetCore_WebApi_Product_Challenge.git'
            }
        }
        stage('Build ') {
            steps {
                 script {
                echo 'Building project...'
         def projectPath4= 'https://github.com/arulkg17/DotNetCore_WebApi_Product_Challenge.git/Arul_DotNet_Core_Cjallenge_Products_WebAPI/DotNetCore_WebAPI.csproj' 

                bat "dotnet build ${projectPath4} --configuration Release" // For Windows
               // sh "dotnet build ${projectPath} --configuration Release" // For Linux or macOS
		}
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
