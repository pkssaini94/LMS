import express, { Request, Response } from 'express';
import { CourseI, BatchesI, SubjectI, TeacherI } from '../model/entityI';
import { getTeachers, addTeacher, getTeacherById, updateTeacherById, deleteTeacherById } from '../service/TeacherService';

const route: express.Router = express.Router();


route.get('/', (req: Request, res: Response) => {

    getTeachers().then((teachers: TeacherI[] | null) => {
        res.status(200).send(teachers);
    })

});

route.post('/', (req: Request, res: Response) => {
    let newteacher: TeacherI = {
        id: 0,
        name: req.body.name
    }
    addTeacher(newteacher, req.body.sid).then((teacher: TeacherI | null) => {
        res.status(200).send(teacher);
    })
});

route.get('/:id', (req: Request, res: Response) => {

    getTeacherById(req.params.id).then((teacher: TeacherI | null) => {
        res.status(200).send(teacher);
    })
});

route.put('/:id', (req: Request, res: Response) => {

    updateTeacherById(req.params.id, req.body.name).then((teacher: TeacherI | null) => {
        res.status(200).send(teacher);
    })
});

route.delete('/:id', (req: Request, res: Response) => {

    deleteTeacherById(req.params.id).then((result: number | null) => {
        res.status(200).send({
            success: true,
            id: result
        });
    })
});



export default route;