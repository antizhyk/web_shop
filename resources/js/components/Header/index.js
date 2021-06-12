import React from "react";
import {
    HeaderForm,
    HeaderGoToHome,
    HeaderItem,
    HeaderLink,
    HeaderLoup,
    HeaderRow,
    HeaderSearch,
    HeaderWrapper
} from "./styles";
import {useSelector} from "react-redux";
import {InputAdornment} from "@material-ui/core";
import Search from "../CustomDrawer/items/Search";

const Header = React.memo(() => {
    const data = useSelector(({Header}) => Header)
//TODO Когда сделаю страницы расставить ссылки на линки
    return (
        <HeaderRow>
            <HeaderGoToHome to="/">
                <img src={data.label}/>
            </HeaderGoToHome>
            <HeaderWrapper>

                <HeaderItem>
                    {data.menu.map((el, i) => (
                        i < 3 && (
                            <HeaderLink key={el.name} to="/"><span>{el.name}</span> | <img src={el.image}/> </HeaderLink>
                        )
                    ))}
                </HeaderItem>
                <Search/>
                <HeaderItem>
                    {data.menu.map((el, i) => (
                        i > 2 && (
                            <HeaderLink key={i + 1} to="/"><span>{el.name}</span> | <img src={el.image}/> </HeaderLink>
                        )
                    ))}
                </HeaderItem>
            </HeaderWrapper>
        </HeaderRow>
    )
})

export default Header
