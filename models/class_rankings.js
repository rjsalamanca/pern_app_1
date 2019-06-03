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
            const response = await db.any(`select * from topics_rankings`);
            return response;
        } catch(err){
            return err.message;
        }
    }

    // static async add(name,year){
    //     const query = `INSERT INTO ceos (name,year) VALUES ('${name}',${year})`;
        
    //     try {
    //         let response = await db.result(query);
    //         return response;
    //     } catch(err){
    //         console.log('ERROR', err.message);
    //         return err;
    //     }
    // }
}

module.exports = class_rankings;