import { Fragment } from "react";
import BidCreation from "./Bidcreate/BidCreation";
import CorrigendumPublish from "./CorrigendumPublish/CorrigendumPublish";
import PrebidQueries from "./PrebidQueries/PrebidQueries";
import TenderParticipation from "./TenderParticipation/TenderParticipation";

const BidCreationMain = () => {

    return(
        <Fragment>
            <BidCreation/>
            <CorrigendumPublish/>
            <PrebidQueries/>
            <TenderParticipation/>
        </Fragment>
    )
}

export default BidCreationMain;