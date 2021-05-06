const ENDPOINT = 'http://localhost:8080'
function baseRequest(options){
    const url = options.url ?? '/'

    return fetch(`${ENDPOINT}${url.startsWith('/')? url: `/${url}`}`, {
        method: options.method ?? 'get',
        headers: Object.assign({
            'Content-Type': 'application/json'
        }, options.headers ?? {}),
        body: options.method === 'get'? null : JSON.stringify(options.data)
    })
}

baseRequest({
    method: 'post',
    url: '/api/bodyjson'
})
