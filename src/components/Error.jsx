import PropTypes from 'prop-types'

export const Error = ({ text }) => {
    return (
        <div>
            <h2 className='error'>{text}</h2>
        </div>
    );
};

Error.propTypes = {
    text: PropTypes.string.isRequired
}
