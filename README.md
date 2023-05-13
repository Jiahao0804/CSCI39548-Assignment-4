Github username: Jiahao0804
<br>

Link to the GitHub repository: https://github.com/Jiahao0804/CSCI39548-Assignment-4
<br>

Link to the GitHub Pages website: https://jiahao0804.github.io/CSCI39548-Assignment-4/
<br>

Assignment link: https://gist.github.com/johnnylaicode/fa39c3ad74b6ee902fadf1cf35c54eb2
<br>
<br>

GOAL
<br>
The goal is to offer students the opportunity to gain experience in React application development by:

Learning about client-side routing
<br>
Adding client-side routing to React applications using React Router
<br>
Setting up React Router to enable common browser behavior
<br>
Utilizing built-in React Router components (Route, Router, Link, and Redirect)
<br>
Working with common React features such as components, state, props, event handlers, etc.
<br>
<br>

Client-Side Routing
<br>
On the server, routing (i.e., server-side routing) generally refers to the way we define the URLs and RESTful resources that make up our application. Whether we are retrieving data from the database or storing data, our server needs to know where the data lives. Server-side routes can help us keep track of this information.
<br>

On the client, i.e., in the web browser, things are a little different. When we build a Single-Page Application (SPA) using React, we create only a single HTML page (index.html) to render data inside of the web browser. Client-side routing is the technique used to give users the impression of navigating between multiple web pages, by fetching different data from the server and rendering different views in the same single HTML page. This process is done on the client using JavaScript. Client-side routing is how we describe which views are displayed on the web page at any given time.
<br>
<br>


React Router
<br>
Although the basic React library doesn't have the capability to handle client-side routing, there are other libraries available to handle this specific task. The most popular library for client-side routing is called React Router. Checkout the official documentation.
<br>

React Router allows us to use familiar routing patterns instead of writing complicated if-statements in JavaScript.
<br>
<br>

Implementing Client-Side Routing
"Bank of React" Application
To demonstrate the power of React Router and client-side routing, we are going to build a simple personal banking application called Bank of React, where we can independently display the Credits and Debits made to each bank account.
<br>

The bank website consists of the following web page views that render different data:
<br>

Home
User Profile
Login
Credits
Debits
<br>

We are going to implement client-side routing to display different web page views. When users visit the bank website, they will be greeted by the Home page view. From there, they can navigate to different web page views; e.g., User Profile, Login, Credits, Debits, and of course Home.
<br>
<br>


Purpose
<br>

In the following sections, we will build out parts of the Bank of React application, such as Home, User Profile, and Login page views. During the process, we will discuss some key features of React and create components that can be applied in Assignment 4.
<br>

In Assignment 4, you will implement the Credits and Debits page views.
<br>


# bank-of-react-example-code-gh-pages
This repository is the starter code for Assignment 4 - Bank of React.

### Live Link 
[Website link](https://johnnylaicode.github.io/bank-of-react-example-code-gh-pages/)

----------
### 1. Use the following process to ***import*** the Assignment 4 starter code repository to your GitHub account as your starter codebase
1.	Log on to GitHub
2.	Click on the + sign in the top right corner (next to the user icon)
3.	In the dropdown menu, select "Import repository"
4.	A new page will open
5.	In "Your old repository’s clone URL" field, enter: `https://github.com/johnnylaicode/bank-of-react-example-code-gh-pages`
6.	In "Your new repository details" field, enter your own repository name (e.g., "assignment-4")
7.	Click on the "Begin import" button to start the process
8.	After the process completed, your new "assignment-4" repository is created – as a completely independent codebase
9.	From this point on, you can clone your new repository, make changes, create feature branches, and create/merge pull requests

----------
### 2. Use the information below to ***clone*** the starter codebase to your local machine
After creating the starter codebase "assignment-4" repository on GitHub (see above), you can clone it to your local machine. The instructions on how to clone a GitHub repository are available at this [link](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

----------
### 3. Use the following commands to run the application

- First, run this command to install dependencies:
```npm install```
- Next, run this command to start the React application:
```npm start```

Note: This application uses React Router version 5 and should be compatible with later versions of React Router. 
If you encounter problems with a later version of React Router, you can specifically install React Router version 5 using the following command:
```npm install react-router-dom@5.3.0 react-router@5.2.1```

----------
### 4. Set up and deploy a React application to GitHub Pages
#### 1. Create a React Application
1. If you don't already have an existing React application on your local machine, you can create a new React application (e.g., "my-react-app").

    Optionally, you can clone the "bank-of-react-example-code-gh-pages" repository to your local machine and re-name it "my-react-app."
2. Start a terminal (e.g., Git Bash) on your local machine.
3. Go to the "my-react-app" folder.
4. All the following steps are performed inside the "my-react-app" folder. 

#### 2. Add "basename" to Router Tag in "App.js" File
1. In the `App.js` file, located inside the `src` folder, make sure that you add the `basename` path in the `<Router>` tag using the format: `<Router basename="/[repository name]">`
2. For the "my-react-app" application, it should be: `<Router basename="/my-react-app">`

#### 3. Install "gh-pages" Package
1. Install the `gh-pages` package on your local machine by entering the following command in the terminal: `npm install gh-pages --save-dev`
2. The installation automatically adds the `gh-pages` version number in the "dependencies" section of the `package.json` file.

#### 4. Add "homepage" Property in "package.json" File
1. In the `package.json` file, add a `homepage` property using the format: `https://[your GitHub username].github.io/[repository name]`
2. For the "my-react-app" application, it should be:`"homepage": "https://[your GitHub username].github.io/my-react-app/",` 
    ```
    {
    "name": "bank-of-react",
    "version": "0.1.0",
    "homepage": "https://[your GitHub username].github.io/my-react-app/",
    ...
    }
    ```

#### 5. Add Deployment Scripts in "package.json" File
1. In the `package.json` file, add `predeploy` and `deploy` properties to the "scripts" section as follows:
    ```
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
    ...
    ```

#### 6. Add "remote" to Local Repository Pointing to GitHub Repository
1. Add a `remote` to the local repository by entering the following command in the terminal, using the format: `git remote add origin https://github.com/[your GitHub username]/[repository name].git`
2. For the "my-react-app" application, it should be:`git remote add origin https://github.com/[your GitHub username]/my-react-app.git` 

#### 7. Deploy React Application to GitHub Pages
1. Deploy the "my-react-app" application to GitHub Pages by entering the following command in the terminal: `npm run deploy`
2. Open a web browser, go to the following address to see your React application on GitHub Pages: `https://[your GitHub username].github.io/my-react-app/` 
