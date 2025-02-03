export interface Comentario {
    id: number;
    usuarioId: number;
    casoId: number;
    contenido: string;
    fechaCreacion: Date;
}