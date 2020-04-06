import express, { Request, Response } from 'express';
import { getSubjects, addSubjects, getSubjectById } from '../service/SubjectService';
import { CourseI, BatchesI, SubjectI } from '../model/entityI';

const route: express.Router = express.Router();

route.get('/', (req: Request, res: Response) => {

    getSubjects().then((subjects: SubjectI[] | null) => {
        res.status(200).send(subjects);
    })

});

route.post('/', (req: Request, res: Response) => {
    let newSubject: SubjectI = {
        id: 0,
        name: req.body.name
    }
    addSubjects(newSubject, req.body.cid).then((subjects: SubjectI | null) => {
        res.status(200).send(subjects);
    })
});

route.get('/:id', (req: Request, res: Response) => {

    getSubjectById(Number(req.params.id)).then((subjects: SubjectI | null) => {
        res.status(200).send(subjects);
    })
});

// route.get('/:id/teachers', (req: Request, res: Response) => {

//     getTeacherById(req.params.id).then((subjects: SubjectI | null) => {
//         res.status(200).send(subjects);
//     })
// });

export default route;