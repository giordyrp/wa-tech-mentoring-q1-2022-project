import React from 'react';
import Button from '../Button';
import FlexDiv from '../FlexDiv';

interface IProps {}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
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
