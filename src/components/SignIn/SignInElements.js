import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: relative;
  bottom: 0;
  top: -1rem;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: auto;
  z-index:2;
    
  
`;
export const BgImage= styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
   
  z-index:1;
  position: fixed;
  
  margin-left: -8px;
  margin-top: 8px;
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  

  @media screen and (max-width: 400) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin: 32px 0 0 32px;
  padding-bottom: 20px;
  text-decoration: none;
  color: #01BF71;
  font-weight: 700px;
  font-size: 32px;
  z-index: 3;

  @media screen and (max-width) {
    margin: 8px 0 0 16px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const GAWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`


export const Form = styled.form`
  backdrop-filter: blur(110px);
  
  border: white solid 1px;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
export const Packages= styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    text-align: center;
    
    @media screen and (max-width: 520px){
      grid-template-columns: 1fr ;
     
      
    }
`
export const PackagesSection= styled.div`
    text-align: left;
    align-items: center;
    padding: 0 30px;
`

export const FormLabelCol= styled.div`
  align-items:center;
  justify-content: space-around;  
  flex-direction:column;
  
`
export const Options= styled.div`
    
    position: relative;
    
`

export const FormH1 = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  margin-right: 10px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 8px 8px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  
  
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 8px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 15px;
  color: #fff;
  font-size: 14px;
`;

export const Select = styled.select`
  padding: 7px 8px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;

  
`
export const Option = styled.option`
  
    background:#01BF71;
  

`

export const TextArea = styled.textarea`
  height: 80px;
  width: 100%;
  margin-bottom: 5px;
  text-decoration: none;
`