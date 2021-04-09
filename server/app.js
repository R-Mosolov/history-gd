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
const axios = require('axios');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Manuscript {
    userId: String
    title: String
    author: String
    type: String
    creationDate: String
  }

  type Query {
    manuscripts(idx: Int!): Manuscript
  }
`);

class Manuscript {
  constructor(idx) {
    this.idx = idx;
  }

  getAllManuscripts() {
    return axios
      .get('http://localhost:4000/manuscripts')
      .then(({ data }) => data)
      .then((err) => err);
  }

  userId() {
    return Promise.resolve(this.getAllManuscripts()).then(
      (res) => res[this.idx].userId
    );
  }

  title() {
    return Promise.resolve(this.getAllManuscripts()).then(
      (res) => res[this.idx].title
    );
  }

  author() {
    return Promise.resolve(this.getAllManuscripts()).then(
      (res) => res[this.idx].author
    );
  }

  type() {
    return Promise.resolve(this.getAllManuscripts()).then(
      (res) => res[this.idx].type
    );
  }

  creationDate() {
    return Promise.resolve(this.getAllManuscripts()).then((res) =>
      String(res[this.idx].creationDate)
    );
  }
}

var root = {
  manuscripts: ({ idx }) => {
    return new Manuscript(idx);
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
