import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {HiOutlineShoppingBag} from "react-icons/hi2";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function HeaderBasket() {

    const basket = useSelector(s => s.basket)
    const navigate = useNavigate()
    return (
        <IconButton aria-label="cart" onClick={() => navigate('/card')}>
            <StyledBadge badgeContent={basket.data.reduce((acc,rec) => acc + rec.count, 0)} color="secondary">
                <HiOutlineShoppingBag color='rgb(255, 255, 255)' font-size='23px'/>
            </StyledBadge>
        </IconButton>
    );
}