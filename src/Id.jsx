import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import {Layout} from "./Layout";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    mydiv: {
        backgroundColor: "pink",
    }
})

export function Id() {
    const params = useParams();
    const classes = useStyles();
    return (
        <Layout>
            <div className={"grid place-content-center bg-gray-300 h-full " + classes.mydiv}>
                <span>page {params.id}</span>
                <Link to="/">home</Link>
            </div>
        </Layout>
    )
}
