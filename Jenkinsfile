node("master"){
    stage("Run tests"){
        git 'https://github.com/harishrenukunta/CypressCucumber.git'
        
        sh 'npm install'
        
        sh 'npm test'
    }
    
    stage("Report using HTML publisher"){
        publishHTML (target : [allowMissing: false,
             alwaysLinkToLastBuild: true,
             keepAll: true,
             reportDir: 'cypress/reports',
             reportFiles: 'index.html',
             reportName: 'HTML Publisher Report',
             reportTitles: 'Cucumber HTML Publisher Report']);
    }
    
   
    stage('Generate UI HTML report') {
        cucumber buildStatus: 'STABLE',
              //  reportTitle: 'Cypress Cucumber HTML Report',
                fileIncludePattern: 'cypress/cucumber-json/*.json',
                trendsLimit: 10,
                classifications: [
                    [
                        'key': 'Browser',
                        'value': 'Chrome'
                    ]
                ]
    
    }
    
    stage('Generate SOAP HTML report') {
        cucumber buildStatus: 'STABLE',
                reportTitle: 'SOAP HTML Report',
                fileIncludePattern: 'cypress/cucumber-json/*.json',
                trendsLimit: 10,
                classifications: [
                    [
                        'key': 'Browser',
                        'value': 'Firefox'
                    ]
                ]
    
    }
    
}