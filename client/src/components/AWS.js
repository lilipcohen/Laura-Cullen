import React, { Component } from 'react';
import { Amplify, Storage } from 'aws-amplify';
// import awsconfig from './aws-exports';
import "../styles/aws"
import { withAuthenticator } from 'aws-amplify-react';
import { Auth } from '@aws-amplify/auth';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
console.log(awsconfig);


class AWS extends Component {
    state = { fileUrl: '', file: '', filename: '' }
    handleChange = e => {
        const file = e.target.files[0]
        this.setState({
            fileUrl: URL.createObjectURL(file),
            file,
            filename: file.name
        })
        console.log("Image file: ", file);

    }
    saveFile = () => {
        Storage.put(this.state.filename, this.state.file)
            .then((result) => {
                console.log(this.state.filename, this.state.file)
                console.log('Successfully saved! YAAA!', result)
                this.setState({ fileUrl: '', file: '', filename: '' })
            })
            .catch(err => {
                console.log('error uploading file :( ', err)
            })
    }
    render() {
        return (
            <div className="get">
                <h1>AWS Image Saver!</h1>
                <h2>Simply select an image that you want to save, and click save file!
                You're image will be sent to the AWS (Amazon Web Services) site,
                where you can find all your images stored!
                </h2>
                <h2>Heres the link just in case you need it: <a href="https://s3.console.aws.amazon.com/s3/buckets/lauracullen6918dc5a494442cf8ce429c8d56faf05134308-dev?region=us-west-2&tab=objects">AWS Bucket</a></h2>

                <input type='file' onChange={this.handleChange} />

                <button onClick={this.saveFile}>Save File</button>
                <img src={this.state.fileUrl} />
            </div>
        )
    }
}

export default withAuthenticator(AWS);
