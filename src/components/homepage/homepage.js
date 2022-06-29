/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Menu from '../menu/Menui';
import Header from '../header/Header';
import MyClaims from '../my-claims/My-claims';
import CreateNewClaim from '../create-new-claim/Create-new-claim';
import BrowsedClaim from '../browsed-claim/Browsed-claim';

import './homepage.scss';

const Homepage = ({toggleLogin}) => {

    const [isSearchInput, setSearchInput] = useState(true);

    return (
            <section className='homepage'>
                <Menu/>
                <Header isSearchInput={isSearchInput} toggleLogin={toggleLogin}/>
                <Routes>
                    <Route 
                    path='' 
                    element={<MyClaims/>}/>
                    <Route path="create-new-claim" element={<CreateNewClaim setSearchInput={setSearchInput}/> }/>        
                    <Route path={":claimId"} element={
                    <BrowsedClaim 
                    setSearchInput={setSearchInput}
                    />}/>
                </Routes>
            </section>
    )
}

export default Homepage;