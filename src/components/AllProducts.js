import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
    borderWidth:1
  },
  card: {
    maxWidth: 400,
  },
  media: {
    backgroundColor:'red',
    borderWidth:1,
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

export default class AllProducts extends  React.Component {
  constructor(props){
    super(props)
    this.state={
      expanded: false
    }
  }

  render() {

    const {name, img} = this.props.data;
    console.log("this=", this.props.data )
    return (
      <div>
        <Grid container justify="center" alignItems="center">

          <Card>
            <CardHeader
              avatar={
                <Avatar alt="Remy Sharp" src={img} style={styles.bigAvatar} />
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              style={styles.media}

              image={img}
              title="Paelloooooooooooooooooooooooooooooa dish"
            />
            <CardContent>
              <Typography component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions  disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
              <IconButton
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                  chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                  salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                  minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                  to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                  cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      <li>{name}</li>
      </div>
    )
  }
}