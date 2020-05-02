import * as React from 'react';

export default class LocaleSelect extends React.Component {
  handleChange = (evt) => {
    let value =
      evt.currentTarget.parentElement &&
      evt.currentTarget.parentElement.getAttribute('data-flag');
    if (value == null) {
      value = evt.currentTarget.getAttribute('data-flag');
    }
    this.props.onLocaleChange(value);
  };

  render() {
    return (
      <ul className="ul-flag">
        <li onClick={this.handleChange} data-flag="en">
          <i className="en" />
        </li>
        <li onClick={this.handleChange} data-flag="fr">
          <i className="fr" />
        </li>
      </ul>
    );
  }
}
