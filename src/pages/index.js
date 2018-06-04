import React, {Component} from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import { Typography } from 'rmwc/Typography';
import {StyleSheet, css} from 'aphrodite';

// Data
import projects from "../data/projects";

class HomePage extends Component {
    render () {
        return (
            <DefaultLayout>
                {/*<Landing/>*/}
                <h1 className={css(styles.header)}><Typography use={"headline3"}>Work</Typography></h1>
                <Projects projects={projects}/>
            </DefaultLayout>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        padding: "2rem"
    }
});

export default HomePage;