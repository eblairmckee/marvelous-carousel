import styled from 'styled-components';

export const Heading1 = styled.h1`
	text-transform: uppercase;
	font-family: 'MarvelRegular-Dj83', 'Helvetica Neue', Helvetica;
	letter-spacing: 2px;
	color: ${({ theme }) => theme.white};
	font-size: 20vw;
	text-shadow: 4px 7px 0 rgba(0, 0, 0, 0.2);
	margin-block-end: 0;
	margin-block-start: 0;
	padding: 10vh 0;
	@media (min-width: 1024px) {
		font-size: 140px;
	}
`;

export const Heading2 = styled.h2`
	font-family: 'MarvelRegular-Dj83', 'Helvetica Neue', Helvetica;
	letter-spacing: 3px;
	color: ${({ theme }) => theme.white};
	font-size: 42px;
	text-transform: uppercase;
	text-shadow: 3px 5px 0 rgba(0, 0, 0, 0.2);
	@media (max-width: 747px) {
		font-size: 24px;
	}
`;

export const Subtitle = styled.h3`
	color: ${({ theme }) => theme.white};
	font-size: 36px;
	text-shadow: 3px 5px 0 rgba(0, 0, 0, 0.2);
	@media (max-width: 747px) {
		font-size: 18px;
	}
`;

export const FinePrint = styled.p`
	color: ${({ theme }) => theme.white};
`;
