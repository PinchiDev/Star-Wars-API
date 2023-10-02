const { Schema } = require("mongoose")

const planetSchema = new Schema({
_id: String,
name: String,
rotation_period: String,
orbital_period: String,
diameter: String,
climate: String,
gravity: String,
terrain: String,
surface_water: String,
res_idents: [ { type:String, ref:"Character" } ],
films: [ { type:String, ref:"Film" } ]
})


planetSchema.statics.list = async function () {
    return await this.find()
    .populate("films", ["_id", "title"])
}

planetSchema.statics.get = async function (_id) {
    return await this.findOne({_id})
    .populate("films", ["_id", "title"])
}

planetSchema.statics.createNew = async function (object) {
    return await this.create(object)
}

planetSchema.statics.deleteById = async function (_id) {
    //validation with a simple range of numbers for ids or a regex.
        return await this.findByIdAndDelete(_id)
    }
    
planetSchema.statics.updateById = async function ( _id, updatedObjetct ) {
        return await this.findByIdAndUpdate(_id, updatedObjetct)
    }
    
    
    /* validation for planets in compass :
    {
        $jsonSchema: {
          required: ["name"],
          properties: {
            name: {
              bsonType: "string"
            },
            rotation_period: {
              bsonType: "string"
            },
            orbital_period: {
              bsonType: "string"
            },
            diameter: {
              bsonType: "string"
            },
            climate: {
              bsonType: "string"
            },
            gravity: {
              bsonType: "string"
            },
            terrain: {
              bsonType: "string"
            },
            surface_water: {
              bsonType: "string"
            },
            res_idents: {
              bsonType: ["string"]
            },
            films: {
              bsonType: ["string"]
            }
          }
        }
      } */


module.exports = planetSchema