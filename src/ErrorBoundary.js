import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
		  <Alert variant="error">
			  <h2 className="text-danger">Oops! Something went wrong.</h2>
			  <details style={{ whiteSpace: 'pre-wrap' }}>
				<p className="text-danger">{this.state.error && this.state.error.toString()}</p>
				{this.state.errorInfo.componentStack}
			  </details>
			</Alert>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}