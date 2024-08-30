# Anime Interest Floor Landing Page
[Link to the website](https://sonicfires2.github.io/landing-page-aif/)

Random changes

# Getting Started 
0. Make sure you have [Node installed](https://nodejs.org/en/download/). 
1. Clone the repository.
2. Go into the local repository.
3. Run `npm install`
4. Run `npm start`

# To update the remote codebase on GitHub
Switch to desired branch with
```
git checkout [branch-name]
```
And then commit your changes:
```
git add .
git commit -m "your message here"
git push origin main
```

# Updating the Project to Production
1. ## Build the Project
Once you've made the necessary modifications and tested them, build the project with (Note, this will reset the page title, if you want to change the page title again after Deploy, change directly in the GitHub page index.html and/or manifest.json):
```sh
npm run build
```

2. ## Deploy the project
After pushing your changes, deploy the project using:
```sh
npm run deploy
```

3. ## In the worst case scenario when npm run deploy doesn't work
If ```npm run deploy``` doesn't work for some reason, then try these in the master branch:
```
npm run build
git add -f build 
git commit -m "Deploying to gh-pages"
git push origin `git subtree split --prefix build master`:gh-pages --force
``` 