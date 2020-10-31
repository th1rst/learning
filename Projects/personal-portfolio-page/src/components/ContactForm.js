import React from "react";
import { ReCaptcha, Input, Textarea, Button } from "react-rainbow-components";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const formID = process.env.REACT_APP_FORM_ID;

//React-Rainbow-Component adjusted to personal needs
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: undefined,
      userNameError: undefined,
      email: undefined,
      emailError: undefined,
      message: undefined,
      messageError: undefined,
      recaptcha: undefined,
      recaptchaError: undefined,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleReCaptchaSuccess = this.handleReCaptchaSuccess.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reCaptchaRef = React.createRef();
  }

  handleUserNameChange(event) {
    const userName = event.target.value;
    let error;
    if (userName === undefined || userName === "") {
      error = "the name is required";
    }
    this.setState({ userName: event.target.value, userNameError: error });
  }

  handleEmailChange(event) {
    const email = event.target.value;
    let error;
    if (email === undefined || email === "") {
      error = "the email is required";
    }
    this.setState({ email: event.target.value, emailError: error });
  }

  handleMessageChange(event) {
    const message = event.target.value;
    let error;
    if (message === undefined || message === "") {
      error = "the message is required";
    }
    this.setState({ message: event.target.value, messageError: error });
  }

  handleReCaptchaSuccess(token) {
    let error;
    if (token === undefined) {
      error = "the recaptcha needs to be completed";
    }
    this.setState({ recaptcha: token, recaptchaError: error });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`https://formspree.io/f/${formID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });

    const error = {
      userNameError: undefined,
      emailError: undefined,
      messageError: undefined,
      recaptchaError: undefined,
    };
    let reload = false;
    const { userName, email, message, recaptcha } = this.state;
    if (userName === undefined || userName === "") {
      error.userNameError = "the name is required";
      reload = true;
    }
    if (email === undefined || email === "") {
      error.emailError = "the email is required";
      reload = true;
    }
    if (message === undefined || message === "") {
      error.messageError = "the message is required";
      reload = true;
    }
    if (recaptcha === undefined) {
      error.recaptchaError = "the recaptcha needs to be completed";
      reload = true;
    }
    if (reload) {
      this.setState({ ...error });
    } else {
      this.reCaptchaRef.current.reset();
    }
  }

  render() {
    const {
      userName,
      userNameError,
      email,
      emailError,
      message,
      messageError,
      recaptchaError,
    } = this.state;

    const RECAPTCHA_APIKEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

    return (
      <div className="flex h-screen">
        <div className="w-full md:w-2/3 mx-auto">
          <form onSubmit={this.handleSubmit}>
            <h1 className="mb-16 text-blue-400 text-center text-3xl uppercase font-semibold">
              Contact Me
            </h1>
            <div className="flex flex-row justify-center mx-16 mb-8">
              <Input
                className="mr-4 w-1/2"
                label="Name"
                placeholder="Enter your name"
                value={userName}
                error={userNameError}
                onChange={this.handleUserNameChange}
                icon={<FaUser className="text-blue-400" />}
              />
              <Input
                className="ml-4 w-1/2"
                label="Email"
                placeholder="Enter your email"
                value={email}
                error={emailError}
                onChange={this.handleEmailChange}
                icon={<MdEmail className="text-blue-400" />}
              />
            </div>
            <Textarea
              className="mx-16"
              label="Message"
              placeholder="Enter a message"
              value={message}
              error={messageError}
              onChange={this.handleMessageChange}
            />
            <div className="mx-16 mt-8 flex flex-col items-center">
              <ReCaptcha
                siteKey={RECAPTCHA_APIKEY}
                ref={this.reCaptchaRef}
                error={recaptchaError}
                onChange={this.handleReCaptchaSuccess}
              />
             <Button className="h-10 mt-8" label="Send" variant="brand" type="submit" />
            </div>
           
          </form>
        </div>
      </div>
    );
  }
}
export default ContactForm;
