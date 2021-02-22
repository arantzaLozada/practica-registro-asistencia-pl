import React from "react";

import Modal from "./Modal";

import "./styles/DeleteBadgeModal.css";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <strong className="danger">Are you sure?</strong>
        <span>You about to delete this badge</span>
        <div>
          <button
            onClick={props.onDeleteBadge}
            className="container__details-bottoms-deletes"
          >
            Delete
          </button>
          <button
            onClick={props.onClose}
            className="container__details-bottoms-cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
