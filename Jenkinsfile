pipeline {
    agent {
        label 'docker-agent'
    }
    options {
        retry(3)  
        timeout(time: 10, unit: 'MINUTES') 
    }
    stages {
        stage('Checkout') {
            steps {
                retry(3) {
                    checkout scm
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    // Use multi-stage build with resource constraints
                    sh """
                    docker build \
                      --memory 512m \
                      --build-arg NODE_OPTIONS="--max-old-space-size=384" \
                      -t my-react-app .
                    """
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker stop react-app || true'
                sh 'docker rm react-app || true'
                sh """
                docker run -d \
                    -v /etc/timezone:/etc/timezone:ro \
                    -v /etc/localtime:/etc/localtime:ro \
                    -e TZ=Asia/Tokyo \
                    --name react-app \
                    -p 1234:80 \
                    my-react-app
                """
            }
        }
    }
}