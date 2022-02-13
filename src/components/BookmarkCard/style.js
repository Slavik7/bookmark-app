import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0.5px #eee;
  border: 1px solid #eee;
  padding: 0.3rem 1rem;
  margin: 0.2rem 0;
`;

export const CardDetails = styled.div`
  flex: 1;
  &:hover {
    cursor: pointer;
  }
`;

export const CardActions = styled.div``;
