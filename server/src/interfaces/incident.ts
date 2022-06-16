export interface IIncident {
    id: string;
    type: string;
    title: string;
    description: string;
    resolved: boolean;
    createdAt: number;
}