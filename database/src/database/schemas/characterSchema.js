const { Schema } = require("mongoose")

const characterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: { type:String, ref:"Planet" },
    films: [{ type: String, ref: "Film" }]
})

characterSchema.statics.list = async function () {
    return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

characterSchema.statics.get = async function (_id) {
    return await this.findOne({_id})
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

characterSchema.statics.createNew = async function (object) {
    return await this.create(object)
}

characterSchema.statics.deleteById = async function (_id) {
    //validation with a simple range of numbers for ids or a regex.
        return await this.findByIdAndDelete(_id)
    }
    
characterSchema.statics.updateById = async function ( _id, updatedObjetct ) {
        return await this.findByIdAndUpdate(_id, updatedObjetct)
    }
    
    
/* validation for characters in compass :
    {
        $jsonSchema: {
          required: ["name"],
          properties: {
            name: {
              bsonType: "string"
            },
            height: {
              bsonType: "string"
            },
            mass: {
              bsonType: "string"
            },
            hair_color: {
              bsonType: "string"
            },
            skin_color: {
              bsonType: "string"
            },
            eye_color: {
              bsonType: "string"
            },
            birth_year: {
              bsonType: "string"
            },
            gender: {
              bsonType: "string"
            },
            homeworld: {
              bsonType: ["string"]
            },
            films: {
              bsonType: ["string"]
            }
          }
        }
      } */

module.exports = characterSchema