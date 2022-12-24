import { Fragment } from "react"

const ReadyToUpload = () =>{
    return (
        <Fragment>

        <div className="card border-left-info shadow py-2 w-100 my-4">
  <div className="card-body">
    <div className="row no-gutters align-items-center">
      <div className="col mr-2">
        <div className="font-weight-bold text-info text-uppercase mb-1"> Document Name
        </div>
        <div className="row no-gutters align-items-center">
          <div className="col-auto">
            <div className="h6 mb-0 mr-3 font-weight-bold text-gray-800">File name (Size)</div>
          </div>
        </div>
      </div>
      <div className="col-auto">
        <i className="fas fa-clipboard-list fa-2x " />
      </div>
    </div>
  </div>
        </div>
        </Fragment>

    )

}

export default ReadyToUpload 