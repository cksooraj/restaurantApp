import styled from "styled-components";

const colorsecondary = "#e3e4e8";
const danger = "#bf1650";

export const TextInput = styled.input`
	width: 100%;
	border-radius: ${(props) => (props?.nonCircular ? "10px" : "50px")};
	text-align: inherit;
	color: #333;
	padding: 20px 8px 5px 20px;
	font-weight: ${(props) => (props?.fontWeight ? props?.fontWeight : "400")};
	font-family: "Inter-Light";
	font-size: 14px;
	border: 1px solid ${(props) => (props.error ? danger : "#e3e4e8")};
	height: 50px;
	content: ${({ icon }) => (icon ? `<i className=${icon}>` : "")};
	& ~ label {
		pointer-events: none;
		top: 12px;
	}
	&:focus {
		outline: none;
		border: ${(props) => (props.error ? "2px" : "2px")} solid
			${(props) => (props.error ? danger : "")};
		& ~ label {
			font-size: 12px;
			top: 2px;
			left: 20px;
			font-family: "Inter-Medium";
			color: #000;
		}
	}
	&:not(:placeholder-shown) ~ label {
		font-size: 12px;
		top: 2px;
		left: 20px;
		font-weight: 500;
		font-family: "Inter-Medium";
	}
`;

export const FormGroup = styled.div`
	position: relative;
	text-align: left;
	width: 100%;
	margin-bottom: 24px;
`;

export const Label = styled.label`
	position: absolute;
	font-family: "Inter-Medium";
	color: #333;
	transition: all 0.3s;
	top: 13px;
	left: 20px;
	font-weight: 500px;
	font-size: 16px;
`;
export const Req = styled.label`
	color: red;
`;

export const ITag = styled.i`
	// display: flex;
	// left: -25px;
	// top: -35px;
	// position: relative;
	// justify-content: flex-end;
	// color: rgb(74, 74, 74);
	// font-size: 19px;
	// cursor: text;
`;
