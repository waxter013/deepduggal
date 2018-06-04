import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';

class Projects extends Component {
    render () {
        const { projects } = this.props;

        return (
            <section className={css(styles.projectContainer)}>
                {/*<h1>Projects</h1>*/}
                {projects.map(({name, img, alt, liveUrl}, id) => {
                    return (
                        <a className={css(styles.project)} href={liveUrl} key={id}>
                            <img className={css(styles.projectImg)} src={img} alt={alt} />
                        </a>
                    );
                })}
            </section>
        );
    }
}

const styles = StyleSheet.create({
    projectContainer: {
        '@media screen and (min-width: 0px)': {
            height: "100%",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
        },
        '@media screen and (min-width: 768px)': {
        }
    },
    project: {
        '@media screen and (min-width: 0px)': {
            position: "relative",
            minHeight: "350px",
            maxHeight: "100%",
            padding: "2rem",
            width: "100%",
            // flex: "0 1 auto",
        },
        '@media screen and (min-width: 768px)': {
            width: "50%",
        },

    },
    projectImg: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: "-1",
        objectFit: "cover",
        objectPosition: "center center"
    },
    projectName: {
        position: "absolute",
        margin: 0,
        bottom: "1rem",
        left: "1rem",
        zIndex: 1
    }
});

export default Projects;