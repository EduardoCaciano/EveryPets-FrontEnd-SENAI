import styled from "styled-components";

export const Container = styled.header`
   width : 100%;
   height: 55px;
   top: 0;

   background-color: var(--primary);

   align-items: center;
   justify-content: space-between;
   
  >nav{
     height: inherit;
     position: static;
     width: 100%;
     background-color: var(--primary);
     display: flex;

         > img{
            width: 80px;
            margin-left: 20px;
         }
         
         > input {
            width: inherit;
            height: 35px;

            align-items: center;
            margin-top: 10px;
            margin-left: 20px;
            border-radius: 25px;
            font-size: 22px;
            padding-left: 10px;
            border: none;
         }

         >#profile{
            height: inherit;
            width: 50px;
            margin-left: 15px;
            align-items: center;

            >img{
               margin-top: 8px;
               height: 40px;
               border-radius: 100%;
            }
         }


         >p{
            width: 220px;
            height: 10px;
            color: white;
            text-align: left;
            margin-top: 18px;
            margin-left: 10px;
            font-size: 20px;
         }
   }

   >#sair{
      width: 100%;
      padding-top: 5px;

      >a{
         >img{
         height: 28px;
         width: initial;
         float: right;
         border-radius: 5px;


         :hover{
            box-shadow: 0px 10px 10px rgba(0,0,0, 0.25);
            transform: scale(1.1); 
            cursor: pointer;
         }
      }
      }


   }
   
   >#headerCardes{
      height: 50px;
      width: 100%;
      display: flex;
      background-color: white;
      align-items: center;

      >img{
         margin-left: 30px;
         height:80px;
         width: 80px;
         border-radius: 100vh;
         border-width: 1px;
         border-style: solid;
         border-color: var(--primary);
      }

      >a{
         width: 100%;
         height: initial;
         text-decoration: none;
         >.cards {
         width: 190px;
         height: 39px;         
         border-radius: 25px;
         display: flex;
         justify-content: center;
         align-items: center;
         margin-right: auto;
         margin-left: auto;

         background-color:  var(--primary);
         
         :hover{
            box-shadow: 0px 10px 10px rgba(0,0,0, 0.25);
            cursor: pointer;
         }

         >p{
            font-weight: bold;
            font-size: 22px;
            text-align: center;
            color: white;
         }
      }
      }
      
   }

   >#caixaInformacoesParciais{
      width: 100%;
      height: 160px;
      background-color: var(--secundary);

      >#InformacoesParciais{
      width: 80%;
      height: 160px;
      justify-content: center;
      display: flex;
      align-items: center;
      margin-right: auto;
      margin-left: auto;
      margin-top: 15px;

      >div{
         align-items: center;
         height: inherit;
         width: inherit;
         margin-right: auto;
         margin-left: auto;

         background-color: var(--secundary);
        
         >.containerCardeInformacoes{
            height: 100px;
            width: 100px;
            margin-top: 13px;
            border-radius: 100%;
            margin-right: auto;
            margin-left: auto;
            justify-content: center;
            display: flex;
            align-items: center;
            
            
            background-color: white;
           
            >p{
            font-size: 40px;
            text-align: center;

            font-weight: bold;
            color: black;
            
         }
       
      }
      >p{
            text-align: center;
            margin-top: 15px;

            color: white;
         }
      }
   }

   }
   
     
   
   
 
`;

