import React, { Component } from 'react';

function PopWin(WrapperComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                a: 1
            };
        }


        closeModal = () => {
            console.log(this.myModal)
            this.myModal.classList.remove('show');
        }

        render() {
            return (
                <div className="modal show" ref={ dom => this.myModal = dom} id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">{this.props.title}</h4>
                            </div>
                            <div className="modal-body">
                                <WrapperComponent {...this.props}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" onClick={this.closeModal}>取消</button>
                                <button type="button" className="btn btn-primary" onClick={this.save}>保存</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}







export default PopWin;