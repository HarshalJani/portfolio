import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div>
        <Grid>
          <Cell className="about-me-col" col={12}>
            <div style={{textAlign: 'center'}}>
            <h2>My Story</h2>
            <hr/>
            <p>Write about yourself</p>
            </div>
            </Cell>
        </Grid>
        </div>
        )
    }
}

export default About;