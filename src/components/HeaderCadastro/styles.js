import styled from "styled-components";


export const Container = styled.header`
   width : 100vw;
   position: fixed;
   height: 70px;
   top: 0;
   z-index: 100;

   background-color: var(--primary);

   display: flex;
   align-items: center;
   justify-content: space-between;

   > img {
      height: 100%;
      margin-left: 10px;
   }
   
`;

