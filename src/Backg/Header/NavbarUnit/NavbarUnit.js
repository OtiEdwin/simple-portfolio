import './NavbarUnit.css';

const NavbarUnit = ({spanB, links})=>{
    return(
        <>
            {
                links.map((user, i)=>{
                    return(
                        <li>
                            <a>
                                <span className="material-icons font">
                                    {spanB[i]}
                                </span>
                                
                                {links[i]}
                            </a>

                        </li>  
                        )
                }
                )
            }
        </>
    );
}
export default NavbarUnit;


