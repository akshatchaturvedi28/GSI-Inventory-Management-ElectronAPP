# GSI-Inventory-Management-ElectronAPP
Manual Inventory Management is a challenge for government organizations like GSI since they cannot provide employees with high-end software technologies.
My father works in GSI and my motive for this project was to help him with the management of machineries.
It makes easier for the admin to add machines, add people & assign inventory to people or revoke from them.

I have created a desktop application using ElectronJS framework that can work offline on any computer. The application stores data locally using MySQL server.


## Implementation
I have used ElectronJS framework to build this desktop application. Electron is used to build cross-platform desktop apps with JavaScript, HTML and CSS.

The electron library has utilities like app, BrowserWindow, Menu.

* Function *createMainWindow()* creates the main window for our application. In this function we specify the width, height and other things that we want in our window.
* Function *createAboutWindow()* creates our about window with specified width, height.
* Function *createAdminWindow()* creates our admin window with specified width, height.

During the function start-up the *app is on* which creates Main Window using above function. We build the menu using default template available in library.
The menu has elements like Home, Admin, About, Reload, and Developer Tools (if we are in developent environment).

**Database Connection**
In all our html pages we use JavaScript (in the script tags) to establish connection with our Database and run queries.
For instance in assign.html we assign machines to the individuals.
- The *getPersons()* function creates a connection with database and runs select query to display a list of persons in a tabular format.
- Similarly *getMachines()* & *getNumbers()* displays machines and machines-numbers in table.
- The *give()* function gets the value of selected person, machine and machine-number runs DELETE QUERY & INSERT QUERY in respective tables.
- In the end the *displayNotification()* function shows a notification on our desktop screen.

Tables in Database
![image](https://user-images.githubusercontent.com/41522782/125480146-4085f7f4-fb4d-4cf5-a211-2029b0efc701.png)

In the end we can use Electron Release Builds to make .exe file for application and run it with double-click.
