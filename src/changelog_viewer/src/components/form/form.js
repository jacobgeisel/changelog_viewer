import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Component to generate form
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataGit: "" };
        this.getCommitsMessage = this.getCommitsMessage.bind(this);
    }

    // Function to get all commits messages from a git
    getCommitsMessage() {
        // construct the url
        var url = document.getElementById('urlGit').value.replace('https://github.com/', 'https://api.github.com/repos/');
        url = url + "/commits";
        if(url == "/commits")
        {
          url="https://api.github.com/repos/silverspy/changelog_viewer/commits";
        }
        // Get request to get datas
        axios.get(url)
            // success : set the state to store commits messages
            .then((data) => {
                this.setState({
                    dataGit: data.data
                });
                return true;
            })
            // catch the error
            .catch(function (error) {
                console.log(error);
                return false;
            })
            .finally(function () {
                //
            });
    }

    // Display the component
    render() {
        return (
            <div>
                <TextField id="urlGit" label="URL Repository Git" variant="filled" />
                <Button variant="outlined" type="submit" onClick={this.getCommitsMessage}>Submit</Button>
            </div>
        );
    }
}
export default Form;
