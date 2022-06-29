import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import './index.module.scss';

const SkHeader = () => {
	return (
		<Container fluid className='header-sk'>
			<Grid columns={16} className='header-sk__grid'>
				<Grid.Row>
					<Grid.Column mobile={16} className='header-sk__metahead'>
						<p>DISEÑO WEB | TIENDAS ONLINE | APPS | DESARROLLO A MEDIDA | <span>654 47 05 78</span></p>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row className='header-sk__primary'>
					<Grid.Column mobile={5}>
						<Image src='/logo.svg' alt="BigStudio"/>
					</Grid.Column>
					<Grid.Column mobile={11} textAlign="right" className='header-sk__menu'>
						<Image src='/bars-solid.svg' alt="BigStudio"/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default SkHeader;