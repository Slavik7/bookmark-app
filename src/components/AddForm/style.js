import styled from "styled-components";

export const BookmarkFormContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #00000050;
  z-index: 111;
`;

export const FormContainer = styled.div`
  background: #fff;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 8px;
  z-index: 9999;
  position: relative;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
