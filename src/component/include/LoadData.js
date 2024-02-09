import {ClipLoader} from "react-spinners";
import Button from "../elements/Button";
import { CSSProperties} from "react";

const override:CSSProperties = {
    display: "block",
    margin: "0 auto",

};
const LoadData = () => {

    return (
        <div className="mt-5 mb-2">
            <ClipLoader
                        color="#36d7b7"
                        size={200}
                        cssOverride={override}
            />
        </div>

    )

}
export default LoadData;
