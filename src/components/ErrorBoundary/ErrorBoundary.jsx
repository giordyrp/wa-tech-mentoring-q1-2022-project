import React from 'react';
import Button from '../Button';
import FlexDiv from '../FlexDiv';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <FlexDiv direction="column" align="center">
          <p>Something went wrong :(</p>
          <p>Please reload the page</p>
          <Button color="primary" onClick={() => window.location.reload()}>
            Reload
          </Button>
        </FlexDiv>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
