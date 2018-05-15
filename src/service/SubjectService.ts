import { BatchesI, CourseI, LectureI, StudentI, TeacherI, SubjectI } from '../model/entityI';
import { Subject, Course } from '../model/entity';
import { resolve } from 'bluebird';
import { getCoursesById } from './CourseService'

export async function getSubjects(): Promise<SubjectI[] | null> {
    return await Subject.findAll({
        attributes: ['id', 'name'],
        include: [{
            model: Course,
            attributes: ['id', 'name']
        }],
    });
}


export async function addSubjects(newSubject: SubjectI, id: number): Promise<StudentI | null> {
    return new Promise<SubjectI | null>((resolve, reject) => {
        Subject.create({
            name: newSubject.name
        }).then((subject: SubjectI) => {
            getCoursesById(id).then((course: any) => {
                course.addSubject(subject)
                resolve(subject)
            })
        })
    })
}

export async function getSubjectById(id: number): Promise<StudentI | null> {
    return await Subject.findById(id)
}

// export async function getTeacherById(id: number): Promise<StudentI | null> {
//     return await Subject.findById(id)
// }