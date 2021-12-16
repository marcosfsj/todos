import {useMutation, useQuery, useQueryClient} from 'react-query';
import api from '../config/api';
import Todo from '../interfaces/Todo';

export const useGetAllTodos = () => {
  return useQuery('todos', () => api.get('/task').then(res => res.data.data));
};

export const useGetTodo = (id: number) => {
  return useQuery('todos', () => api.get(`/task/${id}`).then(res => res.data.data));
};

export const useAddTudoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (description: string) => api.post('/task', {description}).then(res => res.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    },
  );
};

export const useToggleTodoCompletedMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (todo: Todo) =>
      api.put(`/task/${todo._id}`, {completed: !todo.completed}).then(res => res.data),
    {
      onSuccess: todo => {
        queryClient.setQueryData<Todo[] | undefined>('todos', oldTodos => {
          if (oldTodos) {
            return oldTodos.map(oldTodo => {
              if (oldTodo._id === todo._id) {
                return todo;
              }
              return oldTodo;
            });
          }
        });
      },
    },
  );
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((id: number) => api.delete(`/task/${id}`).then(() => id), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
};
