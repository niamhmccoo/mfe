import styled from 'styled-components';

export const FlexWrap = styled.div`
	display: flex;
	flex-flow: row-nowrap;
	justify-content: space-between;
	padding: 1rem 0.5rem;
`;

export const Button = styled.button`
	font-family: 'Helvetica Neue';
	text-decoration: none;
	letter-spacing: 0;
	background: none;
	border: none;
	color: none;
	outline: 0;
	padding: 0;
`;

export const Para = styled.p`
	font-family: 'Helvetica Neue';
	font-size: 1.4rem;
	padding: 0 2rem;
	margin: 0;
`;

export const Picture = styled.img`
	display: block;
`;
