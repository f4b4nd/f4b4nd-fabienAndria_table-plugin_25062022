const sliceTable = ({data, initialData, rowsPerPage}: IsliceTable): Ttable => {

    const rowsPerPageInt = parseInt(rowsPerPage) || null

    let slicedData: Ttable

    if (!rowsPerPageInt) {
        slicedData = initialData
    }

    else if (rowsPerPageInt >= data.length) {
        slicedData = initialData.slice(0, rowsPerPageInt) 
    }

    else {
        slicedData = data.slice(0, rowsPerPageInt)
    }
    
    return slicedData

}

export default sliceTable