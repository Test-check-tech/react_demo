import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle
} from "reactstrap";
class Contact extends React.Component {

    render() {
        return (
            <div className="content">
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                <Card>
                    <CardHeader>
                        <CardTitle tag="h5"> <i className="nc-icon nc-email-85" />
                        &emsp;&emsp; Drop Us a Message</CardTitle>
                        <hr />
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                                </div>
                                <div class="form-group">
                                    {/*<input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />*/} 
                                    <br/>
                                    <Button className="btn-round" color="primary">Send Message</Button>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <textarea name="txtMsg" class="form-control" placeholder="Your Message *" ></textarea>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <hr />
                        <div className="stats">
                            <i className="nc-icon nc-satisfied text-success" /> Get In Touch with Us ...
                  </div>
                    </CardFooter>
                </Card>

            </div>

        );
    }
}

export default Contact;
