const regexp = /([\p{L} \.'’"-]+[\d]*) +([\d]+)[ -]*([a-z]*)|([\d]+)[ -]*([a-z]) *,{1} *([\p{L} \.'’"-]+)/gu

const getInfo = (inputItem) => {
    const matches = inputItem.matchAll(regexp)
    
    for (const match of matches) {
        return { 
            streetName: (match[1] || match[4]) || null,
            houseNo: (match[2] || match[5]) || null,
            houseNoAffix: (match[3] || match[6]) || null
        }
    }
}

export default getInfo 