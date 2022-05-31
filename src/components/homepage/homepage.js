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
        {title: '8',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '8'
        },
        {title: '9',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '9'
        },
        {title: '10',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '10'
        },
        {title: '11',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '11'
        },
        {title: '12',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '12'
        },
        {title: '13',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '13'
        },
        {title: '14',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '14'
        },
        {title: '15',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '15'
        },
        {title: '16',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '16'
        },
        {title: '17',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '17'
        },
        {title: '18',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '18'
        },
        {title: '19',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '19'
        },
        {title: '20',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '20'
        },
        {title: '21',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '21'
        },
        {title: '22',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '22'
        },
        {title: '23',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '23'
        },
        {title: '24',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '24'
        },
        {title: '25',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '25'
        },
        {title: 'Figma smart web system for to build',
        data: '12/04/2001',
        type: 'Hardware',
        status: 'new',
        key: '26'
        },
        {title: 'test claim',
        data: '12/04/2019',
        type: 'Software',
        status: 'declined',
        key: '27'
        },
        {title: 'Funny task',
        data: '12/04/2022',
        type: 'Troubleshooting',
        status: 'in progress',
        key: '28'
        },
        {title: 'I need to create a new universe',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '29'
        },
        {title: 'pls create the app to hack Pentagon',
        data: '12/04/2001',
        type: 'Hardware',
        status: 'new',
        key: '30'
        },
        {title: 'test',
        data: '12/04/2019',
        type: 'Software',
        status: 'declined',
        key: '31'
        },
        {title: 'no test',
        data: '12/04/2022',
        type: 'Troubleshooting',
        status: 'in progress',
        key: '32'
        },
        {title: '8',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '33'
        },
        {title: '9',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '34'
        },
        {title: '10',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '35'
        },
        {title: '11',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '36'
        },
        {title: '12',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '37'
        },
        {title: '13',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '38'
        },
        {title: '14',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '39'
        },
        {title: '15',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '40'
        },
        {title: '16',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '41'
        },
        {title: '17',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '42'
        },
        {title: '18',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '43'
        },
        {title: '19',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '44'
        },
        {title: '20',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '45'
        },
        {title: '21',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '46'
        },
        {title: '22',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '47'
        },
        {title: '23',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '48'
        },
        {title: '24',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '49'
        },
        {title: '25',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '50'
        },
        {title: 'Figma smart web system for to build',
        data: '12/04/2001',
        type: 'Hardware',
        status: 'new',
        key: '51'
        },
        {title: 'test claim',
        data: '12/04/2019',
        type: 'Software',
        status: 'declined',
        key: '52'
        },
        {title: 'Funny task',
        data: '12/04/2022',
        type: 'Troubleshooting',
        status: 'in progress',
        key: '53'
        },
        {title: 'I need to create a new universe',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '54'
        },
        {title: 'pls create the app to hack Pentagon',
        data: '12/04/2001',
        type: 'Hardware',
        status: 'new',
        key: '55'
        },
        {title: 'test',
        data: '12/04/2019',
        type: 'Software',
        status: 'declined',
        key: '56'
        },
        {title: 'no test',
        data: '12/04/2022',
        type: 'Troubleshooting',
        status: 'in progress',
        key: '57'
        },
        {title: '8',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '58'
        },
        {title: '9',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '59'
        },
        {title: '10',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '60'
        },
        {title: '11',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '61'
        },
        {title: '12',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '62'
        },
        {title: '13',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '63'
        },
        {title: '14',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '64'
        },
        {title: '15',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '65'
        },
        {title: '16',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '66'
        },
        {title: '17',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '67'
        },
        {title: '18',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '68'
        },
        {title: '19',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '69'
        },
        {title: '20',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '70'
        },
        {title: '21',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '71'
        },
        {title: '22',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '72'
        },
        {title: '23',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '73'
        },
        {title: '24',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '74'
        },
        {title: '25',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '75'
        },
        {title: '16',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '76'
        },
        {title: '17',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '77'
        },
        {title: '18',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '78'
        },
        {title: '19',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '79'
        },
        {title: '20',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '80'
        },
        {title: '21',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '81'
        },
        {title: '22',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '82'
        },
        {title: '23',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '83'
        },
        {title: '24',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '84'
        },
        {title: '25',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '85'
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