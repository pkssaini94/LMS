"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = require("../model/entity");
function getCourses() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, entity_1.Course.findAll()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getCourses = getCourses;
function addCourses(newCourse) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, entity_1.Course.create({
                        name: newCourse.name
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.addCourses = addCourses;
function getCoursesById(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, entity_1.Course.findById(id)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getCoursesById = getCoursesById;
function getBatches(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, entity_1.Batch.findAll({
                        include: [{
                                model: entity_1.Course,
                                where: {
                                    id: id
                                },
                                attributes: ['id', 'name'],
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getBatches = getBatches;
function getBatch() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, entity_1.Batch.findAll({
                        attributes: ['id', 'name'],
                        include: [{
                                model: entity_1.Course,
                                attributes: ['id', 'name']
                            }],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getBatch = getBatch;
function addBatch(batchId, newBatch) {
    return new Promise(function (resolve, reject) {
        entity_1.Batch.create({
            name: newBatch.name
        }).then(function (batch) {
            getCoursesById(batchId).then(function (course) {
                course.addBatch(batch);
                resolve(batch);
            });
        });
    });
}
exports.addBatch = addBatch;
function getBatcheById(id, bid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, entity_1.Batch.findOne({
                        where: {
                            id: bid
                        },
                        include: [{
                                model: entity_1.Course,
                                where: {
                                    id: id
                                },
                                attributes: ['id', 'name'],
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getBatcheById = getBatcheById;
function getLectures(id, bid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, entity_1.Batch.findOne({
                        where: {
                            id: bid
                        },
                        include: [{
                                model: entity_1.Course,
                                where: {
                                    id: id
                                },
                                attributes: ['id', 'name'],
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getLectures = getLectures;
function getLectureById(id, bid, lectureId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, entity_1.Batch.findOne({
                        where: {
                            id: bid
                        },
                        attributes: [],
                        include: [{
                                model: entity_1.Course,
                                where: {
                                    id: id
                                },
                                attributes: [],
                            }, {
                                attributes: ['id', 'name'],
                                model: entity_1.Lecture,
                                where: {
                                    id: lectureId
                                },
                                include: [{
                                        model: entity_1.Subject
                                    }, {
                                        model: entity_1.Teacher
                                    }]
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getLectureById = getLectureById;
function getBatchTeachers(id, bid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, entity_1.Batch.findOne({
                        where: {
                            id: bid
                        },
                        attributes: [],
                        include: [{
                                model: entity_1.Course,
                                where: {
                                    id: id
                                },
                                attributes: [],
                            }, {
                                attributes: ['teacherId'],
                                model: entity_1.Lecture,
                                include: [{
                                        attributes: ['id', 'name'],
                                        model: entity_1.Teacher
                                    }]
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getBatchTeachers = getBatchTeachers;
function getBatchStudents(cid, bid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, entity_1.Batch.findAll({
                        where: {
                            id: bid
                        },
                        attributes: [],
                        include: [{
                                model: entity_1.Course,
                                where: {
                                    id: cid
                                },
                                attributes: []
                            }, {
                                model: entity_1.Student,
                                attributes: ['id', 'name']
                            }]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getBatchStudents = getBatchStudents;
//# sourceMappingURL=CourseService.js.map