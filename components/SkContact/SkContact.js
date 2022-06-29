import React from 'react';
import { Container, Grid, Image, Button, Header, Input, TextArea } from 'semantic-ui-react';

const SkContact = () => {
	return (
		<Container className="sk-contact">
			<Grid columns={16}>
				<Grid.Row>
					<Grid.Column mobile={16} className="sk-contact__form-container">
						<Header as="h4">
							Formulario de contacto
						</Header>
						
						<Image className="sk-contact__contact-icon" src="/address-book-solid.svg" alt="" />

						<form className="sk-contact__formulario">
							<Input name="" placeholder="email" fluid/>
							<div className="sk-contact__input-multiple">
								<Input name="" placeholder="Nombre" fluid/>
								<Input name="" placeholder="Telefono" fluid/>
							</div>
							<TextArea placeholder="Mensaje" />
							<Button className="" type="submit" fluid>Enviar</Button>
						</form>
					</Grid.Column>
					<Grid.Column mobile={16} className="sk-contact__metadata-location">
						<Image src="/location.png" alt=""/>
						
						<div className="sk-contact__info">
							<Header as="h4">Charle Darwin, 20 (Parque tecnólogico)</Header>
							<p>
								<span>Teléfono:</span> 654 47 05 78
							</p>
							<p>
								<span>Email:</span> kstudio@gmail.com
							</p>
							<p>
								<span>Web:</span> www.kstudio.com
							</p>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default SkContact;