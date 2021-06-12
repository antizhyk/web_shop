import React from 'react'
import CustomDrawer from "../CustomDrawer";
import {DisplayMob} from "./styles";


const MobileVersion = React.memo(() => {

    return(
        <DisplayMob>
            <CustomDrawer children={'hihihi'}/>

        </DisplayMob>
    )
})

export default MobileVersion
