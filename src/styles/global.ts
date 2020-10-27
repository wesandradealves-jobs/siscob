import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body{
		-webkit-font-smoothing: antialiased;
		background-color: #F2F4F4;

	}
	body,input, button {
		font-family: 'Open Sans', sans-serif;
	}
	h1,h2,h3,h4,h5,h6,strong{
		font-weight: 600;
	}
	button{
		cursor: pointer;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	.App{
		width: 100%;
		display: flex;
		justify-content: flex-start;

	}


	.react-datepicker {
		font-size: 12px;
	}


	@keyframes rotating {
		from {
		-ms-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		}
		to {
		-ms-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg);
		}
	}
	.rotating {
		-webkit-animation: rotating 2s linear infinite;
		-moz-animation: rotating 2s linear infinite;
		-ms-animation: rotating 2s linear infinite;
		-o-animation: rotating 2s linear infinite;
		animation: rotating 2s linear infinite;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.loaderUser{
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		height: 100vh;
		width: 100%;
		background-color: rgba(255,255,255,.7);		
	}
`;
