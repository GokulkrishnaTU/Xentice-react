import React from 'react'
import "./checkbox.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Checkbox() {
  return (
    <div className='main-img'>

       
        <div className='check-box'>

        <h1 className='form-Header' >Choose from 25,00+ Spaces for your Business</h1>
        <p>Get inspired and find your perfect place</p>
        <Form>

      <Form.Group  controlId="formGridState">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>


        <Form.Group  controlId="formGridState">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>


   
        <div className="d-grid gap-2 mt-4 ">
      <Button variant="primary" size="lg" className='button'>
        Search      </Button>
      </div>

    </Form>


        </div>
      
    </div>
  )
}

export default Checkbox
