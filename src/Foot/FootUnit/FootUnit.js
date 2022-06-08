import './FootUnit.css';

const FootUnit = ({smallHead, links})=>{
    return(
        <div className="colItems">
            <h2 className="smallHead">{smallHead}</h2>
            <ul className="footext">
                {
                links.map((user, i)=>{
                    return(
                        <li>
                            <a>
                            {links[i]}
                            </a>
                        </li>  
                    )
                }
                )}
            </ul>
        </div>
    );
}
export default FootUnit;