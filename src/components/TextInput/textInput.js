import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, TextInput, ITag } from "./style";
import "./input.scss";

const Textbox = ({
	fieldName,
	id,
	required,
	onChange,
	name,
	defaultValue,
	value,
	type,
	error,
	placeholder,
	inputRef,
	onBlur,
	isRequired,
	onKeyDown,
	register,
	maxLength,
	onInput,
	fontWeight,
	icon,
	nonCircular,
	...otherProps
}) => {
	const _renderInput = () => (
		<>
			<FormGroup>
				{icon ? (
					<span
						onClick={() => document.getElementById(id).focus()}
						className={icon}
					/>
				) : (
					<noscript />
				)}
				<TextInput
					nonCircular={nonCircular}
					defaultValue={defaultValue}
					fontWeight={fontWeight}
					type="text"
					id={id}
					name={name}
					dobSpace
					placeholder=" "
					onKeyDown={onKeyDown}
					onInput={onInput}
					onChange={onChange}
					error={error}
					ref={register}
					maxLength={maxLength}
				/>
				<Label md htmlFor={id}>
					{fieldName}
				</Label>
			</FormGroup>
		</>
	);

	return <div className="form-group-input">{_renderInput()}</div>;
};

// ask for onChange default function !!
Textbox.defaultProps = {
	label: "label",
	value: "",
	placeholder: "placeholder",
	required: false,
	name: "",
	type: "text",
	// onChange: () => { },
};

Textbox.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	name: PropTypes.string,
	onChange: PropTypes.func,
};

export default Textbox;
