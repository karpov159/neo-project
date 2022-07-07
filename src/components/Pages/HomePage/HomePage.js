/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { setOpenedHamburger } from '../../../store/MenuSlice';
import { useDispatch } from 'react-redux';
import Menu from '../../Menu/Menu';
import Header from '../../Header/Header';

import './HomePage.scss';

const HomePage = ({isSearchInput}) => {
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
                <Outlet/>
            </section>
    )
}

export default HomePage;