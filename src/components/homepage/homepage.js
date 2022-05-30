import { useState } from 'react';
import Menu from '../menu/menu';
import Header from '../header/header';
import MyClaims from '../my-claims/my-claims';
import CreateNewClaim from '../create-new-claim/create-new-claim';

import './homepage.scss';

const Homepage = (props) => {
    const {toggleLogin} = props;

    const [newClaim, setNewClaim] = useState(false);
    const [searchWord, setSearchWord] = useState('');

    const toggleNewClaim = () => {
        setNewClaim(newClaim => !newClaim);
    }

    const dataFromTheServer = [
        {title: 'Figma smart web system for to build',
        data: '12/04/2001',
        type: 'Hardware',
        status: 'new',
        key: '1'
        },
        {title: 'test claim',
        data: '12/04/2019',
        type: 'Software',
        status: 'declined',
        key: '2'
        },
        {title: 'Funny task',
        data: '12/04/2022',
        type: 'Troubleshooting',
        status: 'in progress',
        key: '3'
        },
        {title: 'I need to create a new universe',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '4'
        },
        {title: 'pls create the app to hack Pentagon',
        data: '12/04/2001',
        type: 'Hardware',
        status: 'new',
        key: '5'
        },
        {title: 'test',
        data: '12/04/2019',
        type: 'Software',
        status: 'declined',
        key: '6'
        },
        {title: 'no test',
        data: '12/04/2022',
        type: 'Troubleshooting',
        status: 'in progress',
        key: '7'
        },
        {title: 'done',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '8'
        },
    ]


    return (
        <section className='homepage'>
            <Menu/>
            <Header setSearchWord={setSearchWord} isSearchInput={newClaim} toggleLogin={toggleLogin}/>
            {newClaim ? 
            <CreateNewClaim onToggle={toggleNewClaim}/> : 
            <MyClaims dataFromTheServer={dataFromTheServer} searchWord={searchWord} onToggle={toggleNewClaim}/>}
        </section>
    )
}

export default Homepage;