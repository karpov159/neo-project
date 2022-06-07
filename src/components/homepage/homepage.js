import { useState, useEffect } from 'react';
import Menu from '../menu/menu';
import Header from '../header/header';
import MyClaims from '../my-claims/my-claims';
import useProjectService from '../../services/ProjectService';
import { Route, Routes } from 'react-router-dom';
import CreateNewClaim from '../create-new-claim/create-new-claim';
import BrowsedClaim from '../browsed-claim/browsed-claim';

import './homepage.scss';

const Homepage = (props) => {
    const {toggleLogin} = props;

    const [isSearchInput, setSearchInput] = useState(true);
    const [searchWord, setSearchWord] = useState('');
    const [claims, setClaims] = useState([]);

    const {error, loading, getAllClaims} = useProjectService();

    useEffect(() => {

        getAllClaims().then(setClaims)
    }, [])


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