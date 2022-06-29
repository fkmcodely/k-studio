import React from 'react';
import { Container, Grid, Image, Button, Header } from 'semantic-ui-react';

const SkBanner = () => {
	return (
		<Container className="sk-banner">
			<Grid columns={16}>
				<Grid.Row>
					<Grid.Column mobile={16} className="sk-banner__content">
						<div className="sk-banner__info">
							<Image src="/address-book-solid.svg" alt="Adress Book" />
							<Header as="h3">PIDENOS PRESUPUESTO</Header>
							<Header as="h6">SIN COMPROMISOS, PRESUPUESTOS EN MENOS DE 24 HORAS</Header>
						</div>
					</Grid.Column>
					<Grid.Column className="sk-banner__message" mobile={16}>
						<Button primary>PIDENOS PRESUPUESTO</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default SkBanner;