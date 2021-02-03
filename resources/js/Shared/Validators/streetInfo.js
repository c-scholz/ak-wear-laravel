const regexp = /(?<fwStreetName>[\p{L} \.'’"-]+[\d]*),? +(?<fwHouseNoFull>(?<fwHouseNo>[\d]+)[ -]*(?<fwHouseNoAffix>[a-z]*))|(?<bwHouseNoFull>(?<bwHouseNo>[\d]+)[ -]*(?<bwHouseNoAffix>[a-z]* *)),{1} *(?<bwStreetName>[\p{L} \.'’"-]+[\d]*)/gu

const getInfo = (inputItem) => {
    const matches = inputItem.matchAll(regexp)
    
    for (const match of matches) {
        return {
            full: match[0],
            streetName: (match.groups['fwStreetName'] || match.groups['bwStreetName']) || null,
            houseNoFull: (match.groups['fwHouseNoFull'] || match.groups['bwHouseNoFull']) || null,
            houseNo: (match.groups['fwHouseNo'] || match.groups['bwHouseNo']) || null,
            houseNoAffix: (match.groups['fwHouseNoAffix'] || match.groups['bwHouseNoAffix']) || null
        }
    }
    return {
        full: null,
        streetName: null,
        houseNoFull: null,
        houseNo: null,
        houseNoAffix: null
    }
}

export const TYPE_STREETINFO = 'streetInfo'

export default getInfo