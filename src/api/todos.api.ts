import {useMutation, useQuery, useQueryClient} from 'react-query';
import api from '../config/api';
import Todo from '../interfaces/Todo';

export const useGetAllTodos = () => {
  return useQuery('todos', () => api.get('/todos').then(res => res.data));
};

export const useGetTodo = (id: number) => {
  return useQuery('todos', () => api.get(`/todos/${id}`).then(res => res.data));
};

export const useAddTudoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (description: string) => api.post('/todos', {description}).then(res => res.data),
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
      api
        .put(`/todos/${todo.id}`, {completed: !todo.completed, description: todo.description})
        .then(res => res.data),
    {
      onSuccess: todo => {
        queryClient.setQueryData<Todo[] | undefined>('todos', oldTodos => {
          if (oldTodos) {
            return oldTodos.map(oldTodo => {
              if (oldTodo.id === todo.id) {
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
  return useMutation((id: number) => api.delete(`/todos/${id}`).then(() => id), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
};
