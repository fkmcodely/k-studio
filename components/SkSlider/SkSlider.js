import React from 'react';
import { Container, Grid, Image, Button } from 'semantic-ui-react';

const SkSlider = () => {
	return (
		<Container className="sk-slider">
			<Grid columns={16} className="sk-slider__container">
				<Grid.Row>
					<Grid.Column mobile={16} >
						<section className="sk-slider__content">
							<div>
								<h3>K-STUDIO</h3>
								<h1>SU PARTNER IDEAL PARA SU NEGOCIO DIGITAL</h1>
								<Button primary>
									Comenzar
								</Button>
							</div>
							<div></div>
						</section>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default SkSlider;