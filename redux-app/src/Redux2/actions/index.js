export const updateProfile = (user)=>({
    type:'updateProfile',
    updateProfile: true,
    user:[user]
})
export const addProfile = (users)=>({
    type:'addProfile',
    addProfile: true,
    users
})