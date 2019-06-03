const db = require('./conn.js');

class class_rankings {
    constructor(id, name,year){
        this.id = id;
        this.name = name;
        this.year = year;
    }

    static async getAllTopics(){
        try{
            const response = await db.any(`select * from class_topics`);
            return response;
        } catch(err){s
            return err.message;
        }
    }

    static async getAllRankings(){
        try{
            const response = await db.any(`select * from topic_rankings`);
            return response;
        } catch(err){
            return err.message;
        }
    }

    static async getSelfRank(){
        const query = `SELECT C.topic_name, R.ranking FROM class_topics AS C, topic_rankings AS R WHERE  C.self_score = R.id;`;
        try {
            let response = await db.result(query);
            return response;
        } catch(err){
            console.log('ERROR', err.message);
            return err;
        }
    }

    static async addRankings(className,score){
        const query = `UPDATE class_topics SET self_score = ${score} WHERE topic_name = ${className}`;
        try {
            let response = await db.result(query);
            return response;
        } catch(err){
            console.log('ERROR', err.message);
            return err;
        }
    }
}

module.exports = class_rankings;