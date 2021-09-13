import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Table } from "react-bootstrap";
import Textbox from "../../components/TextInput/textInput";
import { Loader } from "../../components/loader/loader";
import { useForm } from "react-hook-form";
import Documenu from "documenu";
const Body = () => {
	Documenu.configure("cd653cb960d45c3c5d4a91109faa1c17");
	const { handleSubmit, register, errors, control, reset, watch, setValue } =
		useForm({});

	const [loader, setLoader] = useState(false);
	const [response, setResponse] = useState([]);
	const [restaurantData, setRestaurantData] = useState(false);
	const [pincode, setPinCode] = useState(false);
	const [page, setPage] = useState(1);

	const handleClickPincode = async () => {
		let result = await Documenu.Restaurants.getByZipCode(pincode);

		Documenu.Restaurants.getByZipCode(pincode).then((res) => {
			console.timeLog(res?.data);
			setResponse(res?.data);
		});
	};

	const [stateCode, setStateCode] = useState(false);

	const handleClickStateCode = async () => {
		let result = await Documenu.Restaurants.getByState(stateCode);

		Documenu.Restaurants.getByState(stateCode).then((res) => {
			console.timeLog(res?.data);
			setResponse(res?.data);
		});
	};
	const handleResturantClick = async (data) => {
		let result = await Documenu.Restaurants.getMenuItems(data);

		Documenu.Restaurants.getMenuItems(data).then((res) => {
			console.timeLog(res?.data);
			setRestaurantData(res?.data);
		});
	};

	return (
		<>
			<Conatiner>
				<Conatiner1 display={page === 1}>
					<Row>
						<Col lg={10} sm={12}>
							<Textbox
								md
								nonCircular
								type="text"
								id="pincode"
								fieldName="PINCODE"
								name="pincode"
								placeholder=" "
								onChange={(e) => setPinCode(e.target.value)}
								maxLength={6}
							/>
						</Col>
						<Col lg={2} sm={12}>
							<ButtonContainer>
								<button
									onClick={handleClickPincode}
									className="mr-3"
									style={{
										background: "#ec3b3b",
										color: "#fff",
										border: "none",
										padding: "5px 10px",
										borderRadius: "5px",
										fontWeight: "bold",
										cursor: "pointer",
										marginBottom: "20px",
									}}
								>
									<i className="fa fa-trash"></i> Search by Pincode
								</button>
							</ButtonContainer>
						</Col>
					</Row>

					<Row>
						<Col lg={10} sm={12}>
							<Textbox
								md
								nonCircular
								type="text"
								id="stateCode"
								fieldName="STATE CODE"
								name="stateCode"
								placeholder=" "
								onChange={(e) => setStateCode(e.target.value)}
							/>
						</Col>
						<Col lg={2} sm={12}>
							<ButtonContainer>
								<button
									onClick={handleClickStateCode}
									className="mr-3"
									style={{
										background: "#ec3b3b",
										color: "#fff",
										border: "none",
										padding: "5px 10px",
										borderRadius: "5px",
										fontWeight: "bold",
										cursor: "pointer",
										marginBottom: "20px",
									}}
								>
									<i className="fa fa-trash"></i> Search by State Code
								</button>
							</ButtonContainer>
						</Col>
					</Row>

					<ContentContainer>
						<Table
							striped
							hover
							style={{
								width: "100%",
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "16px",
									fontSize: "15.5px",
									fontWeight: "bold",
								}}
							>
								<p style={{ margin: "0px", alignSelf: "center" }}>
									Resturants near you
								</p>
							</div>

							{response?.map((item, index) => (
								<div
									onClick={() => handleResturantClick(item?.restaurant_id)}
									style={{
										display: "flex",
										justifyContent: "space-between",
										padding: "16px",
										border: "none",
										fontSize: "13px",
										boxShadow: "0px 6px 12px #3469cb29",
										margin: "15px",
										borderRadius: "8px",
									}}
								>
									<p>
										<strong style={{ fontSize: "15px" }}>
											{" "}
											{item?.restaurant_name}{" "}
										</strong>{" "}
										<br /> {item?.restaurant_id}{" "}
									</p>
									<p style={{ fontSize: "13.5px", fontWeight: "bold" }}>
										{" "}
										<i
											style={{ marginRight: "5px", fontWeight: "bold" }}
											className="fa fa-phone"
										></i>{" "}
										{item?.restaurant_phone}{" "}
									</p>
								</div>
							))}
							{loader && <Loader />}
							{response?.length === 0 && !loader && (
								<div style={{ textAlign: "center", marginTop: "30px" }}>
									<p style={{ fontSize: "13px", fontWeight: "bold" }}>
										No Data Found
									</p>
								</div>
							)}
						</Table>
					</ContentContainer>
				</Conatiner1>
				<Conatiner1 display={page === 2}>
					<BackBtn
						onClick={() => {
							setPage(page - 1);
						}}
					/>
				</Conatiner1>
			</Conatiner>
		</>
	);
};

const Conatiner = styled.div`
	padding: 0px 50px 0px 100px;
	background: #fafafa;
	min-height: 900px !important;
`;

const Conatiner1 = styled.div`
	position: relative;
	top: 60px;
	display: ${(props) => (props.display ? "block" : "none")};
`;

const Conatiner2 = styled.div`
	position: relative;
	top: 60px;
	display: ${(props) => (props.display ? "block" : "none")};
`;
const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const ContentContainer = styled.div`
	max-height: 500px;
	overflow: scroll;
	overflow-x: hidden;
`;

const BackBtn = styled.div`
	border: none;
	background: none;
	color: #808080;
	font-size: 14px;
	font-family: "Inter-Regular";
	margin-top: 24px;
	margin-left: 62px;
	display: block;
	position: absolute;
	text-transform: uppercase;
`;
export default Body;
