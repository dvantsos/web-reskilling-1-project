import PropTypes from 'prop-types';
import Header from '../components/LayoutComponents/Header'
import Footer from '../components/LayoutComponents/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <div className='w-full h-full'>
                <Header/>
                    {children}
                <Footer />
            </div>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout