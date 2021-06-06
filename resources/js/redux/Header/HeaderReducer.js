import Label from '../../../images/header/logo.webp'
import Store from '../../../images/header/store.svg'
import Info from '../../../images/header/info.svg'
import Prize from '../../../images/header/price.svg'
import Heart from '../../../images/header/heart.svg'
import User from '../../../images/header/user.svg'
import Basket from '../../../images/header/basket.svg'
import Loupe from  '../../../images/header/loupe.svg'


const initialState = {
    search: Loupe,
    label: Label,
    menu: [
        {name: 'Shop', image: Store},
        {name: 'Info', image: Info},
        {name: 'Prize', image: Prize},
        {name: 'Heart', image: Heart},
        {name: 'User', image: User},
        {name: 'Basket', image: Basket},
    ]

}

const HeaderReducer = (store = initialState, action) => {
    switch (action.type) {
        default:
            return store;
    }
}

export default HeaderReducer
