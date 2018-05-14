"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var SubjectService_1 = require("../service/SubjectService");
var route = express_1.default.Router();
route.get('/', function (req, res) {
    SubjectService_1.getSubjects().then(function (subjects) {
        res.status(200).send(subjects);
    });
});
route.post('/', function (req, res) {
    var newSubject = {
        id: 0,
        name: req.body.name
    };
    SubjectService_1.addSubjects(newSubject, req.body.cid).then(function (subjects) {
        res.status(200).send(subjects);
    });
});
route.get('/:id', function (req, res) {
    SubjectService_1.getSubjectById(req.params.id).then(function (subjects) {
        res.status(200).send(subjects);
    });
});
// route.get('/:id/teachers', (req: Request, res: Response) => {
//     getTeacherById(req.params.id).then((subjects: SubjectI | null) => {
//         res.status(200).send(subjects);
//     })
// });
exports.default = route;
//# sourceMappingURL=subject.js.map