import Slicer from "../ components/Slicer"

const SlicerContainer: React.FC = () => {

    return (
        <Slicer>

            <Slicer.Text>

                Show

                <Slicer.Select>

                    <Slicer.SelectOption value="10">10</Slicer.SelectOption>
                    
                    <Slicer.SelectOption value="25">25</Slicer.SelectOption>

                    <Slicer.SelectOption value="50">50</Slicer.SelectOption>

                    <Slicer.SelectOption value="100">100</Slicer.SelectOption>

                    <Slicer.SelectOption value="all">All</Slicer.SelectOption>

                </Slicer.Select>

                entries

            </Slicer.Text>

        </Slicer>
    )
}

 export default SlicerContainer