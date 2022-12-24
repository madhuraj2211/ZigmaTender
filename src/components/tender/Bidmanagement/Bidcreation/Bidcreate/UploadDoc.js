import { Fragment, useRef, useState } from "react"
import useInputValidation from "../../../../hooks/useInputValidation";
import { isNotEmpty } from "../../../CommonFunctions/CommonFunctions";
import ReadyToUpload from "./ReadyToupload";
import './UploadDoc.css'

const UploadDoc = () => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);
    const [dragover, setdragover] = useState(false);

    const onDragEnter = () => {
        wrapperRef.current.classList.add('dragover')
        setdragover(true)
    };

    const onDragLeave = () => {
        wrapperRef.current.classList.remove('dragover')
        setdragover(false)
    };

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
        }
    }

    console.log(fileList)    
    const {
        value: docnameValue,
        isValid: docnameIsValid,
        hasError: docnameHasError,
        valueChangeHandler: docnameChangeHandler,
        inputBlurHandler: docnameBlurHandler,
        setInputValue: setdocnameValue,
        reset: resetdocname,
      } = useInputValidation(isNotEmpty);

    const submitHandler =(e) =>{
        e.preventDefault()
    }  

    return (
        <Fragment>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
           <h1 className="h4 mb-0 text-primary">Upload document</h1>
        </div>
        <form onSubmit={submitHandler}>
        <div className="row align-items-baseline">
          <div className="inputgroup col-lg-6 mb-4 ">
            <div className="row align-items-center font-weight-bold">
              <div className="col-lg-4 text-dark">
                <label htmlFor="docname" className="pr-3">
                 Document Name :
                </label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  id="docname"
                  placeholder=""
                  name="docname"
                  value={docnameValue}
                  onChange={docnameChangeHandler}
                  onBlur={docnameBlurHandler}
                  disabled={false}
                />
                {docnameHasError && (
                  <div className="pt-1">
                    <span className="text-danger font-weight-normal">
                        Document Name. is required
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="row">
            <div className="col-lg-4 text-dark font-weight-bold mt-4">
                <label htmlFor="docname" className="pr-3 mt-3 ">
                    (Ready to Upload) 
                </label>
              </div>
                <div  className="col-lg-8 text-dark mt-1">
                 <ReadyToUpload docList = {fileList} />
                </div>
            </div>
          </div>
          <div className="inputgroup col-lg-6 mb-4">
            <div className="row ">
              <div className="col-lg-4 text-dark font-weight-bold">
                <label htmlFor="customername">Document Upload :</label>
              </div>
              <div className="col-lg-8">
                    <div className="dashed border-primary height_of_dropbox boderradius__dropbox d-flex flex-column align-items-center justify-content-center  drop-file-input bg-gray-200"
                     ref={wrapperRef}
                     onDragEnter={onDragEnter}
                     onDragLeave={onDragLeave}
                     onDrop={onDrop}
                    >
                    <p className="display-4 mb-0"><i className='fas fa-cloud-upload-alt text-primary '></i></p>
                    {!dragover && <p className="mt-0">Drag & Drop an document or Click</p>}
                    {dragover && <p className="mt-0">Drop the document</p>}
                    <input type="file" value="" className="h-100 w-100 position-absolute top-50 start-50 pointer " onChange={onFileDrop}/>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </form>    
        </Fragment>
    )
}

export default UploadDoc