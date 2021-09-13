import React, { useMemo } from "react";
import Select from "react-select";

export default function AnimatedMulti({
	options,
	value,
	onChange,
	borderRadius,
	id,
	name,
	onBlur,
	ref,
	placeholder,
	closeOnSelect,
	isClearable,
	isMulti,
	errors,
	Styled,
	required,
	knowMore,
	quotes,
	customSearch,
	autoFocus,
	defaultMenuIsOpen,
	onClick,
	noBorder,
	onValueChange,
}) {
	// styling
	const MemoizedStyle = useMemo(
		() => ({
			control: (styles, { isFocused, isSelected }) => ({
				...styles,
				width: "230px",
				marginRight: "30px",
				backgroundColor: "white",
				borderColor: !(
					(!Array.isArray(value) || value?.length) &&
					(!errors || value?.length)
				)
					? "#d43d3d"
					: isFocused || isSelected
					? knowMore
						? "#000"
						: "#006600"
					: "hsl(0,0%,80%)",
				borderWidth:
					isFocused || isSelected
						? quotes
							? "1px"
							: "2px"
						: !(
								(!Array.isArray(value) || value?.length) &&
								(!errors || value?.length)
						  )
						? quotes
							? "1px"
							: "2px"
						: "1px",
				minHeight: knowMore ? (quotes ? "45px !important" : "48px") : "50px",
				maxHeight: knowMore ? (quotes ? "45px !important" : "48px") : "50px",
				boxShadow: "0",
				borderRadius: knowMore
					? quotes
						? "8px"
						: "50px"
					: borderRadius
					? borderRadius
					: "2.5px",
				fontSize: knowMore ? "14px" : "18px",
				cursor: "text",
				"&:hover": {
					border: `${quotes ? "1px" : "2px"} solid  ${
						knowMore ? "#000" : "#006600"
					}`,
				},
			}),
			menu: (provided) => ({
				...provided,
				zIndex: 9999,
				border: `2px solid  ${
					knowMore ? "#000" : noBorder ? "#FFF" : "#006600"
				}`,
				boxShadow: noBorder ? "0px 4px 26px 7px #dcdcdc" : "0",
				marginTop: "-1px",
				borderRadius: borderRadius ? borderRadius : "0",
			}),
			multiValue: (styles) => ({
				...styles,
				padding: "5px",
				fontSize: "14px",
				lineHeight: "25px",
				fontWeight: "500",
				color: "#666666",
				backgroundColor: "#ebeced",
			}),
			multiValueLabel: (styles) => ({
				...styles,
				color: "#666666",
				cursor: "pointer",
			}),
			multiValueRemove: (style) => ({
				...style,
				svg: {
					zoom: "1.7",
					"-moz-transform": "scale(1.7)",
					color: "#a5a5a5",
				},
				"&:hover": {
					backgroundColor: "transparent",
					cursor: "pointer",
					color: "#3c3f3f",
				},
			}),
			singleValue: (style) => ({
				...style,
				maxWidth: quotes ? "65% !important" : "",
			}),
			option: (provided, state) => ({
				...provided,
				// borderBottom: '1px dotted pink',
				backgroundColor: state.isFocused ? "rgba(0,0,0,.05)" : "#FFFFFF",
				padding: "10px 20px",
				fontSize: "14px",
				lineHeight: "25px",
				cursor: "pointer",
				color: "#666666",
				paddingLeft: "22px",
				marginTop: "-4px",
				borderRadius: borderRadius ? borderRadius : "none",
			}),
			placeholder: (provided, { isSelected, isFocused }) => ({
				...provided,
				color:
					isSelected || isFocused ? "#dbdbdb" : quotes ? "#00000" : "#666666",

				fontFamily: quotes ? "Inter-SemiBold" : "",
				...{ fontSize: "16px" },
			}),
			indicatorsContainer: (provided, state) => ({
				...provided,
				display: state.selectProps?.menuIsOpen ? "none" : "flex",
				svg: {
					zoom: "1.5",
					"-moz-transform": "scale(1.5)",
					color: "#a5a5a5",
				},

				borderRadius: borderRadius ? borderRadius : "none",
			}),
			valueContainer: (provided) => ({
				...provided,
				padding: "2px 10px 2px 17px",
				position: quotes ? "" : "",
				left: quotes ? "" : "",
				fontfamily: quotes ? "Inter-SemiBold" : "",
				fontsize: quotes ? "14px" : "",
			}),
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[value, errors]
	);

	const handleChange = (e) => {
		onChange(e);
		if (onClick) {
			onClick(e);
		}
		if (onValueChange) {
			onValueChange(e);
		}
	};

	return (
		<Select
			id={id || "1-ms"}
			defaultMenuIsOpen={defaultMenuIsOpen}
			autoFocus={autoFocus}
			required={required}
			closeMenuOnSelect={closeOnSelect ? true : false}
			isMulti={isMulti}
			options={options || []}
			value={value}
			//	onChange={(e) => handleChange(e)}
			ignoreAccents={false}
			name={name}
			onBlur={onBlur}
			avoidHighlightFirstOption
			onSelect={onChange}
			ref={ref}
			defaultValue={value}
			hideSelectedOptions={false}
			placeholder={placeholder || "Select..."}
			isClearable={isClearable}
			styles={Styled && MemoizedStyle}
			onClick={onClick}
		/>
	);
}
