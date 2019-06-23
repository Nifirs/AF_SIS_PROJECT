import React from 'react'



class Download extends React.Component {
    download() {
        // fake server request, getting the file url as response
        setTimeout(() => {
            const response = {
                file: 'http://localhost:4000/api/download',
            };
            // server sent the url to the file!
            // now, let's download:
            window.location.href = response.file;
            // you could also do:
            // window.open(response.file);
        }, 100);
    }
    render() {
        return(
            <button onClick={this.download}>Download file </button>
        );
    }
}

// ReactDOM.render(<Download/>, document.getElementById('View'));

export default Download;