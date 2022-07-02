/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { setOpenedHamburger } from '../menu/MenuSlice';
import { useDispatch } from 'react-redux';
import Menu from '../menu/Menu';
import Header from '../header/Header';
import MyClaims from '../my-claims/My-claims';
import CreateNewClaim from '../create-new-claim/Create-new-claim';
import BrowsedClaim from '../browsed-claim/Browsed-claim';

import './homepage.scss';

const Homepage = () => {

    const [isSearchInput, setSearchInput] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleCLick = (e) => {
            const target = e.target;

            if (target.classList.contains('overlay')) {
                dispatch(setOpenedHamburger());
                document.body.style.overflow = "";
            }   
        }

        document.addEventListener('click', handleCLick);
        return () => {
            document.removeEventListener('click', handleCLick);
        }
    }, []);

    return (
            <section className='homepage'>
                <Menu/>
                <Header isSearchInput={isSearchInput} />
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