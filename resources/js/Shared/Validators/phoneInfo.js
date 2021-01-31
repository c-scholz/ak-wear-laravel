const regexp = /(?<prefix>(?<localPrefixMobile>0{1}1{1}[0-9]{2,3})|(?<localPrefixLandline>0{1}[2-9]{1}[0-9]{2,4})|(?<globalPrefixMobile>(?<countryPrefixMobile>\+[0-9]{2})1{1}[0-9]{3})|(?<globalPrefixLandline>(?<countryPrefixLandline>\+[0-9]{2})[2-9]{1}[0-9]{2,4}))[\/ -]*(?<number>[0-9]{5,})/gu

const getInfo = (inputItem) => {
    const matches = inputItem.matchAll(regexp)
    
    for (const match of matches) {
        return {
            full: match[0] || null,
            prefix: match.groups['prefix'] || null,
            number: match.groups['number'] || null,
            countryPrefix: (match.groups['countryPrefixMobile'] || match.groups['countryPrefixLandline']) || null
        }
    }
    return {
        full: null,
        prefix: null,
        number: null,
        countryPrefix: null,
    }
}

export const TYPE_PHONEINFO = 'phoneInfo'

export default getInfo