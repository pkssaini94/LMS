import Sequelize from 'sequelize';
import { DataTypeAbstract, DefineAttributeColumnOptions } from 'sequelize';
import { CourseI, LectureI, StudentI, TeacherI, SubjectI } from './entityI';
declare global {
    type SequelizeAttributes<T extends {
        [key: string]: any;
    }> = {
        [P in keyof T]: string | DataTypeAbstract | DefineAttributeColumnOptions;
    };
}
export declare const db: Sequelize.Sequelize;
export declare const Course: Sequelize.Model<CourseI, any, any>;
export declare const Batch: Sequelize.Model<CourseI, any, any>;
export declare const Subject: Sequelize.Model<SubjectI, any, any>;
export declare const Student: Sequelize.Model<StudentI, any, any>;
export declare const Teacher: Sequelize.Model<TeacherI, any, any>;
export declare const Lecture: Sequelize.Model<LectureI, any, any>;
