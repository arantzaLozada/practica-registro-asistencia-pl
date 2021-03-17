import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
import "./styles/style.css";

// EMPAQUETANDO

function useSearchBadges(Badges) {
  // HACIENDO CUSTOM HOOKS
  const [query, setQuery] = React.useState("");

  const [filteredBadges, setFilteredBadges] = React.useState(Badges);

  // PARA FILTRAR EL INPUT BUSCANDO NOMBRES se cambio por useMemo
  React.useMemo(() => {
    const result = Badges.filter((badge) => {
      return `${badge.firstName} ${badge.lasstName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [Badges, query]);

  return { query, setQuery, filteredBadges };
}

// PASAMOS ESTE COMPONENTE DE CLASES A FUNCIONAL PARA USAR HOOKS Y CUSTOMHOOKS

function Badgelist(props) {
  const Badges = props.Badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(Badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label className="form-group__label">Filter Badges</label>
          <input
            className="form-group__input"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>no hay datos aun</h3>
        <Link to="/badges/new" className="badges__button">
          Create New Badges
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="form-group">
        <label className="form-group__label">Filter Badges</label>
        <input
          className="form-group__input"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="BadgesListItem__ul">
        {filteredBadges.map((badge) => {
          return (
            <li className="BadgesListItem" key={badge.id}>
              {/* PARA MANDAR A LA PAGINA EDIT CON SU PROPIO ID DE CADA PERSONA */}
              <Link className="link" to={`/badges/${badge.id}`}>
                <div className="item">
                  <div>
                    <Gravatar
                      className="BadgesListItem__avatar"
                      email={badge.email}
                    />
                  </div>
                  <div className="BadgesListItem__list">
                    <strong className="BadgesListItem__name">
                      {badge.firstName} {badge.lastName}
                    </strong>
                    <span className="Twitter__name">@{badge.twitter}</span>
                    <span>{badge.jobTitle}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Badgelist;
