Introduction to Bootstrap Lesson Task

Download the XD file and use Bootstrap to code the About and Product pages.
Use React and styled components

The files from the lesson are in this branch as well as the product details image.

An example solution is on the answer branch of the repo.

Cheatsheet for installing and using react-bootstrap, vanilla bootstrap and styled-components

1)Install react-app -> npx create-react-app < NAME OF PROJECT FOLDER>
NB when creating a react-app, you should be in the parent folder of where you create the project
This are because create-react-app commands generate a new folder for you.

2)Install vanilla bootstrap -> npm install bootstrap
3)Install react-bootstrap -> npm install react-bootstrap 
4)Install styled-components -> npm install styled-components
5)Install react-router-dom -> npm install react-router

Note -> Remember when you want to display images, you must import them as a Alias in the file
where you are using them, then use that import in the src attribute like this src?{MyImageAlias}.
Remember the path to the folder where the image are.

Note -> If you need to make a linebreak, don't use </ Br> element. According to mdn this is not good
for accesibility. Use more <p> tags around text to split text up.
