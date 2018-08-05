import React from 'react'

export default function doubleClickBehavior(WrappedComponent, selectData) {

    return class extends React.Component {

        TIME_BETWEEN_CLICKS = 190;
        lastClickTime = null;

        constructor(props) {
            super(props);
            this.handleClickBinded = this.handleClick.bind(this);
        }

        onTrustClick(event) {
            console.log("single click");
            this.lastClickTime = null;
            this.props.onTrustClick && this.props.onTrustClick(event);
        }

        onTrustDoubleClick(event) {
            console.log("dbl click");
            this.props.onTrustDoubleClick && this.props.onTrustDoubleClick(event);
        }

        componentWillUnmount() {
            clearTimeout(this.lastTimeoutId);
        }

        handleClick(event) {
            
            event.stopPropagation();
            var now = Date.now();
            if (this.lastClickTime == null) {
                this.lastTimeoutId = setTimeout(this.onTrustClick.bind(this, event), this.TIME_BETWEEN_CLICKS + 1);
                this.lastClickTime = now;

            } else if ((now - this.lastClickTime) <= this.TIME_BETWEEN_CLICKS) {
                clearTimeout(this.lastTimeoutId);
                this.onTrustDoubleClick(event);
                this.lastClickTime = null;
            }
        }

        render() {            
            //filter props
            const { onTrustClick, onTrustDoubleClick, ...newProps} = this.props;
            return <WrappedComponent onDoubleClick={(e) => e.stopPropagation()} onClick={this.handleClickBinded} {...newProps} />;
        }
    };
};