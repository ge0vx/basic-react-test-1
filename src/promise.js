const itemsApi = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve([
                {groupId: 1, name: 'Mario'},
                {groupId: 2, name: 'Lucia'},
                {groupId: 1, name: 'Luis'},
                {groupId: 1, name: 'Carmen'},
                {groupId: 3, name: 'Boris'},
                {groupId: 2, name: 'Oscar'},
            ])
        }, 500);
    })
}

export default itemsApi;