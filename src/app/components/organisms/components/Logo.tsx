import { Box, Stack, styled, Typography } from "@mui/material"
import { FurnitureLogo } from "assets"
import { useNavigate } from "react-router-dom"


export const Logo = () => {
    const navigate = useNavigate();
    return (
        <LogoWrapper onClick={() => navigate('/')}>
                <FurnitureLogo/>
                <TextStyled>Furniro</TextStyled>
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Stack)(() => ({
    // width: '185px',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
    cursor: 'pointer'
}))

const TextStyled = styled(Typography)(() => ({
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 'clamp(18px, 34vw, 34px)',
    fontWeight: 700,
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: '100%',
    letterSpacing: '0px'
}))