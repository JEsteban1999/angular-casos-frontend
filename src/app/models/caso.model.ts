export interface Caso {
    id: number;
    usuarioId: number;
    tipo: string;
    descripcion: string;
    estudianteAsignado?: string;
    estado?: string;
}