import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#f1f5f8;
  min-height:100vh;
  text-align:center;
  font-family: 'Roboto';
`

export const Heading=styled.h1`
font-size: 30px;
font-weight: bold;
font-family:'Roboto';
color:#2d3a35;
`

export const SpanElement=styled.span`
  color:#c20a72;

`

export const Description=styled.p`
color:#2d3a35;
font-size:15px;
font-weight:bold;
font-family:'Roboto';

`
export const ButtonElement =styled.button`
  background-color: #007bff;
  font-size:10px;
  color:#ffffff;
  font-family:"Roboto";
  border:none;
  outline:none;
  border-radius:10px;
  cursor:pointer;
  padding:20px;

`