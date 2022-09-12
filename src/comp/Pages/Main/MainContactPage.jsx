import React from "react";
import GoogleMaps from "simple-react-google-maps";
import Banner from "../../Sections/Banner";
import companyProfile from "./../../../assets/files/Company-Profile-Suralpadi-Group.pdf";
import ContactsUsBanner from "../../../assets/images/banner/ContactsUsBanner.jpg";
import { send } from "emailjs-com";

var bnr = require("../../../assets/images/background/footer-map.png");

class MainContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      resmessage: "",
      resclass: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // fetch('./Mail.php', {
    //     method: "POST",
    //     body: JSON.stringify(this.state),
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     }).then(
    //     (response) => (response.json())
    //     ).then((response)=> {
    //     if (response.status === 'success') {
    //     alert("Message Sent.");
    //     this.resetForm()
    //     } else if(response.status === 'fail') {
    //     alert("Message failed to send.")
    //     }
    // });
    event.preventDefault();
    send("service_k872jdn", "template_3qseoog", {
      user_name:this.state.name,
      user_email:this.state.email ,
      user_phone: this.state.phone,
      user_subject: this.state.subject,
      from_name:this.state.name,
      to_name: this.state.name,
      message: this.state.message,
      reply_to: "business.global@suralpadi.com",
    },'8AvAoS2HZFehCzTV1')
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        this.setState({
          resmessage: "Message Sent Successfully!",
          resclass: "alert alert-success",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  render() {
    return (
      <>
        <div className="page-content">
          <Banner BannerBg={ContactsUsBanner} title="Contact us" />
          <div className="section-full  p-t120 p-b120">
            <div className="section-content">
              <div className="container">
                <div className="contact-one">
                  {/* CONTACT FORM*/}
                  <a className="downloadButton" href={companyProfile} download>
                    Company Profile
                  </a>
                  <div className="row no-gutters d-flex justify-content-center flex-wrap align-items-center">
                    <div className="col-lg-7 col-md-12">
                      <div className="contact-form-outer site-bg-gray">
                        <div className={this.state.resclass}>
                          {this.state.resmessage}
                        </div>
                        <form
                          className="cons-contact-form"
                          method="post"
                          onSubmit={this.handleSubmit.bind(this)}
                        >
                          {/* TITLE START*/}
                          <div className="section-head left wt-small-separator-outer">
                            <h3 className="wt-title m-b30">Contact Form</h3>
                            <p>
                              Feel Free to Contact us any time. we will get back
                              to you as soon as we can't
                            </p>
                          </div>
                          {/* TITLE END*/}
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <input
                                  name="username"
                                  value={this.state.name}
                                  onChange={this.onNameChange.bind(this)}
                                  type="text"
                                  required
                                  className="form-control"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                              <div className="form-group">
                                <input
                                  name="email"
                                  type="text"
                                  value={this.state.email}
                                  onChange={this.onEmailChange.bind(this)}
                                  className="form-control"
                                  required
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                              <div className="form-group">
                                <input
                                  name="phone"
                                  type="text"
                                  value={this.state.phone}
                                  onChange={this.onPhoneChange.bind(this)}
                                  className="form-control"
                                  required
                                  placeholder="Phone"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <input
                                  name="subject"
                                  type="text"
                                  value={this.state.subject}
                                  onChange={this.onSubjectChange.bind(this)}
                                  className="form-control"
                                  required
                                  placeholder="Subject"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <textarea
                                  name="message"
                                  className="form-control"
                                  value={this.state.message}
                                  onChange={this.onMessageChange.bind(this)}
                                  rows={4}
                                  placeholder="Message"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="site-button sb-bdr-dark"
                              >
                                Submit Now
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                      <div
                        className="contact-info site-bg-primary"
                        style={{ backgroundImage: "url(" + bnr.default + ")" }}
                      >
                        {/* TITLE START*/}
                        <div className="section-head left wt-small-separator-outer when-bg-dark">
                          <h3 className="wt-title">
                            Suralpadi Group of Companies
                          </h3>
                        </div>
                        {/* TITLE END*/}
                        <div className="contact-info-section">
                          <div className="c-info-column">
                            <span className="m-t0">Address info</span>
                            <p></p>
                            <p>
                              280, Taweelah, Abu Dhabi, United Arab Emirates,
                              P.O.Box - 137863.
                            </p>
                          </div>
                          <div className="c-info-column">
                            <span className="m-t0">Phone number</span>
                            <p>+971 588725957</p>
                          </div>
                          <div className="c-info-column">
                            <span className="m-t0">Fax number</span>
                            <p>+971 (0) 2 2041510</p>
                          </div>
                          <div className="c-info-column">
                            <span className="m-t0">Email address</span>
                            <p>business.global@suralpadi.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-full">
            <div className="container">
              <div className="gmap-outline p-b120">
                <GoogleMaps
                  apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                  style={{ height: "400px", width: "100%" }}
                  zoom={12}
                  center={{ lat: 24.453884, lng: 54.3773438 }}
                  markers={{ lat: 24.453884, lng: 54.3773438 }} //optional
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainContactPage;
