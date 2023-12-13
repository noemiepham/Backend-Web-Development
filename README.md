# Backend-Web-Development
## Express framework
 1. Express.js, commonly referred to as Express, is a web application framework for Node.js, a server-side JavaScript runtime.
 2. Key features and concepts of Express.js include:

     **Routing**
      **Middleware**
      **Template Engines**
      **Static File Serving**
      **HTTP Utility Methods**
      **Integration with Other Node.js Libraries**

 3.Here's a simple example of a basic Express.js application:
 
    const express = require('express');
    const app = express();

    const port = 3000;

    // Define a route
    app.get('/', (req, res) => {
      res.send('Hello, Express!');
    });
    
    // Start the server
    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
    });



