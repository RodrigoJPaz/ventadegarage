import React from 'react'
import '../App.css'


const Cart = () => {
    return (
    <div className='BloqueCart'>
        <form>
            <div className="mb-3">
                <label className="form-label emailText">Dirección de correo electronico </label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text emailText2">No se compartira tu información.</div>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input " id="exampleCheck1" />
                <label className="form-check-label texto">Check box!</label>
            </div>
            <button type="submit" className="btn btn-warning">A comprar!</button>
</form>
    </div>
)
}

export default Cart