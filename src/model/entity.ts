import Sequelize from 'sequelize';
import { DataTypeAbstract, DefineAttributeColumnOptions } from 'sequelize'
import { BatchesI, CourseI, LectureI, StudentI, TeacherI, SubjectI } from './entityI';

declare global {
    type SequelizeAttributes<T extends { [key: string]: any }> = {
        [P in keyof T]: string | DataTypeAbstract | DefineAttributeColumnOptions;
    };
}

export const db = new Sequelize('learningmanagementsolution', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
})

const courseAttr: SequelizeAttributes<CourseI> = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: Sequelize.STRING, allowNull: false, },

};
export const Course = db.define<CourseI, any>('course', courseAttr)

const batchAttr: SequelizeAttributes<BatchesI> = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: Sequelize.STRING, allowNull: false, },

};
export const Batch = db.define<CourseI, any>('batch', batchAttr)

const subjectAttr: SequelizeAttributes<SubjectI> = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: Sequelize.STRING, allowNull: false, },
};
export const Subject = db.define<SubjectI, any>('subject', subjectAttr)

const studentAttr: SequelizeAttributes<StudentI> = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: Sequelize.STRING, allowNull: false, },

};
export const Student = db.define<StudentI, any>('student', studentAttr)

const teacherAttr: SequelizeAttributes<TeacherI> = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: Sequelize.STRING, allowNull: false, },

};
export const Teacher = db.define<TeacherI, any>('teacher', teacherAttr)

const lectureAttr: SequelizeAttributes<LectureI> = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: Sequelize.STRING, allowNull: false, },

};
export const Lecture = db.define<LectureI, any>('lecture', lectureAttr)

Course.hasMany(Subject);
Subject.belongsTo(Course);

Course.hasMany(Batch);
Batch.belongsTo(Course);

Batch.hasMany(Lecture);
Lecture.belongsTo(Batch);

Subject.hasMany(Teacher);
Teacher.belongsTo(Subject);

Lecture.belongsTo(Subject, { as: 'subject' });
Lecture.belongsTo(Teacher, { as: 'teacher' });

Student.belongsToMany(Batch, { through: 'student_batch', onDelete: 'cascade', hooks: true });
Batch.belongsToMany(Student, { through: 'student_batch', onDelete: 'cascade', hooks: true });


db.sync().then(() => console.log("database created"))
    .catch((err) => console.log("could not create database"));