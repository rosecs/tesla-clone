import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <div>
                <img src="/images/logo.svg" alt="logo" />
            </div>
            <div>
                <ul>
                    <li><a>Model S</a></li>
                    <li><a>Model 3</a></li>
                    <li><a>Model X</a></li>
                    <li><a>Model Y</a></li>
                    <li><a>Solar Roof</a></li>
                    <li><a>Solar Panels</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a>Shop</a></li>
                    <li><a>Account</a></li>
                    <li><a>Menu</a></li>
                </ul>
            </div>
        </Container>
    );
}

const Container = styled.div`

`

export default Header;