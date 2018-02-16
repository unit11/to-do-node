const MongoClient = require('mongodb').MongoClient;

MongoClient
  .connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
      console.log('Unable to connect');
    }
    console.log('Server is successfully connected');

    // db.collection('Todos').find({completed:true}).toArray().then((res) => {
    //   console.log('Todos in');
    //   console.log('The todo is ' + JSON.stringify(res,undefined,2));
    // },(error) => {
    //   console.log('Unable to fetch data from database');
    // });

    db.collection('Users').find({name:"Abacus"}).toArray().then((response) => {
      console.log(response);
    })


    db.close()
  })
