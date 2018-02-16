const MongoClient = require('mongodb').MongoClient;

MongoClient
  .connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
      console.log('Unable to connect');
    }
    console.log('Server is successfully connected');

    db.collection('Todos')
        .insertOne({
          text:'Something to say',
          completed:false
        },(err,result) => {
          if(err) {
            return console.log('Unable to create a new database');
          };
          // console.log(JSON.stringify(result.ops,undefined,2));
        })

    db.collection('Users')
        .insertOne({
          name:'Abacus',
          age:120,
          gender:'Block'
        },(err,result) => {
          if(err) {
            console.log('Unable to create a new database');
          }
          // console.log(JSON.stringify(result.ops,undefined,2));
          console.log(result.ops[0]._id.getTimestamp());
        })

    db.close()
  })
