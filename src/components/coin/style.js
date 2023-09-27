import { styled } from "styled-components";

const Style = styled.div `
display:flex;
align-items:center;
justify-content:space-between;
gap:20px;
border-bottom:1px solid gray;
padding:10px 20px;
.nameImg{
    display:flex;
    
    align-items:center;
    gap:20px;
}
.info{
    width:70%;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
`
export default Style