/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Menu from '../menu/menu';
import Header from '../header/header';
import MyClaims from '../my-claims/my-claims';
import useProjectService from '../../services/ProjectService';
import CreateNewClaim from '../create-new-claim/create-new-claim';
import BrowsedClaim from '../browsed-claim/browsed-claim';

import './homepage.scss';

const Homepage = ({toggleLogin}) => {

    const [isSearchInput, setSearchInput] = useState(true),
          [searchWord, setSearchWord] = useState(''),
          [claims, setClaims] = useState([]),
          {error, loading, getAllClaims} = useProjectService();

    // получаем данные обращений
    useEffect(() => {
        getAllClaims().then(results => setClaims(results))
    }, [isSearchInput])

    return (
            <section className='homepage'>
                <Menu/>
                <Header setSearchWord={setSearchWord} isSearchInput={isSearchInput} toggleLogin={toggleLogin}/>
                <Routes>
                    <Route 
                    path='' 
                    element={
                    <MyClaims 
                    claims={claims} 
                    searchWord={searchWord} 
                    loading={loading}
                    error={error}
                    />}/>
                    <Route path="create-new-claim" element={<CreateNewClaim setSearchInput={setSearchInput}/> }/>        
                    <Route path={":claimId"} element={
                    <BrowsedClaim 
                    setSearchInput={setSearchInput}
                    claims={claims}/>}/>
                </Routes>
            </section>
    )
}

export default Homepage;