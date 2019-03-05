import React from 'react';
import { reduxForm } from 'redux-form';
import '../assets/style/Login.scss';
import ReduxField from '../elements/ReduxField';
import { getUser, USER_STORAGE_KEY } from '../common/global';
import Button from '@material-ui/core/Button/Button';

export class Login extends React.Component {

  // componentWillMount() {
  //   console.log(JSON.parse(localStorage.getItem('myData')));
  // }

  _onClickLogin(formData) {
    const { email, password } = formData;
    if(email === 'hetali@gmail.com' && password === 'hetali1234@') {
      localStorage.setItem('loginData', JSON.stringify(formData));
      this.props.history.push('dashboard');
    } else {
      alert("!Oppssss ......Invalid Email And Password ")
    }
  };

  render() {
    const { pristine, reset, handleSubmit, submitting } = this.props;
    return (
      <div className="container">
        <h1 className="form-heading">login Form</h1>
        <div className="card-body">
          <div className="login-form">
            <div className="main-div">
              <div className="panel">
                <p>Please enter your email and password</p>
              </div>
              <form onSubmit={handleSubmit(this._onClickLogin.bind(this))} className="abc">
                <div className="form-group">
                  <ReduxField
                    id='email'
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="Email"
                    label="Email"
                    value={'hetali@gmail.com'}
                  />
                </div>
                <div className="form-group">
                  <ReduxField
                    className="form-control"
                    name="password"
                    type="password"
                    placeholder="Password"
                    label="Password"
                  />
                </div>
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const validate = (values) => {
  const errors = {};
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

  return errors;
};


const warn = values => {
  const warnings = {}
  if (!/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(values.password)) {
    warnings.password = 'Hmm, you seem a bit young...'
  }
  return warnings
}
const initialValues = {
  email: 'hetali@gmail.com',
  password: 'hetali1234@'
}

const withForm = reduxForm({
  form: 'loginForm',
  validate,
  //warn
  initialValues
});

export default withForm(Login)