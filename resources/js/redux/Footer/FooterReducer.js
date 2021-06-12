import Instagram from '../../../images/footer/social/instagram.svg'
import Facebook from '../../../images/footer/social/facebook.svg'
import Youtube from '../../../images/footer/social/youtube.svg'
import Pinterest from '../../../images/footer/social/pinterest-circular-logo-symbol.svg'
import Twitter from '../../../images/footer/social/twitter.svg'
import PayPal from '../../../images/footer/paymants/paypal.svg'
import MasterCard from '../../../images/footer/paymants/mc_symbol.svg'
import Visa from '../../../images/footer/paymants/visa.svg'
import AmericanExpress from '../../../images/footer/paymants/american-express.svg'


const initialState = {
    mainList: {
        paymentSystems: [
            {
                title: 'PayPal',
                link: '/'
            },
            {
                title: 'MasterCard',
                link: '/'
            },
            {
                title: 'Visa',
                link: '/'
            },
            {
                title: 'American Express',
                link: '/'
            },
        ],
        customerService: [
            {
                title: 'Help',
                link: '/'
            },
            {
                title: 'Payments',
                link: '/'
            },
            {
                title: 'FAQ',
                link: '/'
            },
            {
                title: 'How to purchase',
                link: '/'
            },
            {
                title: 'Returns',
                link: '/'
            },
            {
                title: 'Your order',
                link: '/'
            }
        ],
        info: [
            {
                title: 'About us',
                link: '/'
            },
            {
                title: 'Shop police',
                link: '/'
            },
            {
                title: 'Contact',
                link: '/'
            },
        ],
        followUs: [
            {
                title: 'Help',
                link: '/'
            },
            {
                title: 'Payments',
                link: '/'
            },
            {
                title: 'FAQ',
                link: '/'
            },
            {
                title: 'How to purchase',
                link: '/'
            },
            {
                title: 'Returns',
                link: '/'
            },
            {
                title: 'Your order',
                link: '/'
            }
        ]
    },
    rightList: {
        social: [
            {
                link: '/',
                image: Instagram,
                id: 1,
            },
            {
                link: '/',
                image: Facebook,
                id: 2,
            },
            {
                link: '/',
                image: Youtube,
                id: 3,
            },
            {
                link: '/',
                image: Pinterest,
                id: 4,
            },
            {
                link: '/',
                image: Twitter,
                id: 5,
            },
        ],
        pay: [
            {
                link: '/',
                image: PayPal,
                id: 1,
            },
            {
                link: '/',
                image: MasterCard,
                id: 2,
            },
            {
                link: '/',
                image: Visa,
                id: 3,
            },
            {
                link: '/',
                image: AmericanExpress,
                id: 4,
            },
        ]
    }
}

const FooterReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default FooterReducer
