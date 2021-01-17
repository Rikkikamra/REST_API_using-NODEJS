So this is a simple NODE JS application, which have certain REST APIs.
It will read data from js files and push them on to a nosql db, using one of the API.
Then APIs can be used to read, data and update data in the database.
Following given are the list of APIs with their address.

The code also contains test case code using the jest library. I am very new to testing so the code for that can be definitely improved.

## Install dependencies

```
yarn install | npm install
```

## Run server

```
yarn start | npm start
```

### APIs 

Data will be inserted only if it does not exist in the database. If it does it wont insert.

```
127.0.0.1:3000/insertData ~ This will insert data from js files into the mongo db
127.0.0.1:3000/musicians ~ Will return the list of all musicians (GET request)
127.0.0.1:3000/musicians/:idname ~ Will return a specific musician (GET request)
127.0.0.1:3000/updateMusicians/:idname ~ Will update the values for this id. Pass data in body (PUT request)
```

## Run tests

Before testing run `npm start | yarn start` since the mongo server needs to be active before running the test cases.

`yarn test | npm test`

## Run tests interactively

`yarn test:watch`
