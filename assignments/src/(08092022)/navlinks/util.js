export const showConsoleLog = (message) => {
    console.log('Console Message', message);
}

export const apiCall = async (url) => {
    let data;
    await fetch(url).then((res)=> res.json()).then((result) => {
        data=result;
    })
    return data;
}