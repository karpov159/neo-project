import { useState } from 'react';
import Menu from '../menu/menu';
import Header from '../header/header';
import MyClaims from '../my-claims/my-claims';
import CreateNewClaim from '../create-new-claim/create-new-claim';

import './homepage.scss';

const Homepage = (props) => {
    const {toggleLogin} = props;

    const [newClaim, setNewClaim] = useState(false);

    const toggleNewClaim = () => {
        setNewClaim(newClaim => !newClaim);
    }


    return (
        <section className='homepage'>
            <Menu/>
            <Header toggleLogin={toggleLogin}/>
            {newClaim ? <CreateNewClaim onToggle={toggleNewClaim}/> : <MyClaims onToggle={toggleNewClaim}/>}
        </section>
    )
}

export default Homepage;