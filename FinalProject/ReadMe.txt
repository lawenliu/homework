[please submit contents of assignment as zipfile]
Wenchuang Liu
11/16/2017
CSC 436
HOMEWORK: #Final
COMPLEXITY: 6/10 LEVEL OF OVERALL 7/10 COMPLEXITY FOR HW ASSIGNMENT 
APPROXIMATION OF HOURS INVESTED IN ASSIGNMENT: 1 Week
EXPECTED GRADE: A.

Final: https://github.com/lawenliu/homework/tree/master/FinalProject
    - Angular project is used for UX of this project. (\FinalProject\Code\travel_now\)
		- ASP.NET project is the REST API to send emails. I have deploy the service to Azure, so the Angular project is using the cloud web service. We don't need care about this project for local test. (\FinalProject\Code\SendEmail\)
Trello for detail description: https://trello.com/c/jlzLcTAm/12-wenchuang-liu-final-project

DESCRIBE APPLICATION INTENT:
	The project is about to help users plan the travel based on weather information. If user want to hike somewhere, they may want to check the weather information and decide when they want to go outside. We will provide the summery of the weather information, and user and ask the bot for more details about the summary. We need user login with account and then user can use the search function and chat bot for more information.
		The project include several components:
		1. Login component. User need login to use the search function and ask chat bot more detail information about the search result.
		2. Forget password component. To mock user login, we hard-code some fake user data. User can click the "Forget Password" button to see the mock user email and password, and then login with one of them.
		3. Search Weather Component. User can search the weather information, and get the summary about the search result. User can plan their travel based on this information. We are using Yahoo weather API for weather data.
		4. Chat bot. After search the weather, if user want to get some information about search summary. User can input text in chat box and get more information about the weather information. Such as you ask "What is the weather tomorrow", then you get "sunny".
		5. About page. You can see more information about this Application in this page.
		6. Contact page. Show you how contact the developers for more information about this project.
		7. Google Analytics. We will use google analytics to track page views, feature using events.
		8. Mock data for login. For this project, we will use mock data for user login. We hard-code some user information in User service when Web Application startup.
		9. Create web service based on Rest API to send email for profile updating confirmation
Detail description for each component you can see on Trello. I will not list all of them here.

HOW TO USE
	1. Setup development environment
		- Unzip and open the folder (\FinalProject\Code\travel_now\) in command line.
		- Type "npm install" to install all the packages
		- Type "ng serve" to start service
	2. Try features
		- Open "http://localhost:4200" in browser
		- You will be redirect to "http://localhost:4200/login" login page if you are not login
		- If you don't have an account, try to click "Forget Password" button to get a hard-code account and password.
		- Input email and password and then click login, you will be redirected to Home page.
		- Home page default search result is "Chicago".
		- You can try to search different word, such as "Wisconsin". You can see different search result.
		- Click "Show Summary" button under the search result, you can see search summary. At same time the search button will become "Hide Summary"
		- Click "Message Box" button on right top corner. You can see the chat box in the right bottom corner.
		- Input some query based on the summary, you can see the result in "[]" of summary
		- You can click your user name on right top corner, and check your profile.
		- You can change and update you profile and then click "Save" button to save the result.
		- After you save profile, you can see the message on the top telling you the saving status and email sending status.
		- You can also click "Back Home" button go back to home page.
		- We need take care, because we are using hard-code for user profile, and this Angular App is one-page. If you refresh the page, all the profile will be reset.
		- You can also click the "Logout" button to logout
		- You can also check the "About" page can "Contact" page.
		- If you are input with wrong URL, you will be redirected to home page if you have logon. Or you will be redirected to login page.
	3. Check the google analytics
For more details, please check another "tutorial.pdf" file for this App.		