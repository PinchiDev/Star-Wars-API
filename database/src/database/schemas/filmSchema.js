const { Schema } = require("mongoose")

const filmSchema = new Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [ { type:String, ref:"Character"} ],
    planets: [ { type:String, ref:"Planet" } ]
})

filmSchema.statics.list = async function () {
    return await this.find()
    .populate("planets", ["_id", "name"])
    .populate("characters", ["_id", "name"])
}

filmSchema.statics.get = async function (_id) {
    return await this.findOne({_id})
    .populate("planets", ["_id", "name"])
    .populate("characters", ["_id", "name"])
}

filmSchema.statics.createNew = async function (object) {
    return await this.create(object)
}

filmSchema.statics.deleteById = async function (_id) {
//validation with a simple range of numbers for ids or a regex.
    return await this.findByIdAndDelete(_id)
}

filmSchema.statics.updateById = async function ( _id, updatedObjetct ) {
    return await this.findByIdAndUpdate(_id, updatedObjetct)
}


/* validation for films in compass :
{
    $jsonSchema: {
      required: ["title"],
      properties: {
        title: {
          bsonType: "string"
        },
        opening_crawl: {
          bsonType: "string"
        },
        director: {
          bsonType: "string"
        },
        producer: {
          bsonType: "string"
        },
        release_date: {
          bsonType: "date"
        },
        characters: {
          bsonType: ["string"]
        },
        planets: {
          bsonType: ["string"]
        }
      }
    }
  } */


module.exports = filmSchema
