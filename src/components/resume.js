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
          <Cell col={3}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://avatars.githubusercontent.com/u/48163199?v=4"
                alt="avatar"
                style={{height: '200px', borderRadius: '50%'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Harshal J</h2>
            <h4 style={{color: 'grey'}}>Software Developer/Data Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Exprienced professional with 4+ years of hands on exprience in software development and data engineering.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Irving, Texas</p>
            <h5>Phone</h5>
            <p>(***)-***-****</p>
            <h5>Email</h5>
            <p>harshal.jani@mavs.uta.com</p>
            <h5>Web</h5>
            <p>https://harshaljani.github.io/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={9}>
            <h2>Education</h2>
            <Education
              startYear={2018}
              endYear={2020}
              schoolName="University Of Texas Arlington"
              schoolDescription="Masters in Computer Science. Graduated in the year 2020"
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
              startYear={2022}
              endYear={2024}
              jobName="T. Rowe Price Group, Inc."
              jobPosition = "Contract - Software Developer/Data Engineer"
              jobDescription="•	Created workflow for active and passive mutual fund’s ETL processing with data quality report. AWS Glue job script
developed with optimized memory computation (only 1 DPU) saving processing cost worth thousands of dollars   
•	Restructured AWS Glue jobs for reducing client’s execution cost by 7% and improving code reusability/organization 
•	Managed end-to-end production deployments, including handling adhoc production bug fixes and creating comprehensive deployment documentation for streamlined operations
•	Led multiple peer knowledge transfer and training sessions, and code reviews to ensure timely and efficient delivery of high-quality code and functionality
•	Demonstrated strong skills in Python, PySpark, Snowflake SQL, API concepts, Tableau, AWS, and Shell commands, while excelling in communication and teamwork to drive development
I was an Associate working for the Pay Per Click/Search Engine Marketing team of the aforementioned company. I catered to many
              different clients during my tenure: domains include; BFSI, Automobile, Telecom etc. Worked on Google Analytics and AdWords"
              />
              <Experience
              startYear={2022}
              endYear={2022}
              jobName="Sun Life Financial Inc."
              jobPosition = "Contract - Software Developer/Data Engineer"
              jobDescription="•	Collaborating with the business team to obtain the necessary clarity of the requirements at a function point context. Drafted business requirements to actionable user stories in JIRA for Agile based project development 
•	Work with project managers, analysts, and developers to plan technical strategies, implementation plans and project road map
•	Refactored clients Pandas and PySpark code for efficient ETL data processing saving daily manual interventions. Used caching to help improve ETL execution time by 13% 
•	Set up automation for ETL data processing using AWS S3, Lambda, and Glue PySpark along with PyTest validation scripts 
•	Monitor multiple environments in AWS to reiterate the code structure to minimize production issues to deliver continuous and good quality end user experience
"
              />
              <Experience
              startYear={2019}
              endYear={2022}
              jobName="IntelliCentrics Inc"
              jobPosition = "Software Developer (Full Stack)"
              jobDescription="•	Added Covid-19 Credential expiration and validation logic to company’s primary product (Sec3ure) which is used by 1000s of health care representatives for providing necessary entity credentialing  (Ruby-on-Rails and PHP-CodeIgniter)   
•	Created REST API (tested on Postman) to send email and text messages of meeting request to admins in MVC backend using Twilio’s services. This enabled ease of access for reps and helped organize appointments saving their lookup time   
•	Worked on various production support issues to resolve database inconsistencies using SQL queries and code bug fixes
•	Developed a dashboard for admins to filter users present in a healthcare facility. Front-end implemented with ruby-on-rails, backend API made with php-CodeIgniter. Added JavaScript to auto-refresh page to get data on active people inside the facility, and filter facilities based on division selected by admins
•	Learned to utilize Git and BitBucket for code sharing, version control along with Jenkins for CICD. Used JIRA board for SDLC and project management
"
              />
            <Experience
              startYear={2016}
              endYear={2018}
              jobName="Publicis Media - Performics.Convonix"
              jobDescription="I was an Associate working for the Pay Per Click/Search Engine Marketing team. I catered to many
              different clients during my tenure: domains include; BFSI, Automobile, Telecom etc. Worked on Google Analytics and AdWords"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Python"
                progress={65}
                />
                <Skills
                skill="SQL - Snowflake/MySQL/PostgresSQL"
                progress={70}
                />
                <Skills
                skill="Amazon Web Services"
                progress={60}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={45}
                  />
                  <Skills
                    skill="Java"
                    progress={40}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
                    <Skills
                      skill="Shell Script"
                      progress={50}
                      />
                    <Skills
                      skill="JIRA/Rally"
                      progress={60}
                      />
          </Cell>
        </Grid>
      </div>
        )
    }
}

export default Resume; 