import React from "react";
import { Link } from "react-router-dom";

import Card from "../componets/Card";
import DeleteBadgeModal from "../componets/DeleteBadgeModal";

import Logo from "../images/logoYest.png";
import "./styles/BadgeDetails.css";

// ESTE RECIBE LAS PROPS
function BadgeDetails(props) {
  const badge = props.badge;

  return (
    <>
      <div className="hero__details">
        <div className="hero__details-image">
          <img className="hero__details-image-logo" src={Logo} alt="logoyest" />
        </div>
        <div className="hero__details-nombres">
          <h1 className="hero__details-nombres-h1">
            {badge.firstName} {badge.lastName}
          </h1>
        </div>
      </div>
      <div className="container__details">
        <div className="container__details-badge">
          <Card
            firstName={badge.firstName}
            lastName={badge.lastName}
            email={badge.email}
            twitter={badge.twitter}
            jobTitle={badge.jobTitle}
          />
        </div>
        <div className="container__details-bottoms">
          <h2 className="container__details-h2">Actions</h2>
          <div>
            <Link
              className="container__details-bottoms-edit"
              to={`/badges/${badge.id}/edit`}
            >
              Edit
            </Link>
          </div>
          <div>
            {/* LE PASA LOS PROPS PARA ABRIR EL MODAL */}
            <button
              onClick={props.onOpenModal}
              className="container__details-bottoms-delete"
            >
              Delete
            </button>
            <DeleteBadgeModal
              isOpen={props.modalIsOpen}
              onClose={props.onCloseModal}
              onDeleteBadge={props.onDeleteBadge}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BadgeDetails;
