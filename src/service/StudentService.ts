import { BatchesI, CourseI, LectureI, StudentI, TeacherI, SubjectI } from '../model/entityI';
import { Subject, Course, Student, Batch } from '../model/entity';
import { resolve } from 'bluebird';



export async function getStudents(): Promise<StudentI[] | null> {
    return await Student.findAll({
        include: [{
            model: Batch,
            attributes: ['id', 'name']
        }]
    })
}

export async function addStudent(name: string, batch: any): Promise<BatchesI | StudentI | null> {
    return new Promise<StudentI | null>((resolve, reject) => {
        Student.create({ name: name }).then(student => {
            batch.addStudent(student);
            resolve(student);
        })
    })
}

export async function getStudentById(id: number): Promise<StudentI | null> {
    return await Student.findById(id);
}

export async function deleteUserById(id: number): Promise<number | null> {
    return await Student.destroy({
        where: {
            id: id
        }
    });
}

export async function updateStudent(id: number, name: string): Promise<any | null> {
    return await Student.update({
        name: name
    }, {
            where: {
                id: id
            }
        });
}

export async function getStudentBatches(id: number): Promise<StudentI[] | null> {
    return await Student.findAll({
        where: {
            id: id
        },
        attributes: ['id', 'name'],
        include: [{
            model: Batch,
            attributes: ['id', 'name'],
            through: { attributes: [] }
        }]
    })
}

export async function addStudentToBatch(stu: any, batch: any): Promise<BatchesI | StudentI | null> {
    return await batch.addStudent(stu);
}