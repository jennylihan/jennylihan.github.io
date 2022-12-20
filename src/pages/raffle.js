import * as React from "react"
import { navigate } from "gatsby"

export default function Component() {
    React.useEffect(() => {
        navigate('https://luckydraw.wolfie.dev')
    }, [])
    return "Loading.."
}