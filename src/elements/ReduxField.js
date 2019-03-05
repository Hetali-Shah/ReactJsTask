import React, {Component} from 'react';
import {Field} from "redux-form";

let $this;

class ReduxField extends Component {
  constructor(props) {
    super(props);
    $this = this;
  }

  _renderComponent({input, placeholder, type, label, meta: {touched, error, warning}}) {
    const { onChange, value } = input;
    return(
      <div>
        <label>{label} </label>
        <input
          {...input}
          type={type}
          placeholder={placeholder}
        />
        {touched &&
        error && <span style={{color:'red'}}>{error}</span>
        }
        {touched &&
        warning && (
          <div>
            <span style={{color:'black'}}>{warning}</span>
          </div>
        )
        }
      </div>
    )
  }

  render() {
    const { className } = this.props;
    return (
      <div>
        <Field
          {...this.props}
          className={className}
          component={this._renderComponent}
        />
      </div>
    );
  }
}

export default ReduxField;
