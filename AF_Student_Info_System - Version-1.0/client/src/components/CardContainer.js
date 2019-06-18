import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import t2 from "./allc.jpg";
import t2 from "../images/allc.jpg";

import tapp from "../images/ac1.jpg";
import atm from "../images/Goals.jpg";

const styles = theme => ({
  card: {
    maxWidth: 350
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class CardContainer extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="nextEach">
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                CP
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Courses & Programs"
            subheader="Endurance is not just the ability to bear a hard thing, but to turn it into glory ~ William Barclay~"
          />
          <CardMedia className={classes.media} image={t2} title="Paella dish" />
          <CardContent>
            <Typography component="p">
              <b>Faculty of Computing </b>
              <br />
              <br/>
              Orientation
              <br />
              Information Technology
              <br/>
              IT/SE/ISE/CSNE/CS/IM/DS
              <br />
              Computer System Networks(Curtin)
              <br />
              <br />

              <b>Faculty of Engineering </b>
              <br/>
              <br />
              Orientation
              <br />
              Engineering
              <br />
              Architecture
              <br />
              Quantity Surveying
              <br />
              <br/>

              <b>Faculty of Humanities & Sciences</b> 
              <br />
              <br/>
              Biological Sciences
              <br />
              English
              <br />
              Law
              <br />
              Nursing
              <br />
              Physical Sciences
              <br/>
              <br/>

              <b>Faculty of Graduate Studies</b>
              <br/>
              <br />
              Enterprise Application Development
              <br />
              Cyber Security
              <br />
              Master of Business Administration
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Importance of Education:</Typography>
              <Typography paragraph>
              Importance of education tells us the value of education in our life.
              Education means a lot in everyone's life as it facilitates our learning, knowledge and skill. 
              It completely changes our mind and personality and helps us to attain the positive attitudes
              </Typography>
             
            </CardContent>
          </Collapse>
        </Card>
{/* ///2 */}
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
               VM
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Our Vision & Mission"
            subheader="For a tree to become tall it must grow tough roots among the rocks. ~Friedrich Nietzsche~"
          />
          <CardMedia className={classes.media} image={atm} title="ATM" />
          <CardContent>
            <Typography component="p">
            <b>~Vision~</b>
            <br/><br/>
            To be a Center of Excellence to adavance and disseminate knowledge, foster and promote innovation and
            produce world-class intellectual to best serve the nation and beyond.
            <br/><br/>
            <b>~Mission~</b>
            <br/><br/>
            To create a learning and research environment with best possible resources for our students and staff to be
            innovative and dedicated to excellence and to produce graduated with strong analytical, problem-solving
            and communication skills.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph><b>Adding Value:</b></Typography>
              <Typography paragraph>
               
                  Create an educational environment that naturally drives value addition at school as well as at home.
                  Develop an educational culture that enhances spiritual, moral, emotional, physical and intellectual development.
                  Provide opportunities for every student and teacher to reach his or her highest potential
              </Typography>

              <Typography paragraph><b>Education For Tomorrow:</b></Typography>
              <Typography paragraph>
              
              Consistently benchmark world-class educational systems to build best practices
              Facilitate an open environment to encourage innovative and creative thinking with prudent risk-taking
              Provide state-of-the-art facilities and resources to meet tomorrow’s needs.
              Create a research-oriented culture and a passion for lifelong learning
              </Typography>
              <Typography paragraph />

              <Typography paragraph><b>Tenacity And Zeal:</b></Typography>
              <Typography>
              Steadfastly pursue excellence in education.
              Adapt smoothly to change.
              Speedy action with determination to get things done.
              Open-minded, winning attitude.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
{/* ///3 */}
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                RR
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Rules & Regulations"
            subheader="If you can find a path with no obstacles, it probably doesn’t lead anywhere.  ~Clark ~"
          />
          <CardMedia
            className={classes.media}
            image={tapp}
            title="Paella dish"
          />
          <CardContent>
            <Typography component="p">
              TechGang students are expected to be familiar with the rules which are applicable to them. Being unaware of any
              applicable rule will not be considered as an excuse that would exonerate any student from the binding
              consequences
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Registration:</Typography>
              <Typography paragraph>
              Students will have to register on a semester basis and will be given an adequate period to
              register online for a semester. They should essentially register during this period.
              Those who fail to register during this period will be required to pay high late processing fees.
              Late applications will not be entertained after the expiry of two weeks into the semester.
              Any problem associated with a semester registration should be sorted out during the
              registration period or preferably beforehand. Students whose name is not appearing in the
              Class Attendance Lists is not registered. Such students should immediately log in to the
              “Student Help Desk” in the Courseweb to get the registration completed.
              </Typography>
            
              <Typography>
              The failure to get the registration completed on the part of the student could lead to problems
              in securing marks for assignments and other assessments and them being accounted for due
              incomplete “Registration”. 
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

CardContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardContainer);
