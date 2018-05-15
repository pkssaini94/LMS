import { BatchesI, CourseI, LectureI, StudentI, TeacherI, SubjectI } from '../model/entityI';
import { Course, Batch, Lecture, Teacher, Subject, Student } from '../model/entity';

export async function getCourses(): Promise<CourseI[] | null> {
    return await Course.findAll();
}


export async function addCourses(newCourse: CourseI): Promise<CourseI | null> {
    return await Course.create({
        name: newCourse.name
    })
}

export async function getCoursesById(id: number): Promise<CourseI | null> {
    return await Course.findById(id)
}

export async function getBatches(id: number): Promise<BatchesI[] | null> {
    return await Batch.findAll({
        include: [{
            model: Course,
            where: {
                id: id
            },
            attributes: ['id', 'name'],
        }]
    })
}

export async function getBatch(): Promise<BatchesI[] | null> {
    return await Batch.findAll({
        attributes: ['id', 'name'],
        include: [{
            model: Course,
            attributes: ['id', 'name']
        }],
    })
}

export function addBatch(batchId: number, newBatch: BatchesI): Promise<BatchesI | null> {
    return new Promise<BatchesI | null>((resolve, reject) => {
        Batch.create({
            name: newBatch.name
        }).then((batch: BatchesI) => {
            getCoursesById(batchId).then((course: any) => {
                course.addBatch(batch)
                resolve(batch)
            })
        })
    })
}

export async function getBatcheById(id: number, bid: number): Promise<BatchesI | null> {
    return await Batch.findOne({
        where: {
            id: bid
        },
        include: [{
            model: Course,
            where: {
                id: id
            },
            attributes: ['id', 'name'],
        }]
    })
}

export async function getLectures(id: number, bid: number): Promise<BatchesI | null> {
    return await Batch.findOne({
        where: {
            id: bid
        },
        include: [{
            model: Course,
            where: {
                id: id
            },
            attributes: ['id', 'name'],
        }]
    })
}
export async function getLectureById(id: number, bid: number, lectureId: number): Promise<BatchesI | null> {
    return await Batch.findOne({
        where: {
            id: bid
        },
        attributes: [],
        include: [{
            model: Course,
            where: {
                id: id
            },
            attributes: [],
        }, {
            attributes: ['id', 'name'],
            model: Lecture,
            where: {
                id: lectureId
            },
            include: [{
                model: Subject
            }, {
                model: Teacher
            }]
        }]
    })
}

export async function getBatchTeachers(id: number, bid: number): Promise<BatchesI | null> {
    return await Batch.findOne({
        where: {
            id: bid
        },
        attributes: [],
        include: [{
            model: Course,
            where: {
                id: id
            },
            attributes: [],
        }, {
            attributes: ['teacherId'],
            model: Lecture,
            include: [{
                attributes: ['id', 'name'],
                model: Teacher
            }]
        }]
    })
}

export async function getBatchStudents(cid: number, bid: number): Promise<BatchesI[] | null> {
    return await Batch.findAll({
        where: {
            id: bid
        },
        attributes: [],
        include: [{
            model: Course,
            where: {
                id: cid
            },
            attributes: []
        }, {
            model: Student,
            attributes: ['id', 'name']
        }]
    })
}