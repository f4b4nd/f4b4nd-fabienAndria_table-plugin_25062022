import Slicer from "../ components/Slicer"

const SlicerContainer = ({setRowsPerPage}: ISlicerContainer) => {

    return (
        <Slicer>

            <Slicer.Label>

                Show

                <Slicer.Select defaultValue={NaN} setRowsPerPage={setRowsPerPage} >

                    <Slicer.SelectOption value={10}>10</Slicer.SelectOption>

                    <Slicer.SelectOption value={25}>25</Slicer.SelectOption>

                    <Slicer.SelectOption value={50}>50</Slicer.SelectOption>

                    <Slicer.SelectOption value={100}>100</Slicer.SelectOption>

                    <Slicer.SelectOption value={NaN}>All</Slicer.SelectOption>

                </Slicer.Select>

                entries

            </Slicer.Label>

        </Slicer>
    )
}

 export default SlicerContainer