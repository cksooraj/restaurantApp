import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<>
			<Conatiner>
				<div>© 2020 copyright company name</div>
			</Conatiner>
		</>
	);
};

const Conatiner = styled.div`
	width: 100%;
	height: 62px;
	background: #3c3c3c 0% 0% no-repeat padding-box;
	opacity: 1;
	position: absolute;

	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
`;

export default Footer;
