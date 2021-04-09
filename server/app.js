var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var { firestore } = require('./db/db-config');

var indexRouter = require('./routes/index');
var manuscriptsRouter = require('./routes/manuscripts');
var usersRouter = require('./routes/users');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    userId(idx: Int!): String
    manuscriptId: String
    title: String
    author: String
    type: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  userId: ({ idx }) => {
    let data = [];
    return Promise.resolve(firestore.collection('manuscripts').get())
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
      })
      .then(() => data[idx].userId)
      .catch((err) => err);
  },
  manuscriptId: () => {
    return 'Test manuscriptId';
  },
  title: () => {
    return 'Test title';
  },
  author: () => {
    return 'Test author';
  },
  type: () => {
    return 'Test type';
  },
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/manuscripts', manuscriptsRouter);
app.use('/users', usersRouter);
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
