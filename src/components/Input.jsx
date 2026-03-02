import { Form } from 'react-bootstrap';
import { useState } from 'react';

const Input = ({label, type, value, setValue, placeholder}) => {
    // const [email, setEmail] = useState('');
    return ( <>
        <Form.Group  >
            <Form.Label className='dark-secondary-h'>{label}</Form.Label>
                <Form.Control
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                    className='bg-transparent rounded green-border-panel custom-placeholder'
                />
        </Form.Group>
    </>)
}

export default Input