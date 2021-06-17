import { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
	Heading1,
	Heading2,
	Subtitle,
	FinePrint,
} from '../components/headings';
import Carousel from '../components/Carousel';
import Input from '../components/Input';
import Success from '../components/Success';
import { HintButton, Hint } from '../components/Hint';

import { ReactComponent as ScreamBubble } from '../images/scream-bubble.svg';

const Homepage = () => {
	const [value, setValue] = useState<string>();
	const [isValidated, setIsValidated] = useState<boolean>(false);
	const [showHint, setShowHint] = useState<boolean>(false);
	const [hintsEnabled, setHintsEnabled] = useState<boolean>(true);
	const passphrase = 'arc reactor';

	useEffect(() => {
		if (value === passphrase) {
			setIsValidated(true);
		}
	}, [value]);

	const inputChangeHandler = (inputValue: string) => {
		setValue(inputValue);
	};
	return isValidated ? (
		<Success toggleValidation={setIsValidated} />
	) : (
		<Wrapper>
			<Heading1>A Marvelous Carousel</Heading1>
			<Carousel />
			<Heading2>Haven't you always wanted to ride your heroes? </Heading2>
			<Subtitle>
				We've assembled a carousel of animals (a team, you might say)
				inspired by some of the multiverse's greatest heroes.
			</Subtitle>
			<Subtitle>
				Your mission, should you choose to accept it (yes, we're
				crossing references here, deal with it), is to find the secret
				passphrase hidden within this puzzle.
			</Subtitle>
			<Heading2>
				Take her for a spin, you might find some familiar characters.
			</Heading2>
			<FinePrint>
				Once you discover the passphrase, enter it below. If your answer
				is correct, you will be handsomely rewarded.
			</FinePrint>
			<FinePrint>
				* your answer must be all lower case, it may contain spaces.
			</FinePrint>
			<Input
				changeHandler={inputChangeHandler}
				placeholder="Enter the passphrase"
			/>
			{hintsEnabled && !showHint && (
				<HintButton onClick={() => setShowHint(!showHint)}>
					<ScreamBubble />
				</HintButton>
			)}
			<Hint show={showHint}>
				<Subtitle>The writing's on the wall.</Subtitle>
				<FinePrint>
					The words will <em>align</em> to reveal something about each
					animal. Call it a secret identity, if you will.
				</FinePrint>
			</Hint>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 100%;
	padding-bottom: 10rem;
`;

export default Homepage;
