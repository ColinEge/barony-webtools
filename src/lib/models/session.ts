export interface GameSession<T> {
    id: string;
    name: string;
    data: T;
}