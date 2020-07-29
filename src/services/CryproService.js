import CryptoJS from 'crypto-js'

export const hashString = (value) => {
    return new Promise((resolve, reject) => {
        try {
            const hash = CryptoJS.MD5(value)

            resolve(hash.toString(CryptoJS.enc.Base64))
        } catch (e) {
            console.log('error hashing string', e)
            reject(e)
        }
    })
}

