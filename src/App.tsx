import styled, { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import Homepage from './pages/Homepage';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Wrapper>
				<Homepage />
			</Wrapper>
		</ThemeProvider>
	);
};

const Wrapper = styled.div`
	background: ${({ theme }) => theme.backgroundColor};
	min-height: 100vh;
	height: 100%;
	display: flex;
	padding: 0 10vw;
	max-width: 100vw;
`;

export default App;
