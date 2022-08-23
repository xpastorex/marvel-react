import { Card, Header } from 'semantic-ui-react'
import Container from '../Container'
import useFetch from '../../hooks/useFetch'
import './ListLastEvent.scss'
import LastEvents from '../LastEvents/LastEvents';

export default function ListLastEvent() {

    const lastEventsFetch = useFetch(`${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=5`);

    return (
        <div className='container-list-last-events'>
            <Header size='large'>Ultimos Eventos</Header>
            <Container bg="light">
                <Card.Group itemsPerRow={5}>
                    <LastEvents lastEventsFetch={lastEventsFetch}/>
                </Card.Group>
            </Container>
        </div>
    );
}