import {useMutation, useQuery, useQueryClient} from 'react-query';
import api from '../config/api';
import Todo from '../interfaces/Todo';

const getAllTodos = () => api.get('/task').then(res => res.data.data);

export const useGetAllTodos = () => {
  return useQuery('todos', getAllTodos);
};

const getTodo = (id: number) => api.get(`/task/${id}`).then(res => res.data.data);

export const useGetTodo = (id: number) => {
  return useQuery('todos', () => getTodo(id));
};

const addTodo = (description: string) => api.post('/task', {description}).then(res => res.data);

export const useAddTudoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
};

export const toggleTodoCompleted = (todo: Todo) =>
  api.put(`/task/${todo._id}`, {completed: !todo.completed}).then(res => res.data);

export const useToggleTodoCompletedMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(toggleTodoCompleted, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
};

export const deleteTodo = (id: number) => api.delete(`/task/${id}`).then(() => id);

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
};
