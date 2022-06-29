import Slicer from "../ components/Slicer"

const SlicerContainer = ({setMaxTableRows}: ISlicerContainer) => {

    return (
        <Slicer>

            <Slicer.Label>

                Show

                <Slicer.Select defaultValue={"all"} setMaxTableRows={setMaxTableRows} >

                    <Slicer.SelectOption value="10">10</Slicer.SelectOption>

                    <Slicer.SelectOption value="25">25</Slicer.SelectOption>

                    <Slicer.SelectOption value="50">50</Slicer.SelectOption>

                    <Slicer.SelectOption value="100">100</Slicer.SelectOption>

                    <Slicer.SelectOption value="all">All</Slicer.SelectOption>

                </Slicer.Select>

                entries

            </Slicer.Label>

        </Slicer>
    )
}

 export default SlicerContainer