import React, { Dispatch, SetStateAction, useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import styled from 'styled-components';

import {
	Heading1,
	Heading2,
	Subtitle,
	FinePrint,
} from '../../components/headings';
import { colors } from '../../utils/colors';

const canvasStyles = {
	position: 'fixed',
	pointerEvents: 'none',
	width: '100%',
	height: '100%',
	top: 0,
	left: 0,
};

interface Props {
	toggleValidation: Dispatch<SetStateAction<boolean>>;
}

const Success: React.FC<Props> = ({ toggleValidation }) => {
	let confettiRef: any = null;

	const makeShot = (angle: number, originX: number) => {
		confettiRef &&
			confettiRef({
				particleCount: 250,
				angle,
				spread: 90,
				origin: { x: originX },
				colors: [colors.blue, colors.white],
			});
	};

	useEffect(() => {
		makeShot(60, 0);
		makeShot(120, 1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getInstance = (instance: any) => {
		confettiRef = instance;
	};

	return (
		<Wrapper>
			<GoBackButton onClick={() => toggleValidation(false)}>
				Go back
			</GoBackButton>
			<Heading1>Congrats! </Heading1>
			<Heading2>
				You've earned yourself 2 tickets <br /> to the Marvel: Universe
				of Superheroes exhibit <br /> at the Museum of Science &
				Industry
			</Heading2>
			<Subtitle>See your girlfriend to claim your reward</Subtitle>
			<FinePrint>
				* contingent that you take your very nice girlfriend with you as
				your plus one. By the way, happy birthday, I love you.{' '}
			</FinePrint>
			<ReactCanvasConfetti
				refConfetti={getInstance}
				// @ts-ignore
				style={canvasStyles}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	text-align: center;
`;

const GoBackButton = styled.button`
	background: transparent;
	border: none;
	color: ${({ theme }) => theme.white};
	font-family: 'MarvelRegular-Dj83', 'Helvetica Neue', Helvetica;
	font-size: 24px;
	text-transform: uppercase;
	position: fixed;
	left: 2rem;
	top: 2rem;
	cursor: pointer;
`;

export default Success;
