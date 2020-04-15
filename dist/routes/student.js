"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var StudentService_1 = require("../service/StudentService");
var CourseService_1 = require("../service/CourseService");
var route = express_1.default.Router();
route.get('/', function (req, res) {
    StudentService_1.getStudents().then(function (students) {
        res.status(200).json(students);
    });
});
route.post('/', function (req, res) {
    var name = req.body.name;
    CourseService_1.getBatcheById(req.body.cid, req.body.bid).then(function (batch) {
        StudentService_1.addStudent(name, batch).then(function (student) {
            res.status(200).json(student);
        });
    });
});
route.get('/:id', function (req, res) {
    var id = Number(req.params.id);
    StudentService_1.getStudentById(id).then(function (student) {
        res.status(200).json(student);
    });
});
route.delete('/:id', function (req, res) {
    var id = Number(req.params.id);
    StudentService_1.deleteUserById(id).then(function (result) {
        res.status(200).json({
            success: true,
            id: result
        });
    });
});
route.put('/:id', function (req, res) {
    var id = Number(req.params.id);
    StudentService_1.updateStudent(id, req.body.name).then(function (result) {
        res.status(200).json(result);
    });
});
route.get("/:id/batches", function (req, res) {
    var id = Number(req.params.id);
    StudentService_1.getStudentBatches(id).then(function (student) {
        res.status(200).json(student);
    });
});
route.post("/:id/courses/:cid/batches/:bid", function (req, res) {
    CourseService_1.getBatcheById(Number(req.params.cid), Number(req.params.bid)).then(function (batch) {
        StudentService_1.getStudentById(Number(req.params.id)).then(function (student) {
            StudentService_1.addStudentToBatch(student, batch).then(function (result) {
                res.json(result);
            });
        });
    });
});
exports.default = route;
//# sourceMappingURL=student.js.map