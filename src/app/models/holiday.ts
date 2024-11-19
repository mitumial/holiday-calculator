import { Type } from "./type";

export interface Holiday {
    id: number;
    name: string;
    day: number;
    month: number;
    easterDays: number;
    type: Type
}