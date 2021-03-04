import React, { memo,useRef } from 'react';
import styles from './navbar.module.css'
import logo from "../../images/logo.png"
import search from "../../images/search.png"


const Navbar = memo(({onSearch,onLogoClick}) => {

    const formRef = useRef();
    const inputRef = useRef();

    const handleSearch = (e) =>{
        e.preventDefault();
        let name = inputRef.current.value;
        name.length>0&&onSearch(name)
        e.target.reset();
    }

    const handleLogoClick = ()=>{
        onLogoClick();
    }

    
    return (
        <header className={styles.header}>
            <div className={styles.logo_box}
                onClick={handleLogoClick}>
                <img src={logo} alt="youtube logo"/>
                <span className={styles.name}>Youtube</span>
            </div>
            <form
                className={styles.search_box}
                onSubmit={handleSearch}
                ref={formRef}
                >
                <input
                    className={styles.search}
                    type="text"
                    placeholder="검색"
                    ref={inputRef}/>
                <button className={styles.search_button}>
                    <img src={search} alt="검색"/>
                </button>
            </form>
        </header>
    );
})

export default Navbar;