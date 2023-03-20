How to setup backend Locally:

Get backend API on your machine:
    - Clone the backend repo to your machine https://github.com/GeorgeHerrmann/csci4050backend

Setup MySQL Server
    - Install MySQL Workbench (latest version)
        - If at any point it asks you to make a password, make it Erasmus1! (so you don't have to change configuration on backend)
    - Install MySQL (latest version)
        - Same thing with the password
    - Once they are installed, you should probably restart your computer (I had issues getting things to work without restarting)

    - Open MySQL Workbench
        - Click on the plus to setup a new connection
        - Name it csci4050
            - You shouldn't have to change any other properties
        - Open that connection you just made
        - On the top go to Server -> Data Import
            - In the backend repo, there is a file named "csci4050.sql"
            - Select "import from contained file" and select that csci4050.sql file
            - At the bottom click "start import" (it may be hidden if the window isn't big enough)
            - Once it is done importing, on the left click "Schemas"
                - If you see "csci4050" it worked properly (you may need to refresh)
        - Now go to Server -> Startup/Shutdown
            - If it says the server is running, you are good, if not click start

    - Once the SQL Server is running, you should be able to start the backend application (from the repo you cloned)
        - Keep in mind the backend requires Java 19, so make sure you have up to date Java
        - If the backend application starts without errors, everything is good!
            - If there are errors, it is likely because it couldn't connect to the SQL Server

    - If the backend server is running without errors, then data should be moving in and out of the database when API calls are made

General flow for user data:
    - I have made a suite of API calls in the frontend for you guys to use.
        - It is difficult to test these without implementing them in the frontend, if you think there is an issue with them, let me know
            - Tsemaye is also very knowledgeable since she setup a lot of the API calls, so she may be of better help
    - Upon making a "register" API call, it will return the saved user's data upon success, or some error message upon failure
    - Upon making a "login" API call, it will return a JWT token upon success
        - You should save that JWT token in local storage to maintain a login status for a user
        - You may also want to save the user's email or username, since that's how the API will find a user's info
    - There is a "verifySession" API call, which takes in a JWT token as a parameter and returns true if it is still valid (they should still be logged in), or false if invalid (log them out)
    - You can use GetUser to get a user's profile information, this requires their email or username (hence why you should save it somewhere when they login in the form)
    - When you register a user, it doesn't save their Payment Card info.
        - You can use "AddCardById" or "DeleteCardById" to add or delete payment cards to their profile.
            - A user's Id is present in the "GetUser" API call
        
    - Though I have tested the API calls using PostMan, how they interact with the frontend may be different.
        - If you want something to be changed or if you think something isn't working with the backend or API call functions let one of us know
            - Tsemaye may be your best bet, but you can contact me (George) too and I can see what I can do.

We are on limited time, if you guys are having issues PLEASE let George or Tsemaye know and we can help you guys get on your way
    - We need a functioning frontend and backend for user data by ~4PM tomorrow