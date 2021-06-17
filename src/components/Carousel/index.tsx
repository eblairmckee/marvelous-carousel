import { useState } from 'react';
import styled from 'styled-components';

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(1);

	return (
		<Wrapper>
			<CarouselButton
				onClick={() =>
					currentSlide === 1
						? setCurrentSlide(5)
						: setCurrentSlide(currentSlide - 1)
				}
			>
				-
			</CarouselButton>
			<Slide alt="Carousel slide" src={`${currentSlide}.png`} />
			<CarouselButton
				onClick={() =>
					currentSlide === 5
						? setCurrentSlide(1)
						: setCurrentSlide(currentSlide + 1)
				}
			>
				+
			</CarouselButton>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: auto 1fr auto;
	border: 5px solid rgba(0, 0, 0, 0.2);
	> {
		width: 80vh;
	}
`;

const CarouselButton = styled.button`
	outline: none;
	background: rgba(0, 0, 0, 0.2);
	color: rgba(255, 255, 255, 0.5);
	border: none;
	cursor: pointer;
	font-size: 28px;
`;

const Slide = styled.img`
	width: 100%;
`;

export default Carousel;
