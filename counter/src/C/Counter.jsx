
import PropTypes from "prop-types"

function Counter({r , p , m , n , c}) {
    Counter.propTypes ={
        inc: PropTypes.func,
        dec: PropTypes.func,
        reset: PropTypes.func,
        count: PropTypes.string
    }
  return (
    <div>
        <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-outline-danger" onClick={m}>-</button>
            <p className="m-2"> {n} </p>
            <button className="btn btn-outline-success" onClick={p}>+</button>
        </div>
    </div>
  )
}

export default Counter