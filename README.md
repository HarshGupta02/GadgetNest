# Gadget-Nest

An online marketplace to facilitate the buying and selling of a diverse range of technology-related products. This platform allows users to make purchases while enabling sellers to list their products for sale on the website. Notably, the website features distinct dashboards for both administrators and regular users, ensuring effective management and control.

To bolster security measures, each request made to the server is channeled through a middleware mechanism. This crucial step verifies the authenticity of the user, distinguishing between regular users and administrators to ensure appropriate access and authorization.

# Features

* Pagination
* Real-time Regex searching
* Filtration
* Login/Logout Functionality
* Session Expire via JWT Tokens
* Push Email notification for reset Password
* Stripe Payment Gateway
* Local and Session Storage
* Order History
* Delivery Updates
* Quantity Control

# Tech Stack

# FrontEnd
* ReactJs : Used ReactJs as the frontend framework to design various components like Home Page, Products Page etc.
* Redux/Redux Toolkit : Used Redux to centralize application state and used Redux toolkit to manage application state.
* Thunk MiddleWare: used thunk middleware to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
* HTML/CSS

# Backend
* NodeJs 
* ExpressJs
* Tokens : Auto Generated JWT Tokens, which are attached to cookies which are send only via HTTP and with a certain Expiry Time whenever a request is made to server.
* Nodemailer : A library to programmatically send emails to the user requesting for resetting password and attaching reset Token as query parameter in the url.
* Local And Session Storage : Stored frequently accessed data, in the local and session storage of the browser like cart items, Shipping Info.

# Database
* MongoDB : Used MongoDB Atlas as a NOSQL Cloud Database to store the information regarding Users, Products, Orders.
* Cloudinary : Used Cloudinary as a BLOB media storage Database to store profile images of users and images of the products.

Schema:
* User Schema
* Product Schema
* Order Schema
