import './form-input-style.scss'

const FormInput = ({ inputOption }) => {

    return (
        <div className='group'>
            <input
                className='form-input'
                required
                {...inputOption} />
            {inputOption.label && (
                <label className={`${inputOption.value ? 'shrink' : ''} form-input-label`}>{inputOption.label}</label>
            )}
        </div>
    )
}

export default FormInput