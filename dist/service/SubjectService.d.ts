import { StudentI, SubjectI } from '../model/entityI';
export declare function getSubjects(): Promise<SubjectI[] | null>;
export declare function addSubjects(newSubject: SubjectI, id: number): Promise<StudentI | null>;
export declare function getSubjectById(id: number): Promise<StudentI | null>;
