import React from 'react'

export default class DocumentEventHandler extends React.Component {
    constructor(props) {
        super(props);
        this.eventHandler = this.eventHandler.bind(this);
    }

    render() {
        return null;
    }

    eventHandler(e) {
        if (this.props.validator == null || this.props.validator(e)) {
            this.props.handler(e);
        }
    }

    componentWillMount() {
        document.addEventListener(this.props.event, this.eventHandler);

    }

    componentWillUnmount() {
        document.removeEventListener(this.props.event, this.eventHandler);

    }

}