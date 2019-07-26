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
                            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/18952959_10154589181802555_894157675544123322_n.jpg?_nc_cat=108&_nc_oc=AQmLD-W3lmmdty0Oe5e5rYtuoHoJbROstMddmfpR3GWAtlOqzyDD2-i022niqybXsvNRd2PigUzVeeADiwLOD2Ra&_nc_ht=scontent-dfw5-1.xx&oh=a1cd8f3660c6d5aa9926ad980b30ae3a&oe=5D92B4C9"
                            alt="avatar"
                            style={{height:'250px', borderRadius: '50%'}}/>
                        <p style={{width:'75%', margin:'auto', paddingTop: '1em', textAlign: 'justify',
                            textJustify: 'inter-word'}}>
                            Hey! Thanks for visiting my website. You can contact me from the information present on the
                            right. Feel free to email me or drop a message on LinkedIn. If you are a recruiter looking for
                            a web developer or software developer (Intern/Full Time), you can drop in an email on my school email id. 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                 <i className="fa fa-phone-square" aria-hidden="true"/>+1 (682)-561-7885
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
                                 <i className="fa fa-linkedin-square" aria-hidden="true"/>Harshal Jani
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