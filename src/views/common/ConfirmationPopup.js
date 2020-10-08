import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
export default class ConfirmationPopup extends Component {
	constructor(props) {
		super(props);
		this.initialState = {
			title: props.title,
			content: props.content,
			subContent: props.subContent,
			show: props.show,
		}
		this.state = this.initialState;
	}
	render() {
		let title = this.state.title ? this.state.title : 'Confirmation';
		let content = this.state.content ? this.state.content : 'Are You Sure Want to delete ?';
		let subContent = this.state.subContent ? this.state.subContent : '';
		let show = this.state.show ? this.state.show : false;
		return (
			<Modal className="provider_module" show={show} size="md" onHide={this.props.handleClose} aria-labelledby="contained-modal-title-vcenter" backdrop="static" centered>
				<Modal.Header className={`px-3 py-2 ${ this.props.headerDisabled ?? '' }`} closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						{title}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h5>{content}</h5>
					{subContent !== '' ? <p className="mt-2">{subContent}</p> : (null)}
				</Modal.Body>
				<Modal.Footer className={`alert-model-body-css ${ this.props.footerDisabled ?? '' }`}>
					<Button variant={this.props.buttonClass ?? 'danger'} onClick={this.props.handleSubmit}>{this.props.buttonText ?? 'Yes'}</Button>
					<Button variant="secondary" onClick={this.props.handleClose}>No</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}