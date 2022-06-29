import React from 'react';
import { Container, Grid, Image, Button, Header } from 'semantic-ui-react';

const SkPortfolio = () => {
	return (
		<Container className="sk-portafolio">
			<Grid columns={16}>
				<Grid.Row className="sk-portafolio__title">
					<Grid.Column mobile={16}>
						<Header as="h6">PROYECTOS</Header>
						<Header as="h4">Por qué explicartelo, cuando te lo podemos enseñar</Header>
						<p>
							Llevamos más de 10 años especializados en crear diseños web personalizados y adaptados a las necesidades de cada uno de nuestros clientes. Trabajamos con todo tipo de clientes y sectores. 
						</p>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column mobile={8} className="sk-portafolio__item">
							<Image src="/portafolio1.png" alt="" />
							<Header as="h6">Goiko Grill</Header>
					</Grid.Column>
					<Grid.Column mobile={8} className="sk-portafolio__item">
							<Image src="/portafolio2.png" alt="" />
							<Header as="h6">Goiko Grill</Header>
					</Grid.Column>
					<Grid.Column mobile={8} className="sk-portafolio__item">
							<Image src="/portfolio3.png" alt="" />
							<Header as="h6">Goiko Grill</Header>
					</Grid.Column>
					<Grid.Column mobile={8} className="sk-portafolio__item">
							<Image src="/portafolio1.png" alt="" />
							<Header as="h6">Goiko Grill</Header>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default SkPortfolio;