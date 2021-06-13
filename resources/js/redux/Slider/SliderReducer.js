import Picture from '../../../images/slider/pic1.png'

const initialState = {
    sliders: [
        {
            id: 1,
            image: Picture
        },
        {
            id: 2,
            image: Picture
        },
        {
            id: 3,
            image: Picture
        }
    ]
}

const SliderReducer = (store = initialState, action) => {
    switch (action.type) {

        default:
            return store
    }
}

export default SliderReducer
