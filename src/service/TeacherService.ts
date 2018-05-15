import { BatchesI, CourseI, LectureI, StudentI, TeacherI, SubjectI } from '../model/entityI';
import { Subject, Teacher } from '../model/entity';
import { getSubjectById } from './SubjectService';
import { resolve } from 'bluebird';

export async function getTeachers(): Promise<TeacherI[] | null> {
    return await Teacher.findAll({
        attributes: ['id', 'name'],
        include: [{
            model: Subject,
            attributes: ['id', 'name']
        }],
    });
}


export async function addTeacher(newTeacher: TeacherI, id: number): Promise<StudentI | null> {
    return new Promise<TeacherI | null>((resolve, reject) => {
        Teacher.create({
            name: newTeacher.name
        }).then((teacher: TeacherI) => {
            getSubjectById(id).then((subject: any) => {
                subject.addTeacher(teacher)
                resolve(subject)
            })
        })
    })
}

export async function getTeacherById(id: number): Promise<TeacherI | null> {
    return await Teacher.findById(id)
}

export async function updateTeacherById(id: number, name: string): Promise<any | null> {
    return await Teacher.update({
        name: name
    }, {
            where: {
                id: id
            }
        })
}

export async function deleteTeacherById(id: number): Promise<number | null> {
    return await Teacher.destroy({
        where: {
            id: id
        }
    })
}