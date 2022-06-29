const sliceTable = ({data, initialData, maxTableRows}: IsliceTable): Ttable => {

    const maxRows = parseInt(maxTableRows) || null

    let slicedData: Ttable

    if (!maxRows) {
        slicedData = initialData
    }

    else if (maxRows >= data.length) {
        slicedData = initialData.slice(0, maxRows) 
    }

    else {
        slicedData = data.slice(0, maxRows)
    }
    
    return slicedData

}

export default sliceTable