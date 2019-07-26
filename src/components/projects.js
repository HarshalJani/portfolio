import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">
                {/*Project 1*/}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '175px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmabQSerXpSARasPI7TzMBPeCc44QQ8yBHChyzph4ck0L0IkBK) center / cover'}}>
                    Data Mining Project #1
                </CardTitle>
                <CardText>Summary of Project</CardText>
                <CardActions border>
                    <Button colored>Link to Page Describing Project</Button>
                    <a href="https://www.linkedin.com/in/harshal-jani/" rel="noopener noreferrer" target="_blank">
                        <Button colored>GitHub</Button>
                        </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>

            {/*Project 2*/}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '175px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmabQSerXpSARasPI7TzMBPeCc44QQ8yBHChyzph4ck0L0IkBK) center / cover'}}>
                    Data Mining Project #2
                </CardTitle>
                <CardText>Summary of Project</CardText>
                <CardActions border>
                    <Button colored>Link to Page Describing Project</Button>
                    <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>

            {/*Project 3*/}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '175px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmabQSerXpSARasPI7TzMBPeCc44QQ8yBHChyzph4ck0L0IkBK) center / cover'}}>
                    Data Mining Project #3
                </CardTitle>
                <CardText>Summary of Project</CardText>
                <CardActions border>
                    <Button colored>Link to Page Describing Project</Button>
                    <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            </div>
        )
    } else if(this.state.activeTab === 1) {
        return(
            <div><h1>This is Neural Networks</h1></div>
        )
    } else if(this.state.activeTab === 2) {
        return(
            <div><h1>This is Database System</h1></div>
        )
    } else if(this.state.activeTab === 3) {
        return(
            <div><h1>This is Simulation</h1></div>
        )
    } else if(this.state.activeTab === 4) {
        return(
            <div><h1>This is Web Programming</h1></div>
        )
    }
}
    

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab>Data Mining</Tab>
                    <Tab>Neural Networks</Tab>
                    <Tab>Database System</Tab>
                    <Tab>Simulation</Tab>
                    <Tab>Web Programming</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;