import React from 'react'
import CustomDrawer from "../CustomDrawer";
import {DisplayMob} from "./styles";


const MobileVersion = React.memo(({children}) => {

    return(
        <DisplayMob>
            <CustomDrawer children={children}/>
        </DisplayMob>
    )
})

export default MobileVersion
