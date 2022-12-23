import { useEffect, useState } from "react";
import useInputValidation from "../../../../hooks/useInputValidation";
import CollapseCard from "../../../../UI/CollapseCard";
import { isNotEmpty , isNotNull} from "../../../CommonFunctions/CommonFunctions";
import Select from "react-select";
import axios from "axios";
import { useBaseUrl } from "../../../../hooks/useBaseUrl";
import '../../Bidmanagement.css'

const initialOptions = {
    options: [],
    isLoading: false,
  };

const BidCreation = () => {
  const [loading, setLoading] = useState(false);
  const [StateOptions, setStateOptions] = useState(initialOptions);
  const [ulbOptions, setulbOptions] = useState(initialOptions);
  const { server1: baseUrl } = useBaseUrl();
  const [TenderDescriptionlen,setTenderDescriptionlen] = useState(255)
  const [unitValue, setunitValue] = useState("Cu.M");
  const [tenderevalutionsysytemValue, settenderevalutionsysytemValue] = useState("QCBS");

  const {
    value: bidnoValue,
    isValid: bidnoIsValid,
    hasError: bidnoHasError,
    valueChangeHandler: bidnoChangeHandler,
    inputBlurHandler: bidnoBlurHandler,
    setInputValue: setbidnoValue,
    reset: resetbidno,
  } = useInputValidation(isNotEmpty);

  const {
    value: customernameValue,
    isValid: customernameIsValid,
    hasError: customernameHasError,
    valueChangeHandler: customernameChangeHandler,
    inputBlurHandler: customernameBlurHandler,
    setInputValue: setcustomernameValue,
    reset: resetcustomername,
  } = useInputValidation(isNotEmpty);

  const {
    value: bidcallValue,
    isValid: bidcallIsValid,
    hasError: bidcallHasError,
    valueChangeHandler: bidcallChangeHandler,
    inputBlurHandler: bidcallBlurHandler,
    setInputValue: setbidcallValue,
    reset: resetbidcall,
  } = useInputValidation(isNotEmpty);

  const {
    value: tenderidValue,
    isValid: tenderidIsValid,
    hasError: tenderidHasError,
    valueChangeHandler: tenderidChangeHandler,
    inputBlurHandler: tenderidBlurHandler,
    setInputValue: settenderidValue,
    reset: resettenderid,
  } = useInputValidation(isNotEmpty);

  const {
    value: tenderinvtauthValue,
    isValid: tenderinvtauthIsValid,
    hasError: tenderinvtauthHasError,
    valueChangeHandler: tenderinvtauthChangeHandler,
    inputBlurHandler: tenderinvtauthBlurHandler,
    setInputValue: settenderinvtauthValue,
    reset: resettenderinvtauth,
  } = useInputValidation(isNotEmpty);

  const {
    value: tenderrefValue,
    isValid: tenderrefIsValid,
    hasError: tenderrefHasError,
    valueChangeHandler: tenderrefChangeHandler,
    inputBlurHandler: tenderrefBlurHandler,
    setInputValue: settenderrefValue,
    reset: resettenderref,
  } = useInputValidation(isNotEmpty);

  const {
    value: stateValue,
    isValid: stateIsValid,
    hasError: stateHasError,
    valueChangeHandlerForReactSelect: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    setInputValue: setState,
    reset: resetstate,
  } = useInputValidation(isNotNull);

  const {
    value: ulbValue,
    isValid: ulbIsValid,
    hasError: ulbHasError,
    valueChangeHandlerForReactSelect: ulbChangeHandler,
    inputBlurHandler: ulbBlurHandler,
    setInputValue: setulb,
    reset: resetulb,
  } = useInputValidation(isNotNull);

  const {
    value: TenderDescriptionValue,
    isValid: TenderDescriptionIsValid,
    hasError: TenderDescriptionHasError,
    valueChangeHandler: TenderDescriptionChangeHandler,
    inputBlurHandler: TenderDescriptionBlurHandler,
    setInputValue: setTenderDescriptionValue,
    reset: resetTenderDescription,
  } = useInputValidation(isNotEmpty);

   const {
    value: NITdateValue,
    isValid: NITdateIsValid,
    hasError: NITdateHasError,
    valueChangeHandler: NITdateChangeHandler,
    inputBlurHandler: NITdateBlurHandler,
    setInputValue: setNITdateValue,
    reset: resetNITdate,
  } = useInputValidation(isNotEmpty);

  const {
    value: submissiondateValue,
    isValid: submissiondateIsValid,
    hasError: submissiondateHasError,
    valueChangeHandler: submissiondateChangeHandler,
    inputBlurHandler: submissiondateBlurHandler,
    setInputValue: setsubmissiondateValue,
    reset: resetsubmissiondate,
  } = useInputValidation(isNotEmpty);

  const {
    value: qualityValue,
    isValid: qualityIsValid,
    hasError: qualityHasError,
    valueChangeHandler: qualityChangeHandler,
    inputBlurHandler: qualityBlurHandler,
    setInputValue: setqualityValue,
    reset: resetquality,
  } = useInputValidation(isNotEmpty);

  const {
    value: projectperioddate1Value,
    isValid: projectperioddate1IsValid,
    hasError: projectperioddate1HasError,
    valueChangeHandler: projectperioddate1ChangeHandler,
    inputBlurHandler: projectperioddate1BlurHandler,
    setInputValue: setprojectperioddate1Value,
    reset: resetprojectperioddate1,
  } = useInputValidation(isNotEmpty);

  const {
    value: projectperioddate2Value,
    isValid: projectperioddate2IsValid,
    hasError: projectperioddate2HasError,
    valueChangeHandler: projectperioddate2ChangeHandler,
    inputBlurHandler: projectperioddate2BlurHandler,
    setInputValue: setprojectperioddate2Value,
    reset: resetprojectperioddate2,
  } = useInputValidation(isNotEmpty);

  const  getStateData =  async (savedState) => {
    let response = await axios.get(`${baseUrl}/api/state-list/${savedState}`)  
    return { options: response.data.stateList, isLoading: false }
  };

  const getStateListOptions = async (savedState = null) => {
    setStateOptions((c) => {
      return { ...c, isLoading: true };
    });
    let StateList = await getStateData(savedState);
    setStateOptions(StateList);
  };

  const  getulbData =  async (savedulb) => {
    let response = await axios.get(`${baseUrl}/api/ulb-list/${savedulb}`)  
    return { options: response.data.ulbList, isLoading: false }
  };

  const getulbListOptions = async (savedulb = null) => {
    setulbOptions((c) => {
      return { ...c, isLoading: true };
    });
    let ulbList = await getulbData(savedulb);
    setulbOptions(ulbList);
  };

  useEffect(() => {
    getStateListOptions()
    getulbListOptions()
  },[])

  const validateInputLength = (e) => {
    let maxLength =255;
    setTenderDescriptionlen(maxLength-e.target.value.length);  
  }
  
  const unithandler = (e) => {
    setunitValue(e.target.value)
  }

  const tenderevalutionsysytemhandler = (e) => {
    settenderevalutionsysytemValue(e.target.value)
  }

  const submitHandler = () => {};

  return (
    <CollapseCard id={"bidcreation"} title={"Bid Creation"}>
      <div className="formContent ">
        {loading && (
          <div className="loading">
            <img
              id="loading-image"
              src="/assets/img/282.gif"
              alt="Loading..."
            />
          </div>
        )}
      </div>
      <form onSubmit={submitHandler}>
        <div className="row align-items-center ">
          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center font-weight-bold">
              <div className="col-lg-4 text-dark">
                <label htmlFor="bidno" className="pr-3">
                  Bid No :
                </label>
                {/* {isCustNoFetching && 
                <><span className="spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true"></span>
                <span className="sr-only">Loading...</span></>} */}
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  id="bidno"
                  placeholder=""
                  name="bidno"
                  value={bidnoValue}
                  onChange={bidnoChangeHandler}
                  onBlur={bidnoBlurHandler}
                  disabled={false}
                />
                {bidnoHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                      Bid no. is required
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center">
              <div className="col-lg-4 text-dark font-weight-bold">
                <label htmlFor="customername">Customer Name :</label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  id="customername"
                  placeholder="Enter Customer Name"
                  name="customername"
                  value={customernameValue}
                  onChange={customernameChangeHandler}
                  onBlur={customernameBlurHandler}
                />
                {customernameHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                      Customer Category is required
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center">
              <div className="col-lg-4 text-dark font-weight-bold">
                <label htmlFor="bidcall">Bid Call :</label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  id="bidcall"
                  placeholder="Enter Bid Call"
                  name="bidcall"
                  value={bidcallValue}
                  onChange={bidcallChangeHandler}
                  onBlur={bidcallBlurHandler}
                />
                {bidcallHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                      Bid Call is required
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center">
              <div className="col-lg-4 text-dark font-weight-bold">
                <label htmlFor="tenderid">Tender ID :</label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  id="tenderid"
                  placeholder="Enter Tender ID"
                  name="tenderid"
                  value={tenderidValue}
                  onChange={tenderidChangeHandler}
                  onBlur={tenderidBlurHandler}
                />
                {tenderidHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                      Tender ID is required
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center">
              <div className="col-lg-4 text-dark font-weight-bold">
                <label htmlFor="tenderinvtauth">Tender Inviting Authority :</label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  id="tenderinvtauth"
                  placeholder="Enter Tender Inviting Authority"
                  name="tenderinvtauth"
                  value={tenderinvtauthValue}
                  onChange={tenderinvtauthChangeHandler}
                  onBlur={tenderinvtauthBlurHandler}
                />
                {tenderinvtauthHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                      Tender Inviting Authority is required
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center">
              <div className="col-lg-4 text-dark font-weight-bold">
                <label htmlFor="tenderref">Tender Ref # :</label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  id="tenderref"
                  placeholder="Enter Tender Ref #"
                  name="tenderref"
                  value={tenderrefValue}
                  onChange={tenderrefChangeHandler}
                  onBlur={tenderrefBlurHandler}
                />
                {tenderrefHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                      Tender Ref # is required
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center">
              <div className="col-lg-4 text-dark font-weight-bold">
                <label htmlFor="state">State :</label>
              </div>
              <div className="col-lg-8">
                <Select
                  name="state"
                  id="state"
                  isSearchable="true"
                  isClearable="true"
                  options={StateOptions.options}
                  onChange={(selectedOptions) =>{ stateChangeHandler(selectedOptions); 
                    // getcustno(selectedOptions);
                   }}
                  onBlur={stateBlurHandler}
                  value={stateValue}
                  isLoading={StateOptions.isLoading}
                ></Select>
                {stateHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                      State is required
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center">
              <div className="col-lg-4 text-dark font-weight-bold">
                <label htmlFor="ulb">ULB :</label>
              </div>
              <div className="col-lg-8">
                <Select
                  name="ulb"
                  id="ulb"
                  isSearchable="true"
                  isClearable="true"
                  options={ulbOptions.options}
                  onChange={(selectedOptions) =>{ ulbChangeHandler(selectedOptions); 
                    // getcustno(selectedOptions);
                   }}
                  onBlur={ulbBlurHandler}
                  value={ulbValue}
                  isLoading={ulbOptions.isLoading}
                ></Select>
                {ulbHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                      ULB is required
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="inputgroup col-lg-6 mb-4">
            <div className="row font-weight-bold">
              <div className="col-lg-4 text-dark">
                <label htmlFor="TenderDescription">Tender Description : </label>
                <p className="text-info font-weight-bold"><small><b>({TenderDescriptionlen} Characters Remaining) </b></small></p> 
              </div>
              <div className="col-lg-8">
                <textarea
                  className="form-control"
                  id="TenderDescription"
                  placeholder="Enter Tender Description"
                  name="TenderDescription"
                  rows="3"
                  onChange={TenderDescriptionChangeHandler}
                  onBlur={TenderDescriptionBlurHandler}
                  value={TenderDescriptionValue}
                  onKeyUp={validateInputLength}
                  maxLength="255"
                ></textarea>
                {TenderDescriptionHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                        Tender Description is required.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center font-weight-bold  mb-4">
              <div className="col-lg-4 text-dark">
                <label htmlFor="NITdate">NIT Date :</label>
              </div>
              <div className="col-lg-8">
                <input
                  type="date"
                  className="form-control"
                  id="NITdate"
                  placeholder="Enter NIT Date "
                  name="NITdate"
                  value={NITdateValue}
                  onChange={NITdateChangeHandler}
                  onBlur={NITdateBlurHandler}
                />
                {NITdateHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                      NIT is invalid
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center font-weight-bold">
              <div className="col-lg-4 text-dark">
                <label htmlFor="submissiondate">Submission Date :</label>
              </div>
              <div className="col-lg-8">
                <input
                  type="date"
                  className="form-control"
                  id="submissiondate"
                  placeholder="Enter submission date"
                  name="submissiondate"
                  value={submissiondateValue}
                  onChange={submissiondateChangeHandler}
                  onBlur={submissiondateBlurHandler}
                />
                {submissiondateHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                        Submission Date is Invalid.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div> 
          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center font-weight-bold">
              <div className="col-lg-4 text-dark">
                <label htmlFor="quality">Quality of Legacy Waste :</label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  id="quality"
                  placeholder="Enter Quality of Legacy Waste"
                  name="quality"
                  value={qualityValue}
                  onChange={qualityChangeHandler}
                  onBlur={qualityBlurHandler}
                />
                {qualityHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                        Quality of Legacy Waste is Invalid.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center">
              <div className="col-lg-4 text-dark font-weight-bold">
                <label htmlFor="unit">Customer Category:</label>
              </div>
              <div className="col-lg-8">
                <div className="form-check form-check-inline mr-5">
                  <label
                    className="form-check-label"
                    htmlFor="unit_cu_m"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="unit"
                      id="unit_cu_m"
                      checked={"Cu.M" === unitValue}
                      value="Cu.M"
                      onChange={(e) =>{ unithandler(e); 
                          // getcustno(stateValue)
                        } }
                    />
                    Cu.M
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label
                    className="form-check-label"
                    htmlFor="unit_mt"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="unit"
                      id="unit_mt"
                      checked={"MT" === unitValue}
                      value="MT"
                      onChange={(e) =>{ unithandler(e);  
                        //  getcustno(stateValue)
                        } }
                    />
                    MT
                  </label>
                </div>
            
              </div>
            </div>
          </div>                
          <div className="inputgroup col-lg-6 mb-4">
            <div className="row align-items-center">
              <div className="col-lg-4 text-dark font-weight-bold">
                <label htmlFor="tenderevalutionsysytem">Tender Evalution System :</label>
              </div>
              <div className="col-lg-8">
                <div className="form-check form-check-inline mr-5">
                  <label
                    className="form-check-label"
                    htmlFor="qcbs"
                  >
                    <input
                      className="form-check-input radiobuttonColour"
                      type="radio"
                      name="tenderevalutionsysytem"
                      id="qcbs"
                      checked={"QCBS" === tenderevalutionsysytemValue}
                      value="QCBS"
                      onChange={(e) =>{ tenderevalutionsysytemhandler(e);  } }
                    />
                    QCBS
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label
                    className="form-check-label"
                    htmlFor="lcs"
                  >
                    <input
                      className="form-check-input radiobuttonColour"
                      type="radio"
                      name="tenderevalutionsysytem"
                      id="lcs"
                      checked={"LCS" === tenderevalutionsysytemValue}
                      value="LCS"
                      onChange={(e) =>{ tenderevalutionsysytemhandler(e);  
                        //  getcustno(stateValue)
                        } }
                    />
                    LCS
                  </label>
                </div>
            
              </div>
            </div>
          </div> 
          <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="projectperiod">
                   Project Period :
                  </label>
                </div>
                <div className="col-lg-8 ">
                  <div className="col-lg-12 d-flex justify-content-between p-0">
                  <input
                    type="date"
                    className="form-control col-md-6"
                    id="projectperioddate1"
                    placeholder="Enter Date"
                    name="projectperioddate1"
                    value={projectperioddate1Value}
                    onChange={projectperioddate1ChangeHandler}
                    onBlur={projectperioddate1BlurHandler}
                  />
                  &nbsp;
                   <input
                    type="date"
                    className="form-control col-md-6"
                    id="projectperioddate2"
                    placeholder="Enter Date"
                    name="projectperioddate2"
                    value={projectperioddate2Value}
                    onChange={projectperioddate2ChangeHandler}
                    onBlur={projectperioddate2BlurHandler}
                  />
                  </div>
                 
                  {(projectperioddate1HasError || projectperioddate2HasError)  && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        projectperiod is required.
                      </span>
                    </div>
                  )}
                </div>
              </div>
          </div> 
          {/* <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="estprojectvalue">Est. Project Value in Rs. :</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="estprojectvalue"
                    placeholder="Enter Est. Project Value"
                    name="estprojectvalue"
                    value={estprojectvalueValue}
                    onChange={estprojectvalueChangeHandler}
                    onBlur={estprojectvalueBlurHandler}
                    onKeyDown={ isNumber}
                    maxLength={10}
                    />
                  {estprojectvalueHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        Est Project value is invalid.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>      */}
        </div>
      </form>
    </CollapseCard>
  );
};

export default BidCreation;
