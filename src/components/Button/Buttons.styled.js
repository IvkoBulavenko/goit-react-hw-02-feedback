import styled from 'styled-components';

export const ButtonsList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

export const ButtonsListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
    list-style-type: none;
  }
`;

export const FeedbackBtn = styled.button`
  list-style-type: none;
  list-style-type: none;
  width: 100px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin: 0 6px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  color: #dadada;
  background-color: #617a53;
  box-shadow: 0px 3px 8px 0px rgba(39, 39, 39, 0.411), 0px 2px 5px 0px rgba(61, 61, 61, 0.226),
    0px 2px 3px -1px rgba(10, 10, 10, 0.137);
  cursor: pointer;
  transition: transform var(--animation-duration) var(--timing-function);
  &:hover,
  &:focus {
    transform: scale(1.06);
  }
`;
