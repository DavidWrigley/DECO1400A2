/**
 * Javascript Code
 * Written for WET
 * Created by: David Wrigley
 */

/**
 * On page load function
 * @return {[NONE]}
 */
$(document).ready(function(){
	
	/**
	 * Initlise Slidesjs http://www.slidesjs.com (a free open source javascript
	 * image slider) Created by: Nathan Searles. 
	 * This function is called for every initlised slide
	 * @return {[NONE]}
	 */
	$(function(){
		// check to see if the slides element exists
		if ($("#slides").length){
			// bit of debug
			console.log("Found #slides Element")
			// initilise the plugin with the below settings
			$("#slides").slidesjs({
				width: 940,
				height: 600,
				navigation: false,
				play: {
					active: true,
					auto: true,
					interval: 4000,
				 	swap: true,
				  	pauseOnHover: true,
				  	restartDelay: 2500
				}
		  	});
		// if no slides element is found, print message and dont initilise
		} else {
			console.log("No #slides Element")
		}	
	});

	/**
	 * Initilises the jQuery validate pugin http://jqueryvalidation.org (a free 
	 * open source plugin for form managment and validation) Created by:
	 * Jquery foundation
	 * @return {[NONE]}
	 */
	$(function(){
		// check that the form1 element exists
		if ($("#form1").length){
			// some personal debugging
			console.log("Found #form1 Element")
			// initlise the validate plugin with the below feilds as required
			// these settings related to the form1's names for the input
			// form in contact.html
			$("#form1").validate({
				rules: {
					"firstName": {
						required: true
					},  
					"lastName": {
						required: true
					},
					"userAddress": {
						required: true,
						email: true
					},
					"subject": {
						required: true
					},
					"usermessage": {
						required: true
					}
				}
			});
		// if it does not exist then, print message and move on
		} else {
			console.log("No #form1 Element")
		}
	});

	/**
	 * Function that interprets the data-url tag embedded in each li tag
	 * of the web page, this will be used for navigating the page.
	 * written by David Wrigley
	 * @return {[NONE]}
	 */
	$("li:not(:eq(0))").click(function(){
		if($(this).data('url') == null) {
			// do nothing, as the data does not exist. This will also fire when
			// clicking on a child of a parten LI, this will switch to the
			// parents URL first, not the childs, Bad!
		} else {
			// the element contains a data-url tag
			// set the varabe
			var url = $(this).data('url');
			// debugging
			console.log(url);
			// change the page
			location.href=url+".html";
		}
	});
});