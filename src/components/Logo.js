import React, {PureComponent} from 'react';
import {StyleSheet, css} from 'aphrodite';
import { Typography } from 'rmwc/Typography';

class Logo extends PureComponent {
    render () {
        const {href} = this.props;

        return (
            <a href={href} className={css(styles.logo)}>
                <Typography use="headline3">Deep Duggal</Typography>
                <br/>
                <Typography use="headline5">Web Developer</Typography>
            </a>
        );
    }
}

Logo.defaultProps = {
    href: "#"
};

const styles = StyleSheet.create({
    logo: {
        textDecoration: "none",
        color: "#111111",
        ":hover": {
            color: "#999999",
            transition: "color 0.2s"
        }
    }
});

export default Logo;