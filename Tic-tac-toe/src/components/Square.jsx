

function Square({value , onSquareclick }) {


    return <>
        <button className="square"  onClick={onSquareclick} >{value}</button>
    </>
}

export default Square;