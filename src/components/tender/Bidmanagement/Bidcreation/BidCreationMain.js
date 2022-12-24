import { Fragment } from "react";
import { usePageTitle } from "../../../hooks/usePageTitle";
import BidCreation from "./Bidcreate/BidCreation";
import CorrigendumPublish from "./CorrigendumPublish/CorrigendumPublish";
import PrebidQueries from "./PrebidQueries/PrebidQueries";
import TenderParticipation from "./TenderParticipation/TenderParticipation";

const BidCreationMain = () => {

    usePageTitle("Bid Creation");
    
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