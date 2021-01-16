import { Given } from 'cypress-cucumber-preprocessor/steps';
import Navigate from '../pageObjects/navigate';
const navigate = new Navigate();
Given('the user navigates to website', () => {
	const url =
		'http://www.way2automation.com/angularjs-protractor/banking/#/login';
	navigate.navigateToUrl(url);
});
