import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="badge123 badge-sun">
      <h3>
        <a style={anchorStyle} href={repo.html_url}>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};
const anchorStyle = {
  color: "#444444",
};

export default RepoItem;
