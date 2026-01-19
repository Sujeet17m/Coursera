const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const validator = require('validator');

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true, validate: [validator.isEmail, 'Invalid email']},
    password: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String}
});

const courseSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    content: {type: String, required: true},
    imageUrl: {type: String},
    creatorId: {type: ObjectId, ref: 'Admin', required: true}
});

const adminSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true, validate: [validator.isEmail, 'Invalid email']},
    password: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String}
});

const purchaseSchema = new Schema({
    userId: {type: ObjectId, ref: 'User', required: true},
    courseId: {type: ObjectId, ref: 'Course', required: true},
    purchaseDate: {type: Date, default: Date.now}
});

const UserModel = mongoose.model('User', userSchema);
const CourseModel = mongoose.model('Course', courseSchema);
const AdminModel = mongoose.model('Admin', adminSchema);
const PurchaseModel = mongoose.model('Purchase', purchaseSchema);

module.exports = {
    UserModel,
    CourseModel,
    AdminModel,
    PurchaseModel
};



