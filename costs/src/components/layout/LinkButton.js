import Styles from './LinkButton.module.css'
import {Link} from 'react-router-dom'

function LinkButton({to, text}){
    return(
        <Link class={Styles.bnt} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton