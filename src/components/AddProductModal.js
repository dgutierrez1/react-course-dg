// @flow
import React, { Component } from 'react';
import { Modal, Typography, withStyles, Input, MenuItem, Select } from '@material-ui/core';
import { addProduct, showAddProductModal } from '../redux/ActionCreators';
import { connect } from 'react-redux'

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});

const AddProductModal = ({ classes, shouldOpenModal, showModal }) => {

    const closeModal = () => showModal(false);

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={shouldOpenModal}
            onClose={closeModal}
        >
            <div style={getModalStyle()} className={classes.paper}>
                <Typography variant="h3" id="modal-title">
                    ADD A PRODUCT
                </Typography>
                <Typography variant="subtitle1" id="simple-modal-description">
                    Please fill the data requested on this dialog to add a product to our table,
                    including Product Name, Price and Category
                </Typography>
                <Input placeholder="Product Name" fullWidth={true} />
                <Input placeholder="Price" fullWidth={true} />
                <Select

                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>

            </div>
        </Modal>
    )


}
const mapStateToProps = ({ products }) => ({
    shouldOpenModal: products.showAddProductModal
})
const mapDispatchToProps = { showModal: showAddProductModal }
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddProductModal));
