import { BatchesI, StudentI } from '../model/entityI';
export declare function getStudents(): Promise<StudentI[] | null>;
export declare function addStudent(name: string, batch: any): Promise<BatchesI | StudentI | null>;
export declare function getStudentById(id: number): Promise<StudentI | null>;
export declare function deleteUserById(id: number): Promise<number | null>;
export declare function updateStudent(id: number, name: string): Promise<any | null>;
export declare function getStudentBatches(id: number): Promise<StudentI[] | null>;
export declare function addStudentToBatch(stu: any, batch: any): Promise<BatchesI | StudentI | null>;
