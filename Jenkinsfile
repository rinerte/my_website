pipeline {
    agent {
        label 'docker-agent'  
    }
    stages {
        stage('Build & Deploy') {
            steps {
                script {
                    docker.build("react-app:${env.BUILD_ID}")
                    
                    sh 'docker stop react-app || true'
                    sh 'docker rm react-app || true'
                    
                    // 3. Run new container
                    docker.run(
                        "react-app:${env.BUILD_ID}",
                        "--name react-app -p 3000:80 -d"
                    )
                }
            }
        }
    }
}