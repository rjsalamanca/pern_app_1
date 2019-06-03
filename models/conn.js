const pgp = require('pg-promise') ({
    query: e =>{
        console.log('QUERY: ', e.query);
    }
});

const options = {
    host: 'localhost',
    database: 'class_rankings',
    user: 'rjs'
}

// Tables we're using:
// class_topics
// topic_rankings

const db = pgp(options)

module.exports = db;