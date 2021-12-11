import React from 'react';
import {useDeleteTodoMutation, useToggleTodoCompletedMutation} from '../../api/todos.api';
import Button from '../../components/Button';
import styled from 'styled-components';

const Line = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 30px 2fr 1fr);
  align-items: center;
  width: 80vw;
  height: 40px;
  border: 1px solid black;
`;

const CheckBoxArea = styled.div`
  display: grid;
  justify-items: center;
`;

const DescriptionArea = styled.div``;

const Description = styled.span``;

const DeleteButtonArea = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

interface TodosItemProps {
  _id: number;
  description: string;
  completed: boolean;
}

const TodosItem = ({_id, description, completed}: TodosItemProps) => {
  const deleteTodo = useDeleteTodoMutation();
  const toggleTodoCompleted = useToggleTodoCompletedMutation();

  const handleDeleteClick = () => {
    deleteTodo.mutate(_id);
  };

  const handleToggleCompleted = () => {
    toggleTodoCompleted.mutate({_id, description, completed});
  };

  return (
    <Line>
      <CheckBoxArea>
        <input
          type="checkbox"
          onClick={handleToggleCompleted}
          value="true"
          defaultChecked={completed}
        />
      </CheckBoxArea>
      <DescriptionArea>
        <Description>{description}</Description>
      </DescriptionArea>
      <DeleteButtonArea>
        <Button secondary onClick={handleDeleteClick}>
          Delete
        </Button>
      </DeleteButtonArea>
    </Line>
  );
};

export default TodosItem;
