import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }
  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }
  toggleVisibility() {
    if (window.pageYOffset > 100) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }
  scrollToTop(event) {
	event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    const { is_visible } = this.state;
    return (
		<div className="gototop"> 
        {is_visible && (
			<Link to="/" className="scroll-to-top rounded d-block" onClick={(e) => this.scrollToTop(e)}>
				<i className="fas fa-angle-up"></i>
			</Link>
        )}
      </div>
    );
  }
}
 