import express from 'express';
import path from 'path';
import { db } from './model/entity';
import CourseRoute from './routes/course';
import StudentRoute from './routes/student';
import TeacherRoute from './routes/teacher';
import SubjectRoute from './routes/subject';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const route = {
    course: CourseRoute,
    student: StudentRoute,
    teacher: TeacherRoute,
    subject: SubjectRoute
}

app.use('/', express.static(path.join(__dirname, '../public')))

app.use('/courses', route.course)
app.use('/students', route.student)
app.use('/teachers', route.teacher)
app.use('/subjects', route.subject)

app.listen(process.env.PORT || 4444, () => {
    db.sync()
});