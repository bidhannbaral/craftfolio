
# Set up your environment

### 1. Clone the Reposotory
~~~
git clone git@github.com:bidhannbaral/craftfolio.git
cd craftfolio
~~~

### 2. Install Prerequisites
Make sure you have Node.js (v18 or later) installed:
- Node.js: Download and install from https://nodejs.org/ or use a version manager like nvm
~~~
# Verify installations (run in terminal)
node --version
~~~

### 3. Install Project Dependencies
~~~
# run in terminal
npm install
~~~

4. Test
~~~
# run in terminal
npm run dev
# click on the link in the terminal to view your website
~~~

# How to make changes

### 1. Create a new branch
~~~
# change "feature-name" with a different name
git checkout -b feature/feature-name
# then run this command
git branch
# you should see 2 things one "main" and another one "feature/feature-name" with the name you created
# now you can make changes to the code
~~~

### 2. Push to the reposotory
~~~
# make sure that you are in the branch you created with the feature/feature-name
# even if you close your computer if you were on that branch you should stay on that branch when you open your computer again
# if you are unsure run the command
git branch
# the branch you are on is highlighted in green and there is a star to the left of it's name
# now to push the changes run
git add .
# then do 
git commit -m "message"
# replace message with a message then do
git fetch origin
# then run 
git rebase origin/main
then finally run this where feature/feature-name is replaced with the name of the branch you created so feature/(the name you created)
git push -u origin feature/feature-name
~~~

### 3. Create pull request

Once you run the last command then a link should pop up in your terminal.
Click that link and it will take you to a github pull request.
There you can describe the changes you made and submit.
Then I will review it and either tell you to make more changes or merge it with the main branch.

### 4. How to get the latest updates from the reposotory

~~~
# make sure you are in the main branch
# if unsure run the command
git branch
# to see what branch you are in and if it is not the main branch then run this command
git checkout main 
# run git branch again and now you should be in the main branch
# IMPORTANT: WHEN YOU SWITCH BRANCHES YOU WILL ALWAYS BE IN THAT BRANCH UNTILL YOU SWITCH TO ANOTHER BRANCH
# YOU DO NOT WANT TO MAKE CHANGES IN THE MAIN BRANCH. ONLY MAKE CHANGES IN ANOTHER BRANCH
# YOU CAN CREATE AS MANY feature/feature-name branches but use different names.
# TO CHANGE BRANCHES JUST DO
git checkout (name of the branch)
# and finally when you are in the main branch and you want to pull the latest changes from the reposotory
# let's say i made changes and you want them on your computer then you run the command in the main branch
git pull
