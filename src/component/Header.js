import React, {Component} from 'react';
import {Jumbotron, Button} from 'reactstrap';

export default class Header extends Component{
    render(){
        return (
            <div>
              <Jumbotron>
                <h1 className="display-3">Selamat datang !</h1>
                <p className="lead">Halo, saya sedang belajar menggunakan ReactJS ternyata mudah</p>
                <p className="lead">
                  <Button color="primary">Mulai</Button>
                </p>
              </Jumbotron>
            </div>
          );
    }
}