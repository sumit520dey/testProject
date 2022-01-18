pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		echo "Execute our code from here "
		//chmod 777 build1.sh
		./build1.sh
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
		echo "Execution completed "
		//chmod 777 test.sh
		./test.sh
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
