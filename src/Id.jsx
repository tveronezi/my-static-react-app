import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import {Layout} from "./Layout";

export function Id() {
    let params = useParams();
    return (
        <Layout>
            <div className="grid place-content-center bg-gray-300 h-full">
                <span>page {params.id}</span>
                <Link to="/">home</Link>
            </div>
        </Layout>
    )
}
