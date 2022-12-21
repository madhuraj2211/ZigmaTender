import { Fragment, useState } from "react"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { useBaseUrl } from "../../../hooks/useBaseUrl"
import useInputValidation from "../../../hooks/useInputValidation"

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const CustomerCreationBankDetails = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [isDatasending, setdatasending] = useState(false)
    const [toastSuccess, toastError, setCustomerCreationMainID] = useOutletContext();
    const { server1: baseUrl } = useBaseUrl();
    const [contactlist, setcontactlist] = useState(null)
    const [isEditbtn, setisEditbtn]= useState(false)
    const [contactid, setcontactid]= useState(null);

    const {
        value: banknameValue,
        isValid: banknameIsValid,
        hasError: banknameHasError,
        valueChangeHandler: banknameChangeHandler,
        inputBlurHandler: banknameBlurHandler,
        setInputValue: setbanknameValue,
        reset: resetbankname,
      } = useInputValidation(isNotEmpty);
    
      const {
        value: bankaddressValue,
        isValid: bankaddressIsValid,
        hasError: bankaddressHasError,
        valueChangeHandler: bankaddressChangeHandler,
        inputBlurHandler: bankaddressBlurHandler,
        setInputValue: setbankaddressValue,
        reset: resetbankaddress,
      } = useInputValidation(isNotEmpty);
    
      const {
        value: ifsccodeValue,
        isValid: ifsccodeIsValid,
        hasError: ifsccodeHasError,
        valueChangeHandler: ifsccodeChangeHandler,
        inputBlurHandler: ifsccodeBlurHandler,
        setInputValue: setifsccodeValue,
        reset: resetifsccode,
      } = useInputValidation(isNotEmpty);
    
      const {
        value: beneficiaryaccountnameValue,
        isValid: beneficiaryaccountnameIsValid,
        hasError: beneficiaryaccountnameHasError,
        valueChangeHandler: beneficiaryaccountnameChangeHandler,
        inputBlurHandler: beneficiaryaccountnameBlurHandler,
        setInputValue: setbeneficiaryaccountnameValue,
        reset: resetbeneficiaryaccountname,
      } = useInputValidation(isNotEmpty);

      const {
        value: accountnumberValue,
        isValid: accountnumberIsValid,
        hasError: accountnumberHasError,
        valueChangeHandler: accountnumberChangeHandler,
        inputBlurHandler: accountnumberBlurHandler,
        setInputValue: setaccountnumberValue,
        reset: resetaccountnumber,
      } = useInputValidation(isNotEmpty);

      let formIsValid = false;

      const submitHandler = (e) => {
        e.preventDefault();
      }

    return(
        <Fragment>
            <div className="formContent">
        {!id && <div className="loading">
          <img id="loading-image" src="/assets/img/lock.png" alt="Loading..." width ="150" height="150"/>
        </div>}
        <form onSubmit={submitHandler}>
          <div className="row align-items-center">
          <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="ifsccode">IFSC Code :</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="ifsccode"
                    placeholder="Enter IFSC Code"
                    name="ifsccode"
                    value={ifsccodeValue}
                    onChange={ifsccodeChangeHandler}
                    onBlur={ifsccodeBlurHandler}
                  />
                  {ifsccodeHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        IFSC code is required.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="bankname">
                   Bank Name:
                  </label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="bankname"
                    placeholder="Enter Bank Name "
                    name="bankname"
                    value={banknameValue}
                    onChange={banknameChangeHandler}
                    onBlur={banknameBlurHandler}
                  />
                  {banknameHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        Bank Name is required.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="inputgroup col-lg-6 mb-4">
              <div className="row font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="bankaddress">Bank address :</label>
                  <p className="text-info font-weight-bold"><small><b>({255} Characters Remaining) </b></small></p> 
                </div>
                <div className="col-lg-8">
                  <textarea
                    type="text"
                    className="form-control"
                    id="bankaddressname"
                    placeholder="Enter Bank Address"
                    name="bankaddressname"
                    value={bankaddressValue}
                    onChange={bankaddressChangeHandler}
                    onBlur={bankaddressBlurHandler}
                    rows="3"
                    maxLength="255"
                  ></textarea>
                  {bankaddressHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        Bank address is required.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold mb-4">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="beneficiaryaccountname">Beneficiary Account Name :</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="beneficiaryaccountname"
                    placeholder="Enter Beneficiary Account Name"
                    name="beneficiaryaccountname"
                    value={beneficiaryaccountnameValue}
                    onChange={beneficiaryaccountnameChangeHandler}
                    onBlur={beneficiaryaccountnameBlurHandler}
                 
                    />
                  {beneficiaryaccountnameHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        Beneficiary Account Name is required.
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="accountnumber">Account Number :</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="accountnumber"
                    placeholder="Enter Account Number"
                    name="accountnumber"
                    value={accountnumberValue}
                    onChange={accountnumberChangeHandler}
                    onBlur={accountnumberBlurHandler}
                    />
                  {accountnumberHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        Beneficiary Account Number is required.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="col-lg-12 d-flex justify-content-center">
              {!isEditbtn && 
              <button
                className={(!formIsValid) ?  "btn btn-outline-primary rounded-pill px-4" :  "btn btn-primary rounded-pill px-4"} 
                disabled={!formIsValid || isDatasending}
              >
                {isDatasending && <span className="spinner-border spinner-border-sm mr-2"></span> }
                {isDatasending && 'Saving...'}
                {!isDatasending && 'Add'}
              </button>}
              {isEditbtn && 
               <button
                className={(!formIsValid) ?  "btn btn-outline-primary rounded-pill px-4" :  "btn btn-primary rounded-pill px-4"} 
                disabled={!formIsValid || isDatasending}
              >
                {isDatasending && <span className="spinner-border spinner-border-sm mr-2"></span> }
                {isDatasending && 'Updating...'}
                {!isDatasending && 'Update'}
              </button>  }  
            </div>
          </div>
        </form>

        {/* <div className="col-lg-12 d-flex justify-content-center mt-4"> */}
          {/* <CustomerCreationContactSubtable bankData = {contactlist} onEdit={onEdit} onDelete={onDelete}/> */}
        {/* </div> */}
        <div className = "col-lg-12 mt-3 d-flex justify-content-end">
          {/* <button
              className="btn btn-outline-primary mr-3 rounded-pill"
              onClick = {() => navigate("/tender/master/customercreation/list/main/swmprojectstatus/"+id)}
            >
            Next
          </button> */}
          <button className="btn  btn-outline-dark rounded-pill"
            onClick = {() => navigate("/tender/master/customercreation/list")}
            
            >
              Cancel
          </button>
        </div>       
      </div>
        </Fragment>
    )
}

export default CustomerCreationBankDetails