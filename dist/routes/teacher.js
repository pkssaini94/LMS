"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var TeacherService_1 = require("../service/TeacherService");
var route = express_1.default.Router();
route.get('/', function (req, res) {
    TeacherService_1.getTeachers().then(function (teachers) {
        res.status(200).send(teachers);
    });
});
route.post('/', function (req, res) {
    var newteacher = {
        id: 0,
        name: req.body.name
    };
    TeacherService_1.addTeacher(newteacher, req.body.sid).then(function (teacher) {
        res.status(200).send(teacher);
    });
});
route.get('/:id', function (req, res) {
    var id = Number(req.params.id);
    TeacherService_1.getTeacherById(id).then(function (teacher) {
        res.status(200).send(teacher);
    });
});
route.put('/:id', function (req, res) {
    var id = Number(req.params.id);
    TeacherService_1.updateTeacherById(id, req.body.name).then(function (teacher) {
        res.status(200).send(teacher);
    });
});
route.delete('/:id', function (req, res) {
    var id = Number(req.params.id);
    TeacherService_1.deleteTeacherById(id).then(function (result) {
        res.status(200).send({
            success: true,
            id: result
        });
    });
});
exports.default = route;
//# sourceMappingURL=teacher.js.map