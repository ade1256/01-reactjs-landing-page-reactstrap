import React,{Component} from 'react';
import {Container,Jumbotron,Button} from 'reactstrap';


export default class About extends Component{

    render(){
        return(
            <div>
                <Jumbotron fluid>
                <Container fluid>
                <h1 className="display-5">About Us</h1>
                <p className="lead">Halaman ini saya buat saat pertama kali belajar menggunakan ReactJS, saya menggunakan reactstrap untuk mempercantik halaman ini.</p>
                <hr className="my-2" />
                <p>Ternyata ReactJS mudah dan menyenangkan</p>
                
              </Container>
                </Jumbotron>
            </div>
        );
    }
}