pipeline {
  agent any

  tools {
    nodejs 'node-v22'
  }

  environment {
    ENV_API_CHAT_BOT = credentials('ENV_API_CHAT_BOT')
    ENV_CLIENT_CHAT_BOT = credentials('ENV_CLIENT_CHAT_BOT')
    ENV_TNS_NAMES = credentials('ENV_TNSNAMES_CHAT_BOT')
  }

  stages {
    stage('Copy .env files') {
      steps {
        script {
        def envApiContent = readFile(ENV_API_CHAT_BOT)
        def envClientContent = readFile(ENV_CLIENT_CHAT_BOT)
        def envTnsNamesContent = readFile(ENV_TNS_NAMES)

        writeFile file: './api/.env', text: envApiContent
        writeFile file: './client/.env', text: envClientContent
        writeFile file: './api/tnsnames.ora', text: envTnsNamesContent
        }
      }
    }
    stage('install dependencies') {
      steps {
        script {
          sh 'cd ./client && npm install'
          sh 'cd ./client && node --run build'
        }
      }
    }
    stage('down docker compose') {
      steps {
        script {
          sh 'docker compose down'
        }
      }
    }
    stage('copy folder instan client to api') {
      steps {
        script {
          sh 'cp -r /var/lib/jenkins/instantclient_11_2 ./api'
        }
      }
    }

    stage('run docker compose') {
      steps {
        script {
          sh 'docker compose up -d'
        }
      }
    }
  }
}
