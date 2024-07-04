import PropTypes from 'prop-types'



const Layout = ( {children} ) => {

    return (
        <div className='flex flex-col items-center mt-[68px]'>  
            {children}
        </div>
    )

}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export {Layout} 