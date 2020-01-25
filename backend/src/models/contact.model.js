// contact-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'contact';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const contact = new Schema({
    name: {
      first: {
         type: String, required: [true, 'First Name is required']
      },
      last: {
        type: String, required: [true, 'Last Name is required']
      }
    },
    phone: {
      type: String, required: [true, 'Phone Number is required'],
      validate: {
        validator: function(v) {
          return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(v);
        },
        message: `{VALUE} should be a valid international number`
      }
    },
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, contact);
  
};
