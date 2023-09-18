import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

import styles from './styles.module.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const CustomModal = props => {
    const { children, title, open, onClose } = props;

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <div style={style} className={styles.modalContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>{title}</div>
                    <CancelIcon className={styles.closeIcon} onClick={onClose}/>
                </div>
                <div className={styles.childrenContainer}>
                    {children}
                </div>
            </div>
        </Modal>
    );
};

CustomModal.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
};

CustomModal.defaultProps = {
    open: false,
};

export default CustomModal;
