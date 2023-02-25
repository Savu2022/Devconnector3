import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import DashboardAction from "./DashboardAction";
import { getCurrentProfile } from "../../redux/actions/profileAction";
export const Dashboard = ({
  getCurrentProfile,
  profileReducer: { profile },
  auth: { user },
}) => {
  return (
    <div>
      <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome {user && user.name}
        </p>
        <DashboardAction></DashboardAction>
      </section>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profileReducer: PropTypes.object.isRequired,
};


const mapDispatchToProps = { getCurrentProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
