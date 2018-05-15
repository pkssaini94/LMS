import express, { Request, Response } from 'express';
import { getCourses, addCourses, getCoursesById, getBatches, addBatch, getBatcheById, getLectures, getLectureById, getBatchTeachers, getBatchStudents, getBatch } from '../service/CourseService'
import { CourseI, BatchesI } from '../model/entityI';

const route: express.Router = express.Router();

route.get('/', (req: Request, res: Response) => {

    getCourses().then((courses: CourseI[] | null) => {
        res.status(200).send(courses);
    })

});

route.post('/', (req: Request, res: Response) => {
    let newCourse: CourseI = {
        id: 0,
        name: req.body.name
    }
    addCourses(newCourse).then((course: CourseI | null) => {
        res.status(200).send(course);
    })
});

route.get('/allBatch', (req: Request, res: Response) => {
    console.log("dxhkjhadxbakxcbakxb");

    getBatch().then((batch: BatchesI[] | null) => {
        console.log("fhdfhjdi"+batch);
        res.status(200).send(batch);
    })
});

route.get('/:id', (req: Request, res: Response) => {

    getCoursesById(req.params.id).then((courses: CourseI | null) => {
        res.status(200).send(courses);
    })
});

route.get('/:id/batches', (req: Request, res: Response) => {

    getBatches(req.params.id).then((batch: BatchesI[] | null) => {
        res.status(200).send(batch);
    })
});

route.post('/:id/batches', (req: Request, res: Response) => {
    let newBatch: BatchesI = {
        id: 0,
        name: req.body.name
    }
    addBatch(req.params.id, newBatch).then((batch: BatchesI | null) => {
        res.status(200).send(batch);
    })
});

route.get('/:id/batches/:bid', (req: Request, res: Response) => {

    getBatcheById(req.params.id, req.params.bid).then((batch: BatchesI | null) => {
        res.status(200).send(batch);
    })
});

route.get('/:id/batches/:bid/lectures', (req: Request, res: Response) => {

    getLectures(req.params.id, req.params.bid).then((batch: BatchesI | null) => {
        res.status(200).send(batch);
    })
});

route.get('/:id/batches/:bid/lectures/:lid', (req: Request, res: Response) => {

    getLectureById(req.params.id, req.params.bid, req.params.lid).then((batch: BatchesI | null) => {
        res.status(200).send(batch);
    })
});

route.get('/:id/batches/:bid/students', (req: Request, res: Response) => {

    getBatchStudents(req.params.id, req.params.bid).then((students: BatchesI[] | null) => {
        res.status(200).send(students);
    })
});

// route.get('/:id/batches/:bid/teachers', (req: Request, res: Response) => {

//     getBatchTeachers(req.params.id, req.params.bid).then((batch: any) => {
//         res.status(200).send(batch.lectures);
//     })
// });

export default route;