import { useEffect, useState } from "react"

import "./Loader.css"

const Loader = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() =>{

        setTimeout(() =>{
            setLoading(false)
        }, 5000)

    },[])

    if(loading){

        return(
            <div>
                Loader...
            </div>
        )

    }else{

        return(
            <div>
                Loaded!!
            </div>
        )
        
    }

}


export default Loader