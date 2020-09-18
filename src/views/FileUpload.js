import React from 'react'
import ReactPlayer from 'react-player'
import PDFViewer from 'pdf-viewer-reactjs'
import '../assets/css/FileUpload.css'
import {  Button} from "reactstrap";
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import '@progress/kendo-theme-default/dist/all.css'

class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: [],
      url: null,
      formatName: '',
      flag:true,
      visible:false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e) {
    // alert("Upload Sucessfully")
    this.setState({
      url:null,
      formatName:'',
      flag:true,
      visible: !this.state.visible
    })
    // Stop form submit
    // this.fileUpload(this.state.file).then((response) => {
      // console.log('response.data', response.data);
    // })
  }

  call() {
    this.setState({
      url: null
    })
  }

  onChange(e) {
    this.call();
    this.setState({
      url: URL.createObjectURL(e.target.files[0]),
      formatName: e.target.files[0].name,
      flag:false,
      
    });
    
  }
  fileUpload(file) {
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file', file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
  }

  toggleDialog() {
		console.log(this.state.visible);
        this.setState({
            visible: !this.state.visible
        }, () => { console.log(this.state.visible) });
		
    }

  render() {
    return (
      <div className="content">
        <form onSubmit={this.onFormSubmit}>
          
          <input type="file" onChange={this.onChange} /> &ensp;&ensp;

          <Button type="submit"
          className="btn-round"
          color="primary" disabled={this.state.flag} >Upload</Button>
          <br /><br />
        </form>
        <br /><br />
        {this.state.visible && <Dialog title={"Upload Message"} onClose={this.toggleDialog}>
                    <p style={{ margin: "25px", textAlign: "center" }}>Upload the file successfully!</p>
                    
                </Dialog>}
        {this.state.formatName == '' ?
          <div className="rectangle"><p style={{ margin: '225px' }}>Previw Area</p></div> : null}

        {this.state.formatName.includes('.jpg') || this.state.formatName.includes('.gif') ||
          this.state.formatName.includes('.jpeg') || this.state.formatName.includes('.svg') ||
          this.state.formatName.includes('.png') || this.state.formatName.includes('.svg') ?
          <div style={{ textAlign: ' center' }}><img src={this.state.url} width='700px' height='500px' /></div> : null
        }
        {this.state.formatName.includes('.mp3') || this.state.formatName.includes('.wav')
          ?
          <ReactPlayer className='react-player' controls={true} width='250px'
            height='50px' url={this.state.url} /> : null}

        { this.state.formatName.includes('.mp4')
          || this.state.formatName.includes('.ogg') || this.state.formatName.includes('.ogv')
          || this.state.formatName.includes('.3gp') || this.state.formatName.includes('.mov')
          || this.state.formatName.includes('.webm') || this.state.formatName.includes('.MP4')
          || this.state.formatName.includes('.mkv') ?
          <ReactPlayer className='react-player' controls={true} width='700px'
            height='500px' url={this.state.url} /> : null}

        {this.state.formatName.includes('.pdf') ?
          <PDFViewer hideNavbar={false} navbarOnTop={false}
            document={{
              url: this.state.url,
            }}
          />
          : null}

      </div>
    )
  }
}

export default FileUpload
