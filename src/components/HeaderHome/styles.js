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
            width: 75%;
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
            border-radius: 10px 0px 0px 10px;
            /* border-top: 2px solid black;
            border-left: 2px solid black;
            border-bottom: 2px solid black; */
            /* box-shadow: 3px 2px 10px 10px rgba(0, 0, 0, 0.25); */


            >img{
               margin-top: 8px;
               height: 40px;
               border-radius: 100%;
               padding: 3px;
            }
         }


         >.menu {
            list-style: none;
            border-radius: 0px 10px 10px 0px;
            float: left;
            align-items: center;
            justify-content: center;
            display: flex;
            margin-left: 5px;
            /* border-right: 2px solid black;
            border-top: 2px solid black;
            border-bottom: 2px solid black; */
            /* box-shadow: 3px 2px 10px 10px rgba(0, 0, 0, 0.25); */


            >li {
               position: relative;
               float: left;
               }

            >li a {
               color: #333;
               text-decoration: none;
               padding: 5px 10px;
               display: block;
               font-family: Arial, Helvetica, sans-serif;
               font-size: 1.2em;
               /* border: 1px solid var(--primary); */
               border-radius: 5px;
               box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.1);

            }

            >li a:hover {
               background: var(--primary);
               color: #fff;
               -moz-box-shadow: 0 3px 10px 0 #CCC;
               -webkit-box-shadow: 0 3px 10px 0 #ccc;
               text-shadow: 0px 0px 5px #fff;
            }

            >li ul {
               position: absolute;
               top: 33px;
               left: 0;
               background-color: #fff;
               display: none;
            }

            >li:hover ul,
            li.over ul {
               display: block;
            }

            >li ul li {
            border: 1px solid var(--primary);
            display: block;
            width: 150px;
         }

      }
   }
   
   >#headerCardes{
      height: 50px;
      width: 100%;
      display: flex;
      background-color: white;
      align-items: center;
      margin-top: 15px;

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

