import React from 'react';
import { Grid, Container, Header, Image } from "semantic-ui-react";

const SkServices = () => {
	return (
		<Container className="sk-services">
			<Grid columns={16}>
				<Grid.Row className="sk-services__titles">
					<Grid.Column mobile={16}>
						<Header as="h4">¿QUÉ HACEMOS?</Header>
						<Header as="h2">
							Diseño web y marketing digital para empresas que quieren sobresalir
						</Header>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row className="sk-services__list-service">
					<Grid.Column mobile={16}>
						<Image src="/web.png" alt="" bordered />
						<Header as="h3">Diseño Web</Header>
						<p>
							Diseño de páginas web claras, atractivas y efectivas que te ayudarán
							a dar la mejor imagen de tu negocio
						</p>
						<span>Ir a Diseño Web</span>
					</Grid.Column>
					
					<Grid.Column mobile={16}>
						<Image src="/ecommerce.png" alt="" bordered/>
						<Header as="h3">Diseño Web</Header>
						<p>
							Diseño de páginas web claras, atractivas y efectivas que te ayudarán
							a dar la mejor imagen de tu negocio
						</p>
						<span>Ir a Diseño Web</span>
					</Grid.Column>
					
					<Grid.Column mobile={16}>
						<Image src="/seo.png" alt="" bordered/>
						<Header as="h3">Diseño Web</Header>
						<p>
							Diseño de páginas web claras, atractivas y efectivas que te ayudarán
							a dar la mejor imagen de tu negocio
						</p>
						<span>Ir a Diseño Web</span>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default SkServices;