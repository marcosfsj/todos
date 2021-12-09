import React, {useMemo, useRef} from 'react';
import {useGetAllTodos, useAddTudoMutation} from '../../api/todos.api';
import PageTitle from '../../components/PageTitle';
import styled from 'styled-components';
import TodosItem from './todos-item';
import Todo from '../../interfaces/Todo';

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Table = styled.div``;

const AddNewTodoArea = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 2fr 1fr);
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 40px;
  border: 1px solid black;
`;

const InputArea = styled.div`
  justify-items: center;
  padding-left: 8px;
`;

const Input = styled.input`
  width: 100%;
`;

const ButtonArea = styled.div`
  display: grid;
  justify-items: center;
  padding-left: 7px;
`;

const Button = styled.button`
  width: 100px;
`;

const TodosPage = () => {
  const todos = useGetAllTodos();
  const addTodo = useAddTudoMutation();
  const todosCount = useMemo(() => todos.data && todos.data.length, [todos]);
  const textInput = useRef<HTMLInputElement>(null);

  if (todos.isLoading) return null;
  if (todos.error) return null;

  const handleAddClick = () => {
    if (textInput?.current?.value) {
      addTodo.mutate(textInput.current.value);
      textInput.current.setAttribute('value', '');
    }
  };

  return (
    <MainPanel>
      <PageTitle title={`React Query Todos - count ${todosCount}`} />
      <Table>
        {todos.data.map(({_id, description, completed}: Todo) => (
          <TodosItem key={_id} _id={_id} description={description} completed={completed} />
        ))}
      </Table>
      <AddNewTodoArea>
        <InputArea>
          <Input ref={textInput} />
        </InputArea>
        <ButtonArea>
          <Button disabled={addTodo.isLoading} onClick={handleAddClick}>
            Add
          </Button>
        </ButtonArea>
      </AddNewTodoArea>
    </MainPanel>
  );
};

export default TodosPage;
