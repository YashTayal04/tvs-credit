import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
               <Button>Admin</Button> 
               <Button>Seller</Button> 
               <Button>Buyer</Button> 
               <Button>Financial Institution</Button> 
            </div>
        )
    }
}
