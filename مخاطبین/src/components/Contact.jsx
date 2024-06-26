import React from 'react'

function Contact() {
    return (
        <>
            <div className="col-6" dir='rtl' style={{marginLeft: "40%", marginTop: "7%"}}>
                    <div className="card">
                        <div className="card-body">
                            <div className="row d-flex align-items-center justify-content-center">
                                <div className="col-3">
                                    <img src="https://via.placeholder.com/150" alt="" />
                                </div>
                                <div className="col-7">
                                    <ul className="list-group">
                                        <li className="list-group-item disabled">نام: <span className="fw-bold">امیرحسین بافضل</span></li>
                                        <li className="list-group-item disabled">شماره تماس: <span className="fw-bold">015637532876</span></li>
                                        <li className="list-group-item disabled">ایمیل: <span className="fw-bold">amir@gmail.com</span></li>
                                    </ul>
                                </div>
                                <div className="col-1">
                                    <button className="btn btn-warning my-1"> <i className="fa fa-eye"></i> </button>
                                    <button className="btn btn-info my-1"> <i className="fa fa-edit"></i> </button>
                                    <button className="btn btn-danger text-dark my-1"> <i className="fa fa-trash"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Contact