import React from 'react';
import Modal from 'react-modal'
import {confirmable} from 'react-confirm';

const Confirmation = (props: any) => {

    Modal.setAppElement('body');

    return (
        <div className="static-modal">
            <Modal isOpen={true} style={{
                overlay: {
                    width: '70vh',
                    height: '50vh',
                }
            }
            }>
                {props.confirmation}
                <button onClick={() => props.proceed()}>YES</button>
                <button onClick={() => props.cancel()}>CANCEL</button>
            </Modal>
        </div>
    )
};

export default confirmable(Confirmation);