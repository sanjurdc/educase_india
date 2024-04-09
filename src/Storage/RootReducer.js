const initialState={
    user:{},
}

export default function RootReducer(state=initialState,actions){
    switch(actions.type)
    {
       case 'ADD_USER':
        console.log(actions)
        state.user=actions.payload
        return {user:state.user}

        default:
        return state
}}