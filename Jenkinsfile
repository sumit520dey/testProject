/**
 * Defines a pipeline template (as a sample with one job parameter 
 * that should be common for all pipelines)
 */
def createMyStandardDeclarativePipeline(Map templateParams) {   

    pipeline {
        agent any
        stages {
            stage('Build one') {
                steps {
                    script {
                        echo "Execute our code from here " 
			chmod 777 build1.sh
			sh build1.sh
                    }
                }
            }
            stage('Stage two') {
                steps {
                    script {
                        echo "Execution completed " 
			chmod 777 test.sh
			sh test.sh
                    }
                }
            }
        }
    }
}
