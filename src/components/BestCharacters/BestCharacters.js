import { Header, Button, Grid, Image, GridColumn } from 'semantic-ui-react'
import Container from '../Container/Container'
import marvelImage from '../../img/marvel.png'
import './BestCharacters.scss'


export default function BestCharacters() {
    return (
        <Container>
            <div className='best-characters'>
                <Grid columns={2} divided='vertically'>
                    <Grid.Column>
                        <Header as="h1">
                            Los Mejores personajes de Marvel de los que todo el mundo habla
                        </Header>
                        <Header as="h3">
                            Disfruta del mejor contenido.
                        </Header>
                        <Button>Ver todos los personajes</Button>
                    </Grid.Column>
                    <GridColumn className='imagen-container'>
                        <img src={marvelImage} alt='Marvel App'></img>
                    </GridColumn>
                </Grid>
            </div>
        </Container>

    )
}