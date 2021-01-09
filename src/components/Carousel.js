import React from 'react';

import Card from '../components/Card';

import kuva1 from '../assets/images/kuva1.jpg';
import kuva2 from '../assets/images/kuva2.jpg';
import kuva3 from '../assets/images/kuva3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: ' Joonas Leppänen ',
                    subTitle: 'Tähän jotain tietoja',
                    imgSrc: kuva1,
                    link: 'https://google.fi',
                    selected: false
                },

                {
                    id: 1,
                    title: ' title 2 ',
                    subTitle: 'Tähän jotain tietoja ',
                    imgSrc: kuva2,
                    link: 'Vaikka jotain2 tähä',
                    selected: false
                },

                {
                    id: 2,
                    title: ' title 3 ',
                    subTitle: 'Tähän jotain tietoja jeejeejee',
                    imgSrc: kuva3,
                    link: 'Vaikka jotain3 tähä',
                    selected: false
                },


            ]

            
        }
    }

    handleCardClick = (id, card) =>{
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }

        });

        this.setState({
            items

        });
    }

    makeItems = (items) =>{
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>

        );
    }

}


export default Carousel;