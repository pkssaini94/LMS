import { StudentI, TeacherI } from '../model/entityI';
export declare function getTeachers(): Promise<TeacherI[] | null>;
export declare function addTeacher(newTeacher: TeacherI, id: number): Promise<StudentI | null>;
export declare function getTeacherById(id: number): Promise<TeacherI | null>;
export declare function updateTeacherById(id: number, name: string): Promise<any | null>;
export declare function deleteTeacherById(id: number): Promise<number | null>;
