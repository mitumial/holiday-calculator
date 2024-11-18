import { type } from "./type";

export interface holiday {
    id: number;
    name: string;
    day: number;
    month: number;
    easterDays: number;
    type: type
}