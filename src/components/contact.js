import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Harshal Jani</h2>
                        <img
                            src="https://avatars.githubusercontent.com/u/48163199?v=4"
                            alt="avatar"
                            style={{height:'250px', borderRadius: '50%'}}/>
                        <p style={{width:'75%', margin:'auto', paddingTop: '1em', textAlign: 'justify',
                            textJustify: 'inter-word'}}>
                            Hey! Thanks for visiting my website. You can contact me from the information present on the
                            right. Feel free to email me or drop a message on LinkedIn. If you are a recruiter looking for
                            a Software Developer or Data Engineer (Full Time), you can drop in an email on my email id. 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                 <i className="fa fa-phone-square" aria-hidden="true"/>+1 (***)-***-****
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                 <i className="fa fa-envelope-open" aria-hidden="true"/>harshaljani95@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                 <i className="fa fa-envelope" aria-hidden="true"/>harshal.jani@mavs.uta.edu
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                 <i className="fa fa-linkedin-square" aria-hidden="true"/>Harshal J
                                </ListItemContent>
                            
                            </ListItem>
                        </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;