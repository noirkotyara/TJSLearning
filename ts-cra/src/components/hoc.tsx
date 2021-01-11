import { compose } from "redux"
//this file show how to typized HOC - high order component and compose)

function HOChiphop<WP extends {hiphop: number}>(WrappedComponent: React.ComponentType<WP>){
    return (props: Omit<WP, 'hiphop'> ) => {
        return <div><WrappedComponent {...props as WP} hiphop={10} /></div> 
    }
}
function HOCdance<WP extends {dance: number}>(WrappedComponent: React.ComponentType<WP>){
    return (props: Omit<WP, 'dance'> ) => {
        return <div><WrappedComponent {...props as WP} dance={20} /></div> 
    }
}

type PropsTypeC1 = {
    title: string
    name: string
    hiphop: number
    dance: number
}



const Func1: React.FC<PropsTypeC1> = (props) => {
    return (
        <div>{props.title}</div>
    )
}

export const Func = compose<React.ComponentType<Omit<PropsTypeC1, 'dance' | 'hiphop'>>>(
    HOCdance,
    HOChiphop
)(Func1)



