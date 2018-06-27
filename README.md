# Astro Social
This is my college project on front-end side. Built in Angular 6 with Socket IO library  

# WARNING
For the meteorites map feature. It's really hard to load because there are 1000+ zone in the world. And it's too hard to tell google everytime to put a pin on the map. So, I recomend you to use google chrome or chromium. And wait patiently for it, if it's not appear for a long time. Just refresh it. Sorry

# How to run it
1. For dev mode ``` ng serve ```  
2. For build ``` ng build ```  

# Read this
Before you try to run it by it self. Please make sure you're already had the database collections and the database itself. For your information, the database name is ``` astro-social ```. So you may need to create it before.

# How to create database
Before we create it, make sure you already install the mongodb community server in your machine. If you already did, follow this steps:  
1. for debian linux distros ``` sudo service mongod start ```
2. enter to mongo with command ``` mongo ```  
3. create database ```  use astro-social  ```
4. create collection ``` db.createCollection("user") ```  
Ok, we're good now

# Run the API server
Next step, you need to run the API server. The API server for this project already posted on github [Astro Social API Code](https://github.com/OrionStark/mw-astronomy)  
To run this server, all you need to do is enter to the project by terminal. And type ```javascript npm start ```

# Web-app sample image
## Dashboard
1. On dashboard we could seen the sun's information and neo statistics
![dashboard](https://raw.githubusercontent.com/OrionStark/mw-astronomy-frontend/master/images/Screenshot%20from%202018-06-27%2014-12-42.png)  
2. And there's a meteorites land map too. But it so hard to load because there are 1000+ zone in the world  
![meteorite](https://raw.githubusercontent.com/OrionStark/mw-astronomy-frontend/master/images/Screenshot%20from%202018-06-27%2014-12-03.png)  
3. There's a page about NEO, daily and weekly
![neo](https://raw.githubusercontent.com/OrionStark/mw-astronomy-frontend/master/images/Screenshot%20from%202018-06-27%2014-12-53.png)  
4. An you can chatting to the world too.

# Author
## Robby Muhammad Nst
This code is for my lecturer as my assignment. Thankyou
