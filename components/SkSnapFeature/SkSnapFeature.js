import React from 'react';
import { Container, Grid, Image, Button, Header } from 'semantic-ui-react';

const SkSnapFeature = () => {
	return (
		<Container className="sk-snap">
			<Grid columns={16}>
				<Grid.Row>
					<Grid.Column mobile={16} className="sk-snap__container">
						<Header as="h4">¿QUÉ HACEMOS?</Header>
						<Header as="h2">
							Diseño web y marketing digital para empresas que quieren sobresalir.
						</Header>
						<p>
							Hacemos diseño web en Barcelona para empresas de todos los tamaños que buscan un proveedor serio y de confianza, que diseñe páginas web modernas y 
							atractivas y que lo haga con unos precios en línea a sus posibilidades.
						</p>
						<p>
							Hacemos diseño web en Barcelona para empresas de todos los tamaños que buscan un proveedor serio y de confianza, que diseñe páginas web modernas y 
							atractivas y que lo haga con unos precios en línea a sus posibilidades.
						</p>
					</Grid.Column>
					<Grid.Column mobile={16}>
						<Image src="/snapweb.png" alt="" />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default SkSnapFeature;