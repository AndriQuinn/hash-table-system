import { Form } from 'react-bootstrap'

const Input = ({label, type, value, setValue, placeholder}) => {
    return ( <>
        <Form.Group  >
            <Form.Label className='dark-secondary-h'>{label}</Form.Label>
                <Form.Control
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                    className='bg-transparent rounded green-border-panel custom-placeholder my-input'
                    required
                />
        </Form.Group>
    </>)
}

export default Input