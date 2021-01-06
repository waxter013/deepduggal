import React, {PureComponent} from 'react';
import Logo from './Logo';
// import NavLink from './NavLink';
import {StyleSheet, css} from 'aphrodite';

class Navbar extends PureComponent {
    render () {
        // const {navLinks} = this.props;

        return (
            <nav className={css(styles.nav)}>
                <Logo>Deep Duggal</Logo>
                {/*<div className={css(styles.links)}>*/}
                    {/*{navLinks.map(({name, to}) => {*/}
                        {/*return (*/}
                            {/*<NavLink href={to}>{name}</NavLink>*/}
                        {/*);*/}
                    {/*})}*/}
                {/*</div>*/}
            </nav>
        );
    }
}

const styles = StyleSheet.create({
    nav: {
        width: "100%",
        padding: "2rem"
    },
    links: {
        height: "100%",
        float: "right"
    }
});

export default Navbar;