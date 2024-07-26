import React, {Component} from 'react';
import {Grid, Cell, Button} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://avatars.githubusercontent.com/u/48163199?v=4"
                            alt="My picture"
                            className="my-img" />
                        <div className="banner-text">
                            <h1>Harshal J - Profile</h1>
                            
                            <hr/>
                            <p><a href='#py'><Button colored>Python</Button></a> | {/*<a href='#py'><Button colored>Java</Button></a> |*/} <a href='#py'><Button colored>Full Stack Projects</Button></a> | <a href='#py'><Button colored>Cloud - Databases</Button></a></p>
                            <div>
                                <section id='py' style={{height:'30%'}}><p>Python</p></section>
                                {/* <section id='java' style={{height:'30%'}}><p>Java</p></section> */}
                                <section id='webt' style={{height:'30%'}}><p>Full Stack Projects</p></section>
                                <section id='db' style={{height:'30%'}}><p>Cloud - Database</p></section>
                            </div>
                            <div className="social-links">
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/harshal-jani/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>    
                                </a>
                                {/*GitHub*/}
                                <a href="https://github.com/HarshalJani" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>    
                                </a>
                                {/*Facebook*/}
                                <a href="https://www.facebook.com/harshal.jani.3" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>    
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                {/* <div>
                    <section id='py' style={{height:'30%'}}><p>Python</p></section> */}
                    {/* <section id='java' style={{height:'30%'}}><p>Java</p></section> */}
                    {/* <section id='webt' style={{height:'30%'}}><p>Full Stack</p></section>
                    <section id='db' style={{height:'30%'}}><p>Database</p></section>
                </div> */}
            </div>
        )
    }
}

export default Landing;