import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const MainBg = styled.div`
  font-family: 'Roboto';
`
export const RegImage = styled.img`
  height: 400px;
`
export const FormDiv = styled.form`
  width: 250px;
`
export const RegHeading = styled.h1`
  color: #334155;
  font-size: 27px;
`
export const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const Label = styled.label`
  color: #7b8794;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const Input = styled.input`
  border-color: #cbd5e1;
  border-width: 1px;
  outline: none;
  height: 27px;
  border-radius: 3px;
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: 12px;
  color: #475569;
`
export const Select = styled.select`
  height: 27px;
  margin-bottom: 10px;
  border-color: #cbd5e1;
  border-width: 1px;
  outline: none;
  border-radius: 3px;
  padding-left: 10px;
  font-size: 12px;
`
export const Option = styled.option``
export const RegButton = styled.button`
  color: #ffffff;
  background-color: #2563eb;
  border: none;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  font-size: 10px;
  margin-top: 10px;
`
export const ErrMsg = styled.p`
  font-size: 10px;
  color: #ff0b37;
`
export const Nav = styled.nav`
  padding: 10px;
`
export const Logo = styled.img`
  height: 36px;
`
export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`
