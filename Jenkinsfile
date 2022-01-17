/**
 * Defines a pipeline template (as a sample with one job parameter 
 * that should be common for all pipelines)
 */
def createMyStandardDeclarativePipeline(Map templateParams) {   

    pipeline {
        agent any
/**        parameters {
            string(name: 'myInput', description: 'Some pipeline parameters')
       } */
        stages {
            stage('Build one') {
                steps {
                    script {
                        echo "Execute our code from here " 
			chmod +x build1.sh
			sh build1.sh
                    }
                }
            }
            stage('Stage two') {
                steps {
                    script {
                        echo "Execution completed " 
			chmod +x test.sh
			sh test.sh
                    }
                }
            }
        }
    }
}
