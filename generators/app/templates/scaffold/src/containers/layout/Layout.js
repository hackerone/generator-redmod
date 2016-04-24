import React from 'react';
import styles from './Layout.scss';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

const Layout = ({children}) => {
    return <div className={styles.wrapper}>
        <Header />
        <section>
            {children}
        </section>
        <Footer />
    </div>;
}

Layout.propTypes = {
	children: React.propTypes.Any
}

export default Layout;