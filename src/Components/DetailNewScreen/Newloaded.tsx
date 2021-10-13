import React from 'react';
import IsNotSuccesful from './isNotSuccesful';
import IsSuccesful from './IsSuccessful';
import { Loadedtype } from '../../constants/constants';
function NewLoaded({responsenew}:{responsenew:any}):JSX.Element{
    console.log(responsenew);
return(
<>
{responsenew == Loadedtype ?
<IsNotSuccesful />
:
<IsSuccesful novedad={responsenew}/>
}
</>
)
}
export default NewLoaded;