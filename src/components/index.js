import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import Example from './carousel/carousel';
import background from '../img/dg1.jpg';
import background3 from '../img/examples/card-project6.jpg';
import face1 from '../img/faces/ally.jpeg';
import face2 from '../img/faces/makara.jpeg';
import face3 from '../img/faces/martine.jpeg';
import face4 from '../img/faces/isma.jpeg';
import face5 from '../img/faces/asman.jpeg';
import { Phone, PinDrop } from '@material-ui/icons';

export default class Index extends Component {

  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_33qbo66', 'template_af256wy', e.target, 'user_uL2C0Mc7JfAqOSBxda8gJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

    render() {
        return (
            <div>
              <div className="home">
      <div className="home__down">
          <div className="home__down--left">
            <h4 className="home__down--left--h4">MAKING NEW LIVES GENERATION BETTER</h4>
            <h1 className="home__down--left--title">FULL FOOD</h1>
            <h6 className="home__down--left--h6">Life in very precious, especiall for the new borns as the will be the future of our world </h6>
          </div>
          <div className="home__down--right">
            <iframe height="250" src="https://www.youtube.com/watch?v=9mBltolo6GA" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="" title="youtube video" />
          </div>
      </div>
      </div>
    <div className="projects-1" id="projects-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ml-auto mr-auto text-center">
                <h1 className="text-muted">Our drives</h1>
                <h2 className="title">Mission</h2>
                <h4 className="title">Fight malnutrition and hunger for pregnant women and children of 6 months to 2 years by promoting agriculture through agro-processing and consuming responsibly</h4>
                <h2 className="title">Vision</h2>
                <h4 className="title">Eradicating malnutrition and hunger in the country for pregnant women and children from 6 to 2 years of age, with a tremendous raise of agriculture in agro-processing and responsible consommation.</h4>
            </div>
          </div>
        </div>
      </div>
      <Example />
    <div className="team-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
                <h1 className="text-muted">Our Team</h1>
                <h2 className="title">The Core Team</h2>
              <h5 className="description">This is the team behind the world changing organisation of full food</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face1} alt="Face 1"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background3})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Ally NENGO</h4>
                      <h6 className="card-category text-muted">Founder & Managing Director</h6>
                      <p className="card-description">
                        Ally is a socio enterpreneur, He has been certified as a nutritionist by Salad Master, with tremendous skills into communication and public speaking he has also an experience in nutritional business,(A LA SOYA, in 50 finalist of THIS NUMBER HAVE FACES)
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="https://www.linkedin.com/in/nengo-ally-617306124/" target="_blank" className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
                      <a href="https://www.facebook.com/el.ally3/" target="_blank" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face2} alt="face 2"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Jean Makara</h4>
                      <h6 className="card-category text-muted">Advisor and Business consultant</h6>
                      <p className="card-description">
                        Jean is a business guru who have been working and mentoring many successful business, Jean is also a soft-skills master and he works with different companies to improve their communication for productivity.
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="https://www.linkedin.com/in/jean-makara-1208b8166/" target="_blank" className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
                      <a href="https://www.facebook.com/jean.makara" target="_blank" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face3} alt="face 3"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Martin Munezero</h4>
                      <h6 className="card-category text-muted">Finance and risk evaluator</h6>
                      <p className="card-description">
                        Martin is an expert in the finance and risk evaluation field for over than 10 years, currently she is working with an NGO with helps looking for funds on medium level enterprises for a fast growth and expansion.
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="https://www.linkedin.com/in/munezero-uwase-martine-55484015b/" target="_blank" className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
                      <a href="https://www.facebook.com/munezero.martine" target="_blank" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face4} alt="face 3"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Ismael Saiba</h4>
                      <h6 className="card-category text-muted">Advertiser and marketer</h6>
                      <p className="card-description">
                        Ismael is a digital media person that advertise and market full food so it can get to the public, he has been working in the field of advertising for over that 7 years.
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="https://www.linkedin.com/in/ismail-saiba-128b28129/" target="_blank" className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
                      <a href="https://www.facebook.com/ismail.saiba" target="_blank" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face5} alt="face 3"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Asman Jaden</h4>
                      <h6 className="card-category text-muted">Designer and filmmaker</h6>
                      <p className="card-description">
                        Asmani is a designer and filmmaker that have been very active in these field for the last 5 years, from interviews to feature movies Asman have been doing great work, he will be helping with designs and short movies on our different shoots.
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="https://www.linkedin.com/in/asmani-saiba-2671ab188/" target="_blank" className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
                      <a href="https://www.facebook.com/asmanisaiba" target="_blank" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="pricing-5 section-gray" id="pricing-5">
    <div className="container">
        <div className="row">
        <div className="col-md-4">
            <h1 className="title">This about this!.</h1>
            <h2 className="text-gray">It always seems impossible until it done. (Nelson Mandela)</h2>
        </div>
        <div className="col-md-7 ml-auto mr-auto">
            <div className="tab-content tab-space">
            <div className="tab-pane active" id="normal">
                <div className="card card-contact card-raised">
                        <div className="card-header card-header-rose text-center">
                        <h4 className="card-title">Let get in touch</h4>
                        </div>
                        <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="info info-horizontal" style={{padding: "0"}}>
                                <div className="icon icon-rose">
                                <Phone style={{ fontSize: 40 }}/>
                                </div>
                                <div className="description">
                                <h5 className="info-title">You can call</h5>
                                <p> Ally NENGO
                                    <br /> +250 784 403 223
                                    <br /> Mon - Fri, 8:00AM-4:00PM
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="info info-horizontal" style={{padding: "0"}}>
                                <div className="icon icon-rose">
                                <PinDrop style={{ fontSize: 40 }}/>
                                </div>
                                <div className="description">
                                <h5 className="info-title">Temporary address</h5>
                                <p> Gasabo, Kacyiru
                                    <br /> KG 105 Kigali,
                                    <br /> Rwanda
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="container">
                          <form onSubmit={this.sendEmail}>
                              <div className="row pt-5 mx-auto">
                              <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name" />
                              </div>
                              <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email address" name="email" />
                              </div>
                              <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                              </div>
                              <div className="col-8 form-group pt-2 mx-auto">
                                <textarea id="" cols="30" rows="8" className="form-control" placeholder="Your message" name="message" />
                              </div>
                              <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send message" />
                              </div>
                              </div>
                          </form>
                        </div>
                    </div>
                </div>
            <div className="tab-pane" id="zamad">
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <footer className="footer bg-dark">
        <div className="container">
          <div className="copyright text-white">
            &copy;{new Date().getFullYear()} Full Food | All Rights Reserved.
          </div>
        </div>
      </footer>
            </div>
        )
    }
}
