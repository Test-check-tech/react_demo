import React from "react";
// react plugin used to create charts
import { Line, Doughnut, Bar,defaults} from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboardNASDAQChart,
  dashboardNASDAQChart2,
  DonutData,
  LineData,
  horizontalData2019,
  horizontalData2020
} from "variables/charts.js";


defaults.global.defaultColor = 'black';
defaults.global.defaultFontColor = 'black';
// defaults.global.defaultFontFamily = 'Arial'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      flag: true,
      studentCount: '45143',
      horizontalBarFlag: false,
      year: 2020,
      flagHandleClickTestPerMonth: false,
      SchoolCount:160
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickStudent = this.handleClickStudent.bind(this);
    this.handleHorizontalBar = this.handleHorizontalBar.bind(this);
    this.handleClickTest = this.handleClickTest.bind(this);
    this.handleSchoolCount=this.handleSchoolCount.bind(this);
  }


  handleClick() {
    this.setState(state => ({
      flag: !state.flag
    }));
  }

  handleClickStudent() {
    this.setState({
      studentCount: "45142"
    });
    setTimeout(() => {
      if (this.state.studentCount == "45142") {
        this.setState({
          studentCount: "45143",
        });
      }
    }, 500)
  }


  handleHorizontalBar = () => {
    this.setState({
      horizontalBarFlag: true,
      year: 2019
    })
  }

  handleHorizontalBarUpdate = () => {
    this.setState({
      horizontalBarFlag: false,
      year: 2020
    })
  }

  handleClickTest() {
    this.setState(state => ({
      flagHandleClickTestPerMonth: !state.flagHandleClickTestPerMonth
    }));
  }


  handleSchoolCount() {
    this.setState({
      SchoolCount: "159"
    });
    setTimeout(() => {
      if (this.state.SchoolCount == "159") {
        this.setState({
          SchoolCount: "160",
        });
      }
    }, 500)
  }


  render() {
    return (
      <div className="content">
        <div>
          <Card className="card-stats" >
            <CardBody>
              <Row>
                <Col lg="3" md="6" sm="6">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <br />
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-single-02 text-success" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <br />
                            <p className="card-category">Number of Students</p>
                            {<CardTitle tag="p">{this.state.studentCount}</CardTitle>}
                            <br />
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div >
                        <i className="fas fa-sync-alt" onClick={this.handleClickStudent} /> Update Now
                  </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <Card className="card-stats" >
                    <CardBody>
                      <Row>
                        <p className="card-category" >Students per Assesment Program</p>
                        {
                          this.state.flag == true ? <Doughnut
                            data={DonutData}
                            options={{
                              title: {
                                display: true,
                              },
                              legend: {
                                display: true,
                                position: 'right',
                                labels: {
                                  fontColor: '#0d0d0d'
                                }
                              }, cutoutPercentage: 40,
                              rotation: 120,
                            }}
                          /> : null}
                        {this.state.flag == false ? <Doughnut
                          data={DonutData}
                          options={{
                            title: {
                              display: true,
                            },
                            legend: {
                              display: true,
                              position: 'right'
                            }, cutoutPercentage: 40,
                            rotation: 120,
                          }}
                        /> : null
                        }
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div>
                        <i className="fas fa-sync-alt" onClick={this.handleClick} /> Update Now
                  </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <Card className="card-stats">
                    <CardBody>
                      <p className="card-category" >Test per Month</p>
                      {this.state.flagHandleClickTestPerMonth === true ? <Line
                        data={LineData}
                        options={{
                          legend: {
                            display: false,
                          }
                        }}
                      /> : null}
                      {this.state.flagHandleClickTestPerMonth === false ? <Line
                        data={LineData}
                        options={{
                          legend: {
                            display: false,
                          }
                        }}
                      /> : null}

                      <br />
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div>
                        <i className="fas fa-sync-alt" onClick={this.handleClickTest} /> Update Now
                  </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <br /><br />
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-bank text-primary" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <br />
                            <p className="card-category">Number of Schools</p>
                            <CardTitle tag="p">{this.state.SchoolCount}</CardTitle>
                            <br />
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div>
                        <i className="fas fa-sync-alt" onClick={this.handleSchoolCount}/> Update now
                  </div>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card className="card-stats" >
            <CardBody>
              <Row>
                <Col lg="9" md="6" sm="6">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h5">Items Created per Assessment Program</CardTitle>
                    </CardHeader>
                    <CardBody>
                      {!this.state.horizontalBarFlag && <Bar  data={horizontalData2020} />}
                      {this.state.horizontalBarFlag && <Bar data={horizontalData2019} />}
                    </CardBody>
                    <p style={{ textAlign: 'center' }}>Year of {this.state.year}</p>
                    <CardFooter>

                      <hr />
                      <div>
                      {!this.state.horizontalBarFlag && <i className="nc-icon nc-minimal-left" onClick={this.handleHorizontalBar}/>}{!this.state.horizontalBarFlag && 'Previous Year'}
                      {this.state.horizontalBarFlag && <i className="nc-icon nc-minimal-right" onClick={this.handleHorizontalBarUpdate}/>}{this.state.horizontalBarFlag && 'Next Year'}
                        {/*&emsp;&emsp;&emsp;&emsp;&emsp; <i className="fas fa-sync-alt" onClick={this.handleHorizontalBarUpdate} /> Update now */}
                  </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="3" md="8" sm="8">
                  <Row>
                    <Card>
                      <CardHeader>
                        <CardTitle tag="h5">Quick Access</CardTitle>
                        <hr />
                      </CardHeader>
                      <CardBody>
                        <i className="nc-icon nc-single-copy-04 text-primary" />&emsp;&emsp;Item Creation &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br /><hr />
                        <i className="nc-icon nc-ruler-pencil text-primary" />&emsp;&emsp;Test Setup<br /><hr />
                        <i className="nc-icon nc-paper text-primary" />&emsp;&emsp;Review Content<br /><hr />
                        <i className="nc-icon nc-chart-bar-32 text-primary" />&emsp;&emsp;Reports
                  </CardBody>
                      <CardFooter>
                        <hr />
                        <div>
                          <i className="nc-icon nc-send text-primary" /> &emsp;Click to Access
                  </div>
                      </CardFooter>
                    </Card>
                  </Row>
                  <Row>
                    <Card>
                      <CardHeader>
                        <CardTitle tag="h5">Insights</CardTitle>
                        <hr />
                      </CardHeader>
                      <CardBody>
                        University of Kansas Cybersecurity Boot Camp
                    <br /><hr />
                        FACULTY RECITAL SERIES: Hannah Collins, cello
                        <hr />
                        {/* <br /><hr /> */}
                      </CardBody>
                      {/*  <CardFooter>
                        <hr />
                        <div className="stats">
                          <i className="fa fa-history" />Event's
                  </div>
                      </CardFooter>*/}
                    </Card>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card >
          <Card className="card-stats" >
            <CardBody>
              <Row>
                <Col md="6">
                  <Card className="card-chart">
                    <CardHeader>
                      <CardTitle tag="h5">QTI Items Import per Month</CardTitle>
                    </CardHeader>
                    <CardBody>
                      {<Line
                        data={dashboardNASDAQChart2.data}
                        options={dashboardNASDAQChart2.options}
                        width={400}
                        height={200}
                      />}
                    </CardBody>
                    
                    <CardFooter>
                    <p style={{ textAlign: 'center' }}>Year of 2020</p>
                      {/* <div className="chart-legend">
                        <i className="fa fa-circle text-info" /> DLM &emsp;&emsp;
                        <i className="fa fa-circle text-success" /> KAP
                  </div> 
                      <hr />
                      <div className="card-stats">
                        <i className="fa fa-check" /> Data information certified
                  </div> */}
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-chart">
                    <CardHeader>
                      <CardTitle tag="h5">QTI Items Export per Month</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Line
                        data={dashboardNASDAQChart.data}
                        options={dashboardNASDAQChart.options}
                        width={400}
                        height={200}
                      />
                    </CardBody>
                    <CardFooter>
                    <p style={{ textAlign: 'center' }}>Year of 2020</p>
                      {/* <div className="chart-legend">
                        <i className="fa fa-circle " style={{ color: "#824CA7" }} /> PLT W  &emsp;&emsp;
                        <i className="fa fa-circle " style={{ color: "#EE6C81" }} />  I-SMART
                  </div> 
                      <hr />
                      <div className="card-stats">
                        <i className="fa fa-check" /> Data information certified
                  </div>*/}
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card className="card-stats" >
            <CardBody>
              <Row>
                <Col md="6">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h5">Recent Assessment Program Status</CardTitle>
                      {/* <p className="card-category">Last Campaign Performance</p> */}
                      <hr />
                    </CardHeader>
                    <CardBody>
                      <table>
                        <tr>
                          <th>Assessment Program &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
                          <th>Location &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
                          <th>Status &emsp;&emsp;&emsp;&emsp;&emsp;</th>
                          <hr />
                        </tr>

                        <tr>
                          <td>MSS &emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <td>Kansas City &emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <td>&emsp;<i className="fa fa-circle text-primary" />&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <hr />
                        </tr>

                        <tr>
                          <td>CPPR &emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <td>Lawrence Town &emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <td>&emsp;<i className="fa fa-circle text-gray" />&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <hr />
                        </tr>

                        <tr>
                          <td> I-Smart 2 &emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <td>Oklahama City &emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <td>&emsp;<i className="fa fa-circle text-primary" />&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <hr />
                        </tr>

                        <tr>
                          <td>C PASS  &emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <td>Manhattan &emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <td>&emsp;<i className="fa fa-circle text-danger" />&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                          <hr />
                        </tr>
                      </table>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="legend">
                        <i className="fa fa-circle text-primary" /> Added{" "}
                        <i className="fa fa-circle text-danger" /> Rejected{" "}
                        <i className="fa fa-circle text-gray" /> Waiting
                  </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="6">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h5">KU News</CardTitle>
                      <hr />
                    </CardHeader>
                    <CardBody>
                      <marquee direction="down" scrolldelay="400" bgcolor="white">
                        <b>*</b>&emsp; First KU School of Professional Studies class starts this fall, pursuing workforce-oriented education — All KU News »
                    <hr />
                        <b>*</b>&emsp; The Kansas City Star — Tue, 09/08/2020
                          Former Kansas chancellor Gene Budig dies at age 81. He led a long, fascinating career
                    <hr />
                        <b>*</b>&emsp; The Washington Post — Tue, 09/08/2020
                          Gene Budig, last president of the baseball’s American League, dies at 81
                    <hr />
                      </marquee>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>

          </Card>
        </div>
      </div>
    );
  }
}

export default Dashboard;
