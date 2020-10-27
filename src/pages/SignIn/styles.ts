import styled from 'styled-components';
import bgLogin from './../../assets/bg_login.png';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 30px;
	.brmallsLogo {
		margin: 50px auto 0;
		max-height: 30px
	}	
`;

export const Content = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	padding: 10px;
	width: 100%;
	max-width: 900px;
	background-position: center center;
	border: 1px solid #00000000;
	border-radius: 20px;
	box-shadow: 0px 25px 40px -35px #31C6D3;
	overflow:  hidden;
	position: relative;
	background-blend-mode: multiply;
	background-color: rgb(49,198,211);
	background: url(${bgLogin}) center center / cover no-repeat, linear-gradient(90deg, rgba(49,198,211,0.7987570028011204) 65%, rgba(6,55,147,0.5326505602240896) 100%);	
	.form {
		width: 50%;
		background: #fff;
		height: 100%;
		border-radius: 20px;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		padding: 40px 60px;
		z-index: 2;
		& + * {
			flex: 1;
			display: flex; 
			flex-flow: column;
			justify-content: center;
			align-items: center;
			z-index: 2;
			h2 {
				font-weight: 300;
				color: white;
				font-size: 1.6rem;
				text-align: center;
			}
			img {
				filter: grayscale(1) brightness(2.1);
				height: 75px;
				margin-bottom: 20px;			
			}
		}
		h1 {
			letter-spacing: 0px;
			color: #495e84;
			opacity: 1;
			font-size: 1.5rem;
			font-weight: 600;
			margin-bottom: 40px;
		}
		.input {
			margin-bottom: 25px;
			width: 100%;
			.MuiInput-underline {
				width: 100%;
				&::before,
				&::after {
					display: none
				}			
				input {
					font-size: .9rem
				}			
			}		
			label {
				& + div {
					background: #495E8426;
					padding: 8px 15px;
					border-radius: 15px;
					margin: 10px auto 0;	
					[type="button"] {
						padding: 0;
						background: none;
						box-shadow: none;	
						svg {
							height: auto;
							width: 1.5rem;
							color: rgba(0,0,0,.3)
						}				
					}			
				}
			}
		}
		.keepConnected {
		    align-items: center;
		    font-size: 1.5rem;
		    font-weight: 300;
		    margin: -20px -10px 20px;		
			svg {
				width: auto;
				height: 15px;
			}
			input:checked + svg {
				path {
					fill: #ff5b22
				}	
			}
			label {
				width: auto;
				font-size: 10px;
			}
		}
		label {
			width: 100%;
			font-size: .9rem;
			color: #495e84;
			p {
				letter-spacing: 0px;
				color: #495e84;
				opacity: 1;
				font-size: 1rem;
			}
			input {
				background: #495e8426 0% 0% no-repeat padding-box;
				font-size: .9rem;
				border-radius: 15px;
				opacity: 1;
				border: 0;
				width: 100%;
				padding: 13px 20px 15px;
				margin-bottom: 22px;
				margin-top: 5px;
			    &[placeholder] {
			        color: lightgray;
			        font-weight: 300;
			        opacity: 1;
			        text-overflow: ellipsis;
			    }
			    &::-moz-placeholder {
			        color: lightgray;
			        font-weight: 300;
			        opacity: 1;
			        text-overflow: ellipsis;
			    }
			    &::-webkit-input-placeholder {
			        color: lightgray;
			        font-weight: 300;
			        opacity: 1;
			        text-overflow: ellipsis;
			    }
			    &:-ms-input-placeholder {
			        color: lightgray;
			        font-weight: 300;
			        opacity: 1;
			        text-overflow: ellipsis;
			    }
			}
		}
		button {
			background: #ff5b22 0% 0% no-repeat padding-box;
			box-shadow: 3px 3px 6px #31c6d327;
			border-radius: 15px;
			opacity: 1;
			border: 0;
			width: 100%;
			padding: 10px;
			letter-spacing: 1px;
			color: #ffffff;
			opacity: 1;
			font-size: 1rem;
			font-weight: 300;
			text-transform: uppercase;
		}		
	}
`;