import * as React from 'react';
import { IntlProvider } from 'react-intl';

export default class Language extends React.PureComponent {
  render() {
    return (
      <IntlProvider
        textComponent={React.Fragment}
        locale={this.props.locale || 'en'}
        key={this.props.locale ? this.props.locale : 'en'}
        messages={
          this.props.messages[this.props.locale ? this.props.locale : 0]
        }
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}
