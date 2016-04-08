import React from 'react';
import styles from './Layout.scss';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = ({children}) => {
    return <div className={styles.wrapper}>
        <Header />
        <section>
            
        </section>
        <Footer />
    </div>;
}

export default Layout;