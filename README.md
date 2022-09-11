#View Trending Collections on Ethereum

This simple web application helps in viewing the trending collections. It provides a visual representation of the top collections in a graphical format.

![Alt text](/screenshots/Connected.png?raw=true "Wallet Connected")

![Alt text](/screenshots/Disconnected.png?raw=true "Wallet Disconnected")

#Use Case

- Use Case: If a user's ethereum wallet is connected, they should be able to view the Trending collections data.

#Instructions to run:

- To install dependencies,

```
npm install
```

- To create a production build and run,

```
npm run build
```

```
npm run start
```

- To run in dev mode,

```
npm run dev
```

#Assumptions/Justifications

- As mentioned in the assignment PDF, I have signed up on the QuickNode/IcyTools website to use my developer API Token to make the graphQl query.
- Once user visits the website, they can see a simple screen to view the trending collections along with a fake button. Actual etherum connection checking requires detecting a provider to be installed(like metamask) on the browser. If the wallet is connected we can use web3 package to retrieve user connection data.
- I have used a simple fake button to implement this flow, i.e, clicking on a button to connect/disconnect wallet.
- Once user clicks connect wallet, a request will be made to fetch the trending collections.
- Upon receiving the collections, a graph is plotted with the collections data, using sales as the key. The graph displays the name of the collection on y-axis and sales statistic on the x-axis. Full name of long collections can be viewed by hovering on the graph bar. The whole response is logged on the broswer console too.
- State management: If user clicks on the button again, wallet is assumed to disconnected and the graph/data is not shown. If wallet is connected, graph can be viewed and vice-versa. The connected/disconnected state is maintained during page refresh(using session storage). If a user reloads the page when the wallet was connected, the connected state is persisted and graph is shown after reload.
- A simple boolean state was used instead of context/redux as this was a single screen application and state data was only one boolean variable. If the application included many tabs with more authentication data, a login context would've made sense.

#Libraries used:

- typescript
- react for the UI
- nivo/bar for the chart
- appollo for graphql
- next for SSR
- tailwind

#QUESTIONS AND ANSWERS:

1. Handles user authentication
   Ans: A username/password style of authentication is a universal model, can be used for anything(social media, banking etc). Considering this, yes, a database is required. I would prefer to use MongoDB for this considering it's simplicity, accessibility and the amount of documentation/tools available for it. With MongoDB, I would use the mongoose ODM to facilitate database operation. My schema would be simple here, a name, email(username) and password. Schema would be:

var UserSchema = new Schema({
fullName: {
type: String,
required: true
},
email: {
type: String,
unique: true,
lowercase: true,
trim: true,
required: true
},
password: {
type: String,
required: true
},
});

In order to keep passwords invisible, I will make sure passwords are hashed before being saved in the db(using a library like bcrypt with salt). Another important thing is to not use the password obtained from the user directly, for anything except hashing and storing in the db. For any other operation which requires user password, the password should be retrieved from db and then used. After this to keep the user authenticated while navigating to different pages/tabs, JWT based authentication can be used.

PROS of NoSQL: For authentication, MongoDB is good because of it's scalability and easy maintenance(for db admin). It is also very simple to use.
CONS of NoSQL: When it comes to authentication, it is a popular practice to collect more user details while creating user profile. If we want establish relations between data, MongoDB is not a great choice. NoSQL databases are not really meant for storing relational data(using joins etc). SQL databases win here.

2. Serves data to the client via an API
   Ans: I would go with a REST API. The amount of documentation around REST and the tools/libraries to support building a REST API is very vast. Also this is across all languages used for Application development. Other options like Pagination, Sorting, filtering and error handling in REST make it more attractive for using it to serve data to a client.
   With express, the process of REST API development has also become easy. In Golang, GIN comes to the rescue while building a REST API. So, if at all there is no need of using something like GraphQL(API response is too huge and client doesn't need everything), REST API would be my chance.

3. Scales to handle thousands of requests per second
   Ans: On top of my mind, I think using a Load Balancer is the right way to handle thousands of requests per second. This will make sure, one server isn't being stressed out and the processing is distributed across servers.
   Another choices for this is using a caching server to decrease io computation. But before all these, a proactive developer should profile the code with all the great tools available today and should improve efficiency.

4. Provides real-time updates to clients as new data is available
   Ans: To do this, I would use a web-socket connection considering the tools(broswers) support it. Web-sockets ensure quick and seamless communication over a single connection.
