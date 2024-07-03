export interface ITask {
  id: number;
  title: string;
  difficulty: number;
  description?: string;
  completed?: boolean;
}
