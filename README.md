# FeastBeast
Finding you food, bro. [feastbeast](jarodgodlewski.com)
### Usage:

Sometimes the website will tell you that it is not secure when you first visit it. It happened for me but did not happen for my friend.

If it does happen, to view the solution please click the advanced options pull down on that error page and continue to the website anyway. 

---

**Requirements:**

This program uses:

1. Node.js v3.10.3
2. Bower v3.3.6
3. Angular v1.4.3
4. Bootstrap v3.3.6

---

**Installation:**

In case the website is not up, the solution can be viewed by:

1. Moving the files from the master branch into a folder on your machine.
2. Traversing to the ui folder of the program in your command line.
3. After you type these commands the website should pop up in your default browser:
   * npm install
   * npm install -g bower
   * npm install -g gulp
   * gulp spinup
  
---

**Description:**

This website was a submission for the coding challenege put out by CapitalOne for second round Software Engineering summit applicants this summer (2017).

The "FeastBeast" logo is play on the company Supreme's logo and how their followers are known as "HypeBeasts".

**API**

I made a simple expressjs with swagger API and deployed the code to be run on heroku. It uses the yelp-fusion node module to make calls to the Yelp API: https://www.npmjs.com/package/yelp-fusion

