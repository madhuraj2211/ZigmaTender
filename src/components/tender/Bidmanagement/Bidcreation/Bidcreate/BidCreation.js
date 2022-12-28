import { useEffect, useRef, useState } from "react";
import useInputValidation from "../../../../hooks/useInputValidation";
import CollapseCard from "../../../../UI/CollapseCard";
import {
  isNotEmpty,
  isNotNull,
} from "../../../CommonFunctions/CommonFunctions";
import Select from "react-select";
import axios from "axios";
import { useBaseUrl } from "../../../../hooks/useBaseUrl";
import "../../Bidmanagement.css";
import UploadDoc from "./UploadDoc";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const initialOptions = {
  options: [],
  isLoading: false,
};

const BidCreation = () => {
  const [loading, setLoading] = useState(false);
  const [isdatasending, setdatasending] = useState(false);
  const [StateOptions, setStateOptions] = useState(initialOptions);
  const [ulbOptions, setulbOptions] = useState(initialOptions);
  const { server1: baseUrl } = useBaseUrl();
  const [TenderDescriptionlen, setTenderDescriptionlen] = useState(255);
  const [unitValue, setunitValue] = useState("Cu.M");
  const [EMDValue, setEMDValue] = useState("nonexempted");
  const [tenderevalutionsysytemValue, settenderevalutionsysytemValue] = useState("QCBS");
  const [formId, setFormId] = useState(0);
  const { id } = useParams();

  const myRef = useRef(null)    

  const navigate = useNavigate();
  const [toastSuccess, toastError, setBidManagementMainId, bidManageMainId ] = useOutletContext();

  console.log(id)
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
    value: prebiddateValue,
    isValid: prebiddateIsValid,
    hasError: prebiddateHasError,
    valueChangeHandler: prebiddateChangeHandler,
    inputBlurHandler: prebiddateBlurHandler,
    setInputValue: setprebiddateValue,
    reset: resetprebiddate,
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

  const {
    value: estprojectvalueValue,
    isValid: estprojectvalueIsValid,
    hasError: estprojectvalueHasError,
    valueChangeHandler: estprojectvalueChangeHandler,
    inputBlurHandler: estprojectvalueBlurHandler,
    setInputValue: setestprojectvalueValue,
    reset: resetestprojectvalue,
  } = useInputValidation(isNotEmpty);

  const {
    value: tenderfeevalueValue,
    isValid: tenderfeevalueIsValid,
    hasError: tenderfeevalueHasError,
    valueChangeHandler: tenderfeevalueChangeHandler,
    inputBlurHandler: tenderfeevalueBlurHandler,
    setInputValue: settenderfeevalueValue,
    reset: resettenderfeevalue,
  } = useInputValidation(isNotEmpty);

  const {
    value: priceperunitValue,
    isValid: priceperunitIsValid,
    hasError: priceperunitHasError,
    valueChangeHandler: priceperunitChangeHandler,
    inputBlurHandler: priceperunitBlurHandler,
    setInputValue: setpriceperunitValue,
    reset: resetpriceperunit,
  } = useInputValidation(isNotEmpty);

  const {
    value: emdmodeValue,
    isValid: emdmodeIsValid,
    hasError: emdmodeHasError,
    valueChangeHandler: emdmodeChangeHandler,
    inputBlurHandler: emdmodeBlurHandler,
    setInputValue: setemdmodeValue,
    reset: resetemdmode,
  } = useInputValidation(isNotEmpty);

  const {
    value: emdamtValue,
    isValid: emdamtIsValid,
    hasError: emdamtHasError,
    valueChangeHandler: emdamtChangeHandler,
    inputBlurHandler: emdamtBlurHandler,
    setInputValue: setemdamtValue,
    reset: resetemdamt,
  } = useInputValidation(isNotEmpty);

  const {
    value: dumpsiterValue,
    isValid: dumpsiterIsValid,
    hasError: dumpsiterHasError,
    valueChangeHandler: dumpsiterChangeHandler,
    inputBlurHandler: dumpsiterBlurHandler,
    setInputValue: setdumpsiterValue,
    reset: resetdumpsiter,
  } = useInputValidation(isNotEmpty);

  const {
    value: locationValue,
    isValid: locationIsValid,
    hasError: locationHasError,
    valueChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
    setInputValue: setlocationValue,
    reset: resetlocation,
  } = useInputValidation(isNotEmpty);

  const getStateData = async (savedState) => {
    let response = await axios.get(`${baseUrl}/api/state-list/${savedState}`);
    return { options: response.data.stateList, isLoading: false };
  };

  const getStateListOptions = async (savedState = null) => {
    setStateOptions((c) => {
      return { ...c, isLoading: true };
    });
    let StateList = await getStateData(savedState);
    setStateOptions(StateList);
  };

  const getulbData = async (savedulb) => {
    let response = await axios.get(`${baseUrl}/api/ulb-list/${savedulb}`);
    return { options: response.data.ulbList, isLoading: false };
  };

  const getulbListOptions = async (savedulb = null) => {
    setulbOptions((c) => {
      return { ...c, isLoading: true };
    });
    let ulbList = await getulbData(savedulb);
    setulbOptions(ulbList);
  };

  useEffect(() => {
    getStateListOptions();
    getulbListOptions();

  }, []);

  const validateInputLength = (e) => {
    let maxLength = 255;
    setTenderDescriptionlen(maxLength - e.target.value.length);
  };

  const unithandler = (e) => {
    setunitValue(e.target.value);
  };
  const EMDhandler = (e) => {
    setEMDValue(e.target.value);
  };
  const tenderevalutionsysytemhandler = (e) => {
    settenderevalutionsysytemValue(e.target.value);
  };


  const postData = (data) => {
    axios.post(`${baseUrl}/api/bidcreation/creation`, data).then((resp) => {
      if (resp.data.status === 200) {
        setBidManagementMainId(resp.data.id)
        toastSuccess(resp.data.message)
        // resetall()
        navigate("/tender/bidmanagement/list/main/bidcreationmain/"+resp.data.id);
        myRef.current.scrollIntoView({ behavior: 'smooth' })    
        // window.history.replaceState({},"Bid Creation", "/tender/bidmanagement/list/main/bidcreationmain/"+resp.data.id);
       

      } else if (resp.data.status === 400) {
        toastError(resp.data.message)
      }
      setdatasending(false)
    }).catch((err) => {
        // console.log(err.message)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
          setdatasending(false)
    });
  };

  let formIsValid = false;

  if (
    bidnoIsValid &&
    customernameIsValid &&
    bidcallIsValid &&
    tenderidIsValid &&
    tenderinvtauthIsValid &&
    tenderrefIsValid &&
    stateIsValid &&
    ulbIsValid &&
    TenderDescriptionIsValid &&
    NITdateIsValid &&
    prebiddateIsValid &&
    submissiondateIsValid &&
    qualityIsValid &&
    projectperioddate1IsValid &&
    projectperioddate2IsValid &&
    estprojectvalueIsValid &&
    tenderfeevalueIsValid &&
    priceperunitIsValid &&
    emdmodeIsValid &&
    emdamtIsValid &&
    dumpsiterIsValid &&
    locationIsValid
  ) {
    formIsValid = true;
  }
  const submitHandler = (e) => {
    e.preventDefault();

    setdatasending(true);

    if (!formIsValid) {
      setdatasending(false);
      return;
    }

    console.log("Submitted!");

    let bidcreationData = {
      bidno: bidnoValue,
      customername: customernameValue,
      bidcall: bidcallValue,
      tenderid: tenderidValue,
      tenderinvtauth: tenderinvtauthValue,
      tenderref: tenderrefValue,
      state: stateValue,
      ulb: ulbValue,
      TenderDescription: TenderDescriptionValue,
      NITdate: NITdateValue,
      submissiondate: submissiondateValue,
      quality: qualityValue,
      unit: unitValue,
      tenderevalutionsysytem: tenderevalutionsysytemValue,
      projectperioddate1: projectperioddate1Value,
      projectperioddate2: projectperioddate2Value,
      estprojectvalue: estprojectvalueValue,
      tenderfeevalue: tenderfeevalueValue,
      priceperunit: priceperunitValue,
      emdmode: emdmodeValue,
      emdamt: emdamtValue,
      dumpsiter: dumpsiterValue,
      prebiddate: prebiddateValue,
      EMD: EMDValue,
      location: locationValue,
    };

    let data = {
      bidcreationData: bidcreationData,
      tokenid: localStorage.getItem("token"),
      form_id: formId,
    };

  

    if(formId === 0){
        postData(data);
    }else if(formId > 0){
        // putData(data)
    }

    setdatasending(false);
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      Swal.fire({
        title: "Are you sure to Cancel?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Cancel it!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/tender/bidmanagement/list");
        }
      });
    } else {
      navigate("/tender/bidmanagement/list");
    }
  };

  


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
                  <label htmlFor="tenderinvtauth">
                    Tender Inviting Authority :
                  </label>
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
                    onChange={(selectedOptions) => {
                      stateChangeHandler(selectedOptions);
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
                    onChange={(selectedOptions) => {
                      ulbChangeHandler(selectedOptions);
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
                  <label htmlFor="TenderDescription">
                    Tender Description :{" "}
                  </label>
                  <p className="text-info font-weight-bold">
                    <small>
                      <b>({TenderDescriptionlen} Characters Remaining) </b>
                    </small>
                  </p>
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
                    <label className="form-check-label" htmlFor="unit_cu_m">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="unit"
                        id="unit_cu_m"
                        checked={"Cu.M" === unitValue}
                        value="Cu.M"
                        onChange={(e) => {
                          unithandler(e);
                          // getcustno(stateValue)
                        }}
                      />
                      Cu.M
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="unit_mt">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="unit"
                        id="unit_mt"
                        checked={"MT" === unitValue}
                        value="MT"
                        onChange={(e) => {
                          unithandler(e);
                          //  getcustno(stateValue)
                        }}
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
                  <label htmlFor="tenderevalutionsysytem">
                    Tender Evalution System :
                  </label>
                </div>
                <div className="col-lg-8">
                  <div className="form-check form-check-inline mr-5">
                    <label className="form-check-label" htmlFor="qcbs">
                      <input
                        className="form-check-input radiobuttonColour"
                        type="radio"
                        name="tenderevalutionsysytem"
                        id="qcbs"
                        checked={"QCBS" === tenderevalutionsysytemValue}
                        value="QCBS"
                        onChange={(e) => {
                          tenderevalutionsysytemhandler(e);
                        }}
                      />
                      QCBS
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="lcs">
                      <input
                        className="form-check-input radiobuttonColour"
                        type="radio"
                        name="tenderevalutionsysytem"
                        id="lcs"
                        checked={"LCS" === tenderevalutionsysytemValue}
                        value="LCS"
                        onChange={(e) => {
                          tenderevalutionsysytemhandler(e);
                          //  getcustno(stateValue)
                        }}
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
                  <label htmlFor="projectperiod">Project Period :</label>
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

                  {(projectperioddate1HasError ||
                    projectperioddate2HasError) && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        projectperiod is required.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="estprojectvalue">
                    Est. Project Value (Rs):
                  </label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="number"
                    className="form-control"
                    id="estprojectvalue"
                    placeholder="Enter Est. Project Value"
                    name="estprojectvalue"
                    value={estprojectvalueValue}
                    onChange={estprojectvalueChangeHandler}
                    onBlur={estprojectvalueBlurHandler}
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
            </div>
            <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="tenederfeevalue">Tender Fee (Rs):</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="number"
                    className="form-control"
                    id="tenderfeevalue"
                    placeholder="Enter Est. Project Value"
                    name="tenderfeevalue"
                    value={tenderfeevalueValue}
                    onChange={tenderfeevalueChangeHandler}
                    onBlur={tenderfeevalueBlurHandler}
                  />
                  {tenderfeevalueHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        Tender Fee is invalid.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="priceperunit">Price per unit (Rs):</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="number"
                    className="form-control"
                    id="priceperunit"
                    placeholder="Enter Est. Project Value"
                    name="priceperunit"
                    value={priceperunitValue}
                    onChange={priceperunitChangeHandler}
                    onBlur={priceperunitBlurHandler}
                  />
                  {priceperunitHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        Price per unit is invalid.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="emdmode">EMD Mode :</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="emdmode"
                    placeholder="Enter EMD Mode"
                    name="emdmode"
                    value={emdmodeValue}
                    onChange={emdmodeChangeHandler}
                    onBlur={emdmodeBlurHandler}
                  />
                  {emdmodeHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        EMD Mode is Invalid.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="emdamt">EMD (Rs):</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="number"
                    className="form-control"
                    id="emdamt"
                    placeholder="Enter Est. Project Value"
                    name="emdamt"
                    value={emdamtValue}
                    onChange={emdamtChangeHandler}
                    onBlur={emdamtBlurHandler}
                  />
                  {emdamtHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        EMD is invalid.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="dumpsiter">Dump Siter Name :</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="dumpsiter"
                    placeholder="Enter Dump Siter Name"
                    name="dumpsiter"
                    value={dumpsiterValue}
                    onChange={dumpsiterChangeHandler}
                    onBlur={dumpsiterBlurHandler}
                  />
                  {dumpsiterHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        Dump Siter name is required.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="prebiddate">Pre Bid Date :</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="date"
                    className="form-control"
                    id="prebiddate"
                    placeholder="Enter Pre Bid Date "
                    name="prebiddate"
                    value={prebiddateValue}
                    onChange={prebiddateChangeHandler}
                    onBlur={prebiddateBlurHandler}
                  />
                  {prebiddateHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        Prebid Date is required.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center">
                <div className="col-lg-4 text-dark font-weight-bold">
                  <label htmlFor="EMD">Customer Category:</label>
                </div>
                <div className="col-lg-8">
                  <div className="form-check form-check-inline mr-5">
                    <label
                      className="form-check-label"
                      htmlFor="EMD_nonexempted"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="EMD"
                        id="EMD_nonexempted"
                        checked={"nonexempted" === EMDValue}
                        value="nonexempted"
                        onChange={(e) => {
                          EMDhandler(e);
                          // getcustno(stateValue)
                        }}
                      />
                      Non - Exempted
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="EMD_exempted">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="EMD"
                        id="EMD_exempted"
                        checked={"exempted" === EMDValue}
                        value="exempted"
                        onChange={(e) => {
                          EMDhandler(e);
                          //  getcustno(stateValue)
                        }}
                      />
                      Exempted
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="inputgroup col-lg-6 mb-4">
              <div className="row align-items-center font-weight-bold">
                <div className="col-lg-4 text-dark">
                  <label htmlFor="bidno" className="pr-3">
                    Location :
                  </label>
                  {/* {isCustNoFetching && 
                <><span className="spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true"></span>
                <span className="sr-only">Loading...</span></>} */}
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder=""
                    name="location"
                    value={locationValue}
                    onChange={locationChangeHandler}
                    onBlur={locationBlurHandler}
                    disabled={false}
                  />
                  {locationHasError && (
                    <div className="pt-1">
                      <span className="text-danger font-weight-normal">
                        Location. is required
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              {!id && (
                <button
                  className={
                    !formIsValid
                      ? "btn btn-outline-primary float-right rounded-pill"
                      : "btn btn-primary float-right rounded-pill"
                  }
                  disabled={!formIsValid || isdatasending}
                >
                  {isdatasending && (
                    <span className="spinner-border spinner-border-sm mr-2"></span>
                  )}
                  {isdatasending && "Saving..."}
                  {!isdatasending && "Save & Continue"}
                </button>
              )}
              {id && (
                <button
                  className={
                    !formIsValid
                      ? "btn btn-outline-primary float-right rounded-pill"
                      : "btn btn-primary float-right rounded-pill"
                  }
                  disabled={!formIsValid || isdatasending}
                >
                  {isdatasending && (
                    <span className="spinner-border spinner-border-sm mr-2"></span>
                  )}
                  {isdatasending && "Updating..."}
                  {!isdatasending && "Edit & Continue"}
                </button>
              )}
              <button
                className="btn  btn-outline-dark mr-3 float-right rounded-pill"
                onClick={cancelHandler}
                disabled={isdatasending}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
        <div ref={myRef} >
        <UploadDoc />
      </div>
        </div>
    </CollapseCard>
  );
};

export default BidCreation;
