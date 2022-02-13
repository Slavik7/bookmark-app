import styled from "styled-components";
import * as colors from "../../theme/colors";
export const ListContainer = styled.div`
  width: 100%;
  max-width: 450px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 5px #eee;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ListHeader = styled.div`
  box-shadow: 0 1px 1px 1px #eee;
  text-align: center;
  background: ${colors.primaryMain};
`;
export const List = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 80vh;
  heigth: 100%;
`;
