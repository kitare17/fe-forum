import styled from 'styled-components';
import {Link} from "react-router-dom";


const Button = (props) => {
    let MyButton = styled.button`
 position: relative;
  background-color: ${props.color};
  border-radius: 5px;

  padding: 10px 15px 10px 15px ;
  background-repeat: no-repeat;
  cursor: pointer;
  box-sizing: border-box;
  width: 154px;
  height: 49px;
  color: #fff;
  border: none;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  overflow: hidden;
  
 &:before {
  content: "";
  background-color:${props.hoverColor};
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: width 700ms ease-in-out;
  display: inline-block;
}

&:hover::before {
  width: 100%;
}
 
`;
    return (
        <Link to={props.link}>
            <MyButton>
                {props.content}
            </MyButton>
        </Link>
    )
}
export default Button;