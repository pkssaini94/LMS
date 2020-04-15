import express from 'express';
import path from 'path';
import { db } from './model/entity';
import CourseRoute from './routes/course';
import StudentRoute from './routes/student';
import TeacherRoute from './routes/teacher';
import SubjectRoute from './routes/subject';
var cors = require('cors')

const PORT = process.env.PORT || 3000;
const CONSUL_URL = process.env.CONSUL_URL || 'localhost';


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const route = {
    course: CourseRoute,
    student: StudentRoute,
    teacher: TeacherRoute,
    subject: SubjectRoute
}

app.use(cors())

app.use('/', express.static(path.join(__dirname, '../public')))

app.use('/courses', route.course)
app.use('/students', route.student)
app.use('/teachers', route.teacher)
app.use('/subjects', route.subject)

app.listen(PORT, () => {
    db.sync()
});