"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var entity_1 = require("./model/entity");
var course_1 = __importDefault(require("./routes/course"));
var student_1 = __importDefault(require("./routes/student"));
var teacher_1 = __importDefault(require("./routes/teacher"));
var subject_1 = __importDefault(require("./routes/subject"));
var cors = require('cors');
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var route = {
    course: course_1.default,
    student: student_1.default,
    teacher: teacher_1.default,
    subject: subject_1.default
};
app.use(cors());
app.use('/', express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use('/courses', route.course);
app.use('/students', route.student);
app.use('/teachers', route.teacher);
app.use('/subjects', route.subject);
app.listen(process.env.PORT || 4444, function () {
    entity_1.db.sync();
});
//# sourceMappingURL=server.js.map