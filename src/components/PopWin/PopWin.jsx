import React, { Component } from 'react';

function PopWin(WrapperComponent, title, cancelBtn, saveBtn) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.newInfos = '';
            this.state = {
                saveBtnClick: false
            }
        }

        save = () => {
            this.setState({
                saveBtnClick: true
            },
                () => this.props.closeModal(0)
            );

        }

        render() {
            console.log(1, this.props)
            let cancelBtnHtml =
                cancelBtn
                    ? <button
                        type="button"
                        className="btn btn-default"
                        onClick={() => this.props.closeModal(0)}
                    >
                        取消
                    </button>
                    : '';
            let saveBtnHtml = saveBtn
                ? <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.save}>保存
                 </button>
                : '';
            return (
                <div className="modal show"
                    ref={dom => this.myModal = dom}
                    id="myModal" tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="close"
                                    onClick={() => this.props.closeModal(0)}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4
                                    className="modal-title"
                                    id="myModalLabel">
                                    {title}
                                </h4>
                            </div>
                            <div className="modal-body">
                                <WrapperComponent
                                    {...this.props}
                                    saveBtnClick={this.state.saveBtnClick}
                                />
                            </div>
                            <div className="modal-footer">
                                {cancelBtnHtml}
                                {saveBtnHtml}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}







export default PopWin;