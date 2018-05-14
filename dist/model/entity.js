"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = __importDefault(require("sequelize"));
exports.db = new sequelize_1.default('learningmanagementsolution', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});
var courseAttr = {
    id: { type: sequelize_1.default.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: sequelize_1.default.STRING, allowNull: false, },
};
exports.Course = exports.db.define('course', courseAttr);
var batchAttr = {
    id: { type: sequelize_1.default.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: sequelize_1.default.STRING, allowNull: false, },
};
exports.Batch = exports.db.define('batch', batchAttr);
var subjectAttr = {
    id: { type: sequelize_1.default.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: sequelize_1.default.STRING, allowNull: false, },
};
exports.Subject = exports.db.define('subject', subjectAttr);
var studentAttr = {
    id: { type: sequelize_1.default.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: sequelize_1.default.STRING, allowNull: false, },
};
exports.Student = exports.db.define('student', studentAttr);
var teacherAttr = {
    id: { type: sequelize_1.default.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: sequelize_1.default.STRING, allowNull: false, },
};
exports.Teacher = exports.db.define('teacher', teacherAttr);
var lectureAttr = {
    id: { type: sequelize_1.default.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: sequelize_1.default.STRING, allowNull: false, },
};
exports.Lecture = exports.db.define('lecture', lectureAttr);
exports.Course.hasMany(exports.Subject);
exports.Subject.belongsTo(exports.Course);
exports.Course.hasMany(exports.Batch);
exports.Batch.belongsTo(exports.Course);
exports.Batch.hasMany(exports.Lecture);
exports.Lecture.belongsTo(exports.Batch);
exports.Subject.hasMany(exports.Teacher);
exports.Teacher.belongsTo(exports.Subject);
exports.Lecture.belongsTo(exports.Subject, { as: 'subject' });
exports.Lecture.belongsTo(exports.Teacher, { as: 'teacher' });
exports.Student.belongsToMany(exports.Batch, { through: 'student_batch', onDelete: 'cascade', hooks: true });
exports.Batch.belongsToMany(exports.Student, { through: 'student_batch', onDelete: 'cascade', hooks: true });
exports.db.sync().then(function () { return console.log("database created"); })
    .catch(function (err) { return console.log("could not create database"); });
//# sourceMappingURL=entity.js.map