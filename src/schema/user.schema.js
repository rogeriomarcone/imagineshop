import Mongoose from "../database/db.js";

const userSchema = new Mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    age: Number,
  },
  {
    collection: "users",
    timestamps: true,
  }
);

export default Mongoose.model("users", userSchema, "users");

/*import Mongoose from '../database/db.js';

const userSchema = new Mongoose.Schema(
    {
        name: String,
        email: String,
        password: String
    },
    {
        collation: 'users',
        timestamps: true
    }
);

export default Mongoose.model('users', userSchema, 'users');
*/
