import React, {ReactPropTypes as PropTypes} from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button/Button";

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        display: 'block',
        justifyContent:'center',
        alignItems:'center',
        margin: 20,
    },
    header: {
        minWidth: 500,
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 40,
    },
    card: {
        maxWidth: 700,
        padding: 10,
        margin: 10,
    },
    title: {
        fontSize: 16,
    },
    centerDiv: {
        fontSize: 20,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
};

class Queue extends React.Component {

    routePost (e) {
        e.preventDefault();
        this.props.history.push('/post');
        console.log('from queue to post');
    }

    render() {
        const { classes } = this.props;
        console.log('rendered');

        return (
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <Typography className={classes.header} component="h1" variant="h2">
                        Twitter Post History
                    </Typography>
                    <Card className={classes.card}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Thursday, Nov. 15, 6:00 PM
                        </Typography>
                        <Typography component="p">
                            This time tomorrow you could be eating tacos...
                        </Typography>
                    </Card>
                    <Card className={classes.card}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Thursday, Nov. 15, 12:00 PM
                        </Typography>
                        <Typography component="p">
                            Don't forget about our fundraiser at Cabo Bob's tomorrow from 6-9 PM - GET SOME TACOS!!
                        </Typography>
                    </Card>
                    <Card className={classes.card}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Wednesday, Nov. 14, 5:00 PM
                        </Typography>
                        <Typography component="p">
                            Club Lacrosse is having a fundraiser at Cabo Bob's on Friday, 6-9 PM, come out and support us!
                        </Typography>
                    </Card>
                    <div className={classes.centerDiv}>
                        <Button
                            onClick={this.routePost.bind(this)}
                            variant="contained"
                            color="primary"
                        >
                            Draft Another Post
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Queue);