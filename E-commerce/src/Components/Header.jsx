import React from 'react';
import './Header.css';
function Header() {
    return (
        <>
            <div class="navbar">
                <div class="nav-logo  border">
                    <div class="logo">E-Commerce</div>
                </div>

                <div class="nav-address border">
                    <p class="add-one">Deliver to</p>
                    <div class="add-icon">
                        <i class="fa-solid fa-location-dot"></i>
                        <p class="add-two">India</p>
                    </div>
                </div>


                <div class="nav-search">
                    <select class="search-select">
                        <option>All</option>
                    </select>
                    <input placeholder="Search E-commerce" class="search-input"></input>
                    <div class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                </div>


                <div class="nav-lang border">
                    <div class="lang-icon"><i class="fa-solid fa-globe"></i></div>
                    <select class="lang-select">
                        <option>EN</option>
                    </select>
                </div>


                <div class="nav-signin border">
                    <p class="singin-text"> <span> Hello, sign in</span> </p>
                    <select class="singnin-select">
                        <option value="">Accounts & Lists</option>
                    </select>
                </div>


                <div class="nav-return border">
                    <p class="return-first">Returns</p>
                    <p class="return-second">& Orders</p>
                </div>


                <div class="nav-cart">
                    <div class="cart-icon">
                        <div class="c-icon">
                            <i class="fa-solid fa-cart-arrow-down"></i>
                        </div>
                    </div>
                    <div class="card-text">Cart

                    </div>
                </div>
            </div>



            <div class="main-nav">
                <div class="main-icon">
                    <div class="micon">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <p>All</p>
                </div>

                <div class="options">
                    <p>Today's Deals</p>
                    <p>Customer Service</p>

                </div>

            </div>
        </>

    );
}

export default Header;
