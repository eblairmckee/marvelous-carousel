import styled from 'styled-components';

interface Props {
	placeholder?: string;
	changeHandler: (e: any) => void;
}

const Input: React.FC<Props> = ({ placeholder, changeHandler }) => {
	return (
		<StyledInput
			placeholder={placeholder}
			onChange={(e) => changeHandler(e.currentTarget.value)}
		/>
	);
};

const StyledInput = styled.input`
	outline: none;
	border: none;
	background: rgba(0, 0, 0, 0.2);
	box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.4);
	font-size: 24px;
	padding: 1rem;
	border-radius: 1rem;
	margin-top: 2rem;
	color: ${({ theme }) => theme.white};
	text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.2);
	min-width: 50vw;
	&::placeholder {
		color: rgba(255, 255, 255, 0.7);
	}
	@media (max-width: 747px) {
		font-size: 18px;
		max-width: 80vw;
	}
`;

export default Input;
