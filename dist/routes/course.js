"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var CourseService_1 = require("../service/CourseService");
var route = express_1.default.Router();
route.get('/', function (req, res) {
    CourseService_1.getCourses().then(function (courses) {
        res.status(200).send(courses);
    });
});
route.post('/', function (req, res) {
    var newCourse = {
        id: 0,
        name: req.body.name
    };
    CourseService_1.addCourses(newCourse).then(function (course) {
        res.status(200).send(course);
    });
});
route.get('/allBatch', function (req, res) {
    console.log("dxhkjhadxbakxcbakxb");
    CourseService_1.getBatch().then(function (batch) {
        console.log("fhdfhjdi" + batch);
        res.status(200).send(batch);
    });
});
route.get('/:id', function (req, res) {
    CourseService_1.getCoursesById(Number(req.params.id)).then(function (courses) {
        res.status(200).send(courses);
    });
});
route.get('/:id/batches', function (req, res) {
    CourseService_1.getBatches(Number(req.params.id)).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.post('/:id/batches', function (req, res) {
    var newBatch = {
        id: 0,
        name: req.body.name
    };
    CourseService_1.addBatch(Number(req.params.id), newBatch).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.get('/:id/batches/:bid', function (req, res) {
    CourseService_1.getBatcheById(Number(req.params.id), Number(req.params.bid)).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.get('/:id/batches/:bid/lectures', function (req, res) {
    CourseService_1.getLectures(Number(req.params.id), Number(req.params.bid)).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.get('/:id/batches/:bid/lectures/:lid', function (req, res) {
    CourseService_1.getLectureById(Number(req.params.id), Number(req.params.bid), Number(req.params.lid)).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.get('/:id/batches/:bid/students', function (req, res) {
    CourseService_1.getBatchStudents(Number(req.params.id), Number(req.params.bid)).then(function (students) {
        res.status(200).send(students);
    });
});
// route.get('/:id/batches/:bid/teachers', (req: Request, res: Response) => {
//     getBatchTeachers(req.params.id, req.params.bid).then((batch: any) => {
//         res.status(200).send(batch.lectures);
//     })
// });
exports.default = route;
//# sourceMappingURL=course.js.map