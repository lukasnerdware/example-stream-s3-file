module.exports.stream2Promise = async (stream) => {
    return new Promise((resolve, reject) => {
        let data = ''
        stream.on('data', (chunk) => {
            data += chunk
        });

        stream.on('end', () => {
            const json = JSON.parse(data)
            resolve(json);
        })
    })
}