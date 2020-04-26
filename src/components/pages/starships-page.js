import React from "react";
import { StarshipList, StarshipDetails } from "../sw-components";
import { withRouter } from "react-router-dom";
import Row from "../row";

const StarshipsPage = ({ match, history }) => {
  const { id } = match.params;

  return (
    <Row
      left={<StarshipList onItemSelected={(id) => history.push(id)} />}
      right={<StarshipDetails itemId={id} />}
    />
  );
};

export default withRouter(StarshipsPage);
