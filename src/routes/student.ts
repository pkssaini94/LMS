import express, { Request, Response } from 'express';
import { CourseI, BatchesI, SubjectI, TeacherI, StudentI } from '../model/entityI';
import { getStudents, addStudent, getStudentById, deleteUserById, updateStudent, getStudentBatches, addStudentToBatch } from '../service/StudentService';
import { getBatcheById } from '../service/CourseService';

const route: express.Router = express.Router();

route.get('/', (req: Request, res: Response) => {
    getStudents().then((students: StudentI[] | null) => {
        res.status(200).json(students);
    })
})


route.post('/', (req: Request, res: Response) => {

    let name = req.body.name;

    getBatcheById(req.body.cid, req.body.bid).then((batch: BatchesI | null) => {
        addStudent(name, batch).then((student: StudentI | null) => {
            res.status(200).json(student);
        })
    })
})

route.get('/:id', (req: Request, res: Response) => {
    let id = Number(req.params.id);
    getStudentById(id).then((student: StudentI | null) => {
        res.status(200).json(student);
    })
})


route.delete('/:id', (req: Request, res: Response) => {
    let id = Number(req.params.id);
    deleteUserById(id).then((result: number | null) => {
        res.status(200).json({
            success: true,
            id: result
        });
    })
})

route.put('/:id', (req: Request, res: Response) => {
    let id = Number(req.params.id);
    updateStudent(id, req.body.name).then((result: any) => {
        res.status(200).json(result);
    })
})

route.get("/:id/batches", (req: Request, res: Response) => {
    let id = Number(req.params.id);
    getStudentBatches(id).then((student: StudentI[] | null) => {
        res.status(200).json(student);
    })
})


route.post("/:id/courses/:cid/batches/:bid", (req: Request, res: Response) => {
    getBatcheById(Number(req.params.cid), Number(req.params.bid)).then((batch: BatchesI | null) => {
        getStudentById(Number(req.params.id)).then((student: StudentI | null) => {
            addStudentToBatch(student, batch).then((result: any) => {
                res.json(result);
            })
        })
    })

})

export default route;