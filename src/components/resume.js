import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://media.licdn.com/dms/image/C4E03AQH_zrOiEZqkcw/profile-displayphoto-shrink_200_200/0?e=1564617600&v=beta&t=Lr3pUB7kiFuLmaFOOk85dzfA0wOmjoCdrfVwFYcvefA"
                alt="avatar"
                style={{height: '200px', borderRadius: '50%'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Harshal Jani</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Write Something About Yourself Here</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Arlington, Texas 76010</p>
            <h5>Phone</h5>
            <p>(682) 561-7885</p>
            <h5>Email</h5>
            <p>harshal.jani@mavs.uta.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2018}
              endYear={2020}
              schoolName="University Of Texas Arlington"
              schoolDescription="Currently doing my Masters in Computer Science. Expected year of Graduation is 2020"
               />
               <Education
                 startYear={2012}
                 endYear={2016}
                 schoolName="K J Somaiya College Of Engineering"
                 schoolDescription="Bachelor in Information Technology. Graduated in the year 2016"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2016}
              endYear={2018}
              jobName="Publicis Media - Performics.Convonix"
              jobDescription="I was an Associate working for the Pay Per Click/Search Engine Marketing team of the aforementioned company. I catered to many
              different clients during my tenure: domains include; BFSI, Automobile, Telecom etc. Worked on Google Analytics and AdWords"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Python"
                progress={40}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="Java"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
        )
    }
}

export default Resume; 