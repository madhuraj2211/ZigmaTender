import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { usePageTitle } from "../../hooks/usePageTitle";
import StateMasterList from "./StateMasterList";
const StateMasterView = () => {
  usePageTitle("State Master List");
  useDocumentTitle("State Master");
  return (
    <>
      {/* Page Heading */}
      <div className="container-fluid p-0">
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="float-right">
                  <Link
                    to="statecreation"
                    className="btn btn-primary btn-icon-split rounded-pill"
                  >
                    <span className="icon text-white-50">
                      <i className="fas fa-plus-circle" />
                    </span>
                    <span className="text">New</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                <StateMasterList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StateMasterView;
