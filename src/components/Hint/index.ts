import styled, { keyframes } from 'styled-components';

const pulseBlack = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

export const HintButton = styled.button`
	margin-top: 3rem;
	background: transparent;
	border: none;
	outline: none;
	cursor: pointer;
	transform: scale(1);
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	border-radius: 50%;
	padding: 1rem;
	animation: ${pulseBlack} 2s infinite;
	> {
		height: 10rem;
		fill: white;
	}
`;

export const Hint = styled.div<{ show?: boolean }>`
	margin-top: 2rem;
	transition: ease 2s;
	opacity: ${({ show }) => (show ? 1 : 0)};
	height: ${({ show }) => (show ? 'auto' : '0px')};
	> * {
		height: ${({ show }) => (show ? 'auto' : '0px')};
	}
`;
