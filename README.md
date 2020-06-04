# ssr-react-clone
This is a modified (up-to-date) clone for davideast/react-ssr-firebase-hosting.
In his series of videos, David East at Firebase shows how to use react with server-side rendering to host your website on firebase.
Some of his work has become outdated and I took the time to rewrite it in order for me to understand the basics of server-side rendering

The webpack.config.js file could be deleted as it's no longer a part of this project. It's here only to illustrate how this project was first implmented without server-side-rendering.
To return to the non-server-side rendered version, one has to:
- move function/index.html to public/
- add to public/index.html : 
```<script type="text/javascript" src="bundle.js"></script>``` at the bottom of ```<body>``` before the closing tag.
- delete functions/ entirely
- run the project from the command line using ```firebase serve --only functions,hosting```
