import React from 'react';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import '../assets/style/SignUp.scss';
import ReduxField from '../elements/ReduxField';
import {storeUser} from '../common/global';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleSubmit(formData) {
    this.props.history.push('login');
  }

  render() {
    const { pristine, reset, handleSubmit, submitting } = this.props;
    return (
      <div className="container">
        <div className="login-form">
          <div className="main-div">
            <form onSubmit={handleSubmit(this._handleSubmit.bind(this))} className="abc">
              <table className="table">
                <tr>
                  <td style={{ width: '50%' }}>
                    <label>FirstName: </label>
                  </td>
                  <td style={{ width: '50%' }}>
                    <ReduxField
                      className="form-control"
                      name="firstname"
                      type="text"
                      placeholder="FirstName"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>LastName: </label>
                  </td>
                  <td>
                    <ReduxField
                    className="form-control"
                    name="lastname"
                    type="text"
                    placeholder="LastName"
                  />
                  </td>
                </tr>
                <tr>
                  <td><label>Email: </label></td>
                  <td><ReduxField
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                  /></td>
                </tr>
                <tr>
                  <td><label>Password: </label></td>
                  <td>
                    <ReduxField
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="PassWord"
                    />
                  </td>
                </tr>
                <tr>
                  <td><label>Confirm Password: </label></td>
                  <td><ReduxField
                    className="form-control"
                    name="ConfPassword"
                    type="Password"
                    placeholder="Confirm Password"
                  /></td>
                </tr>
                <tr>
                  <td>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                    {/*<button*/}
                    {/*type="submit"*/}
                    {/*id="submit"*/}
                    {/*disabled={submitting}*/}
                    {/*className="btn-primary-submit "*/}
                  {/*>*/}
                    {/*Submit*/}
                  {/*</button>*/}
                  </td>
                  <td> <button
                    type="button" disabled={pristine} id="clear"
                    className="btn-primary-submit " onClick={reset}
                  >
                    Clear
                  </button></td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'Firstname Require';
  } else if (values.firstname.length > 15) {
    errors.firstname = 'Must be 15 character or less';
  }
  if (!values.lastname) {
    errors.lastname = 'LastName Require';
  } else if (values.lastname.length > 15) {
    errors.lastname = 'Must be 15 character or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (
    !/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(
      values.password,
    )) {
    errors.password = 'Invalid Password';
  }
  if (values.password === values.ConfPassword) {
  } else {

  }
  return errors;
};


const warn = values => {
  const warnings = {}
  if (!/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(values.password)) {
    warnings.password = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const withForm = reduxForm({
  form: 'signUpForm',
  //validate,
  //warn
});

export default withRouter(withForm(SignUp));
