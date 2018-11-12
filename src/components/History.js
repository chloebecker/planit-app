import React from 'react';
import axios from "axios";

class History extends React.Component {

    componentDidMount() {
        axios
            .get("https://planit-app-api.herokuapp.com/posts/:accountId=1")
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        const data = [{"site":"Twitter","contents":"Come to our presentation today","desiredTime":"Nov 12 2018 01:15:00","accountId":"1"},{"site":"Twitter","contents":"Thank you for listening to Planit","desiredTime":"Nov 12 2018 01:50:00","accountId":"1"},{"site":"Twitter","contents":"Don't forget about our presentation later this semester","desiredTime":"Nov 13 2018 16:30:00","accountId":"1"}];

        return(
            <div>
                <h1>History</h1>
            </div>
        )


    }
}

export default History;