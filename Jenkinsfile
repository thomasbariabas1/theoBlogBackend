pipeline {
  agent {
    node {
      label 'node'
    }

  }
  stages {
    stage('Npm install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Deploy') {
      steps {
        sh 'sudo ./script/deploy'
      }
    }

  }
}