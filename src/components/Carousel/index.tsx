import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as First } from '../../images/1.svg';
import { ReactComponent as Second } from '../../images/2.svg';
import { ReactComponent as Third } from '../../images/3.svg';
import { ReactComponent as Fourth } from '../../images/4.svg';
import { ReactComponent as Fifth } from '../../images/5.svg';

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(1);

	const getCurrentSlide = () => {
		switch (currentSlide) {
			case 1:
				return <First />;
			case 2:
				return <Second />;
			case 3:
				return <Third />;
			case 4:
				return <Fourth />;
			case 5:
				return <Fifth />;
			default:
				<First />;
		}
	};

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
			{getCurrentSlide()}
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
	display: flex;
	border: 5px solid rgba(0, 0, 0, 0.2);
	> {
		height: 80vh;
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

export default Carousel;
