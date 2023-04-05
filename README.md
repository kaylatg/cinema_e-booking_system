There are a few important things to note to complete Deliverable 7 for Frontend.

PLEASE READ THE WHOLE README, THERE IS IMPORTANT INFORMATION HERE

IMPORTANT: Make sure the frontend and backend repos are UP TO DATE!!! (your backend repo should be on main)

First, make sure you have the backend setup on your local machine
    - The MySQL Database has changed, it must be updated.
    In order to update the database:
        - Open your server instance on MySQL workbench
        - On the left side of the window navigate to "schemas"
            - Right click 'csci4050'
            - Click 'drop schema'
            - Click 'drop now'
        - Go to the top and click server, the data import
            - Select import from self contained file
            - Select the new csci4050.sql file from the backend repository
            - Click start import


Next, run the backend server. If it starts with no errors you should be good
    - If there are errors, check the application.properties file and make sure the password is what your MySQL password is

Run the frontend React website
    - Note, since you reset the database, you will have to make a new account
    - You can access an Admin view by logging in to your account and going to your profile page. There you can click "Switch to Admin View"
    - IMPORTANT: In order to do basically anything, a configuration for Theatres and Showrooms must be done for the backend.
        - Any time you reset the database, this configuration is reset. You must set it up again by:
            - Going to the Admin View
            - Going to the Admin Home page
            - Clicking on "Setup Theatre Configuration"
        - If you see "theatre configuration successful" it worked and now the site should work properly

All pages for this deliverable (AdminHome, AdminAddMovie, AdminAdjustMovie, AdminMovies, AdminPromos, Home, Showtimes) should be functional, though the frontend UI needs work
    - On each page there will be comments detailing how to access certain data members (if necessary) as well as frontend changes that need to be made
        - Additional frontend changes may need to be made in accordance with the Deliverable Requirements, make sure they are all hit

FRONTEND CHANGES THAT NEED TO BE MADE (not everything)
    - AdminPromos needs to be updated to include all relevant fields.
        - The forms should use the refs I have made on that page, once the form is updated and the refs are on the form that should work fine\

    - Showtimes.js needs to be updated to show all relevant movie information
        - I have left detailed comments on that page, read those

    - An error message needs to be displayed on AdminAdjustMovie if scheduling a showtime failed (likely because a show at the existing time already exists)
        - Check the comments for how to access the error message so you can display it on the UI

    - Form validation (making sure all fields were input, etc), needs to be done for various forms for admin stuff

    - Overall fluidity needs improvment (navigating to different pages on successful movie creation, etc)
        - On each page I have left comments about where in the code things should be done on successful inputs (movie creation, showtime scheduling, etc)
        - You can use this to write frontend code on sucess or failure for stuff

ANY QUESTIONS, PLEASE CONTACT GEORGE. I will respond quickly if you guys run into any hiccups. The deliverable is mostly done at this point just needs frontend cleanup basically

THANKS!!!!!!!!!