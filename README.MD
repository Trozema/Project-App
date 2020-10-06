Welcome to the Project API README file.

This file will provide you with a step by step guide on how to use the API.

1.) How to install the API.

* Once the project files are stored on your computer open your command prompt and cd to the my_api/api folder. 
* Once there enter npm install.
* Once the installation is complete enter npm start.
* Open your local browser and visit http://localhost:3000/api . This will display multiple json objects in text which are projects.
* Open The Postman Application and navigate to the launchpad where you can enter an HTTP request.
* You can enter http://localhost:3000/api as a GET request which will display the same json objects that were viewed before.

2.) To add an additional Project to the API. 

* Select the POST request option at http://localhost:3000/api followed by clicking the Headers tab just below. 
* Type the key of "Content-Type" followed by the Value of "application/json". Once that is done click on the Body tab.
* Within the Body tab select raw followed by JSON in the dropdown menu to the right.
* Now you can copy this template bellow and fill in the desired text in the space provided just below.

    {
        "id": "Replace this string with a number of your choice for the ID",
        "title": "This is your Project title",
        "description": "This is your project description",
        "URL": "This is the URL to your project"
    }
* Once completed click the send button and the list will be updated with the new addition project.

3.) To edit an existing project

* Select the PUT request option at http://localhost:3000/api/ . Enter the ID number of the project you wish to change after api/ for example http://localhost:3000/api/1
* Navigate to the Headers tab.
* Type the key of "Content-Type" followed by the Value of "application/json". Once that is done click on the Body tab.
* Within the Body tab select raw followed by JSON in the dropdown menu to the right.
* Now you can copy this template bellow and fill in the desired text in the space provided just below.
* Please note that for this API only the title and description can be changed.

    {
        "title": "This is your new Project title",
        "description": "This is your new project description",
    }
* Once completed click the send button and the corresponding project will be updated with the new project information.

4.) To delete and exiting project

* Select the DELETE request option at http://localhost:3000/api/ . Enter the ID number of the project you wish to delete after api/ for example http://localhost:3000/api/1
* Click the send button and the corresponding project will be deleted.

5.) To view a selected project only

* Select the GET request option at http://localhost:3000/api/ . Enter the ID number of the project you wish to view after api/ for example http://localhost:3000/api/1
* Click the send button and the corresponding project will be displayed.

6.) What can the API do.

* This API can store project information and the information can be called accordingly using the above requests. 

