const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json/',
	reportPath: './cypress/reports',
	metadata: {
		browser: {
			name: 'chrome',
			version: '60',
		},
		device: 'Local test machine',
		platform: {
			name: 'mac',
			version: '16.04',
		},
	},
	customData: {
		title: 'Cypress Cucumber HTML Report',
		data: [
			{ label: 'Project', value: 'ABC Bank' },
			{ label: 'Release', value: '2.3.4' },
			{ label: 'Cycle', value: '0.13.4-RELEASE' },
			{ label: 'Execution Start Time', value: new Date().toLocaleDateString() },
			{ label: 'Execution End Time', value: new Date().toLocaleDateString() },
		],
	},
});
