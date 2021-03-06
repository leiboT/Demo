import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getDisplayName, isIOS } from '../../utlis';
import styles from './index.less';

export default WrappedComponent => class extends Component { // 全屏 父级有transform属性

    static displayName = `HOC${getDisplayName(WrappedComponent)}`;

    componentDidMount() {
        this.modal = document.createElement('div');
        document.body.appendChild(this.modal);
        this.renderModal()
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.modal)
        document.body.removeChild(this.modal)
    }

    renderModal = () => {
        ReactDOM.render(
            <div className={styles.wrapper}>
                {isIOS() ?
                    <div style={{ height: 'calc(100% + 1px)' }}><WrappedComponent {...this.props} /></div>
                    : <WrappedComponent {...this.props} />}
            </div>,
            this.modal
        )
    }
    render() {
        return null
    }
}