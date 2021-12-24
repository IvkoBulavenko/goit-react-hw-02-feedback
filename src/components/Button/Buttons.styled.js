import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
`;

export const ButtonsList = styled.ul`
  display: flex;
  align-items: center;
`;

export const ButtonsListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FeedbackBtn = styled.button`
  padding: 10px;
  border-radius: 10px;
  &:hover,
  &:focus {
    background-color: #blu;
  }
`;
