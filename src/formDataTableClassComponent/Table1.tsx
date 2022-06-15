import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from './WithRouter'

interface MyState{
    userData:any
}

class Table1 extends Component<any> {
    state: MyState
    constructor(props:any){
        super(props)
        this.state = {
            userData:{

            }
        }
    }


    handalEdit=(cv:any)=>{
        console.log("edit",cv.first_name)
        this.setState({
            userData:{
                cv
            }
        })

    }

    handalDelete=()=>{
        console.log("delete")
    }

    handalSubmit=(e:any)=>{
        console.log("submit")
        e.preventDefault();
    }

    handalChange=()=>{
        console.log("change")
    }

    render() {
        console.log(this.props.user)
        const  user  = this.props.user
        console.log("dsgf",this.state.userData.cv)
        return (
            <>
                {/* Edit Button modal */}
                <div className="modal fade " id="examplemodal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div >
                            <div className="modal-body">
                                <form onSubmit={(e)=>this.handalSubmit(e)}>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                        <input type="texy" name="first_name" value={user.first_name} onChange={this.handalChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword2" className="form-label">Last Name</label>
                                        <input type="text" name="last_name" value={user.last_name} onChange={this.handalChange} className="form-control" id="exampleInputPassword2" />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword3" className="form-label">Age</label>
                                        <input type="number" name="age" value={user.age} onChange={this.handalChange} className="form-control" id="exampleInputPassword3" />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword4" className="form-label">Email</label>
                                        <input type="email" name="email" value={user.email} onChange={this.handalChange} className="form-control" id="exampleInputPassword4" />
                                    </div>
                                
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* table */}
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((cv: any, index: number) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{cv.first_name}</td>
                                        <td>{cv.last_name}</td>
                                        <td>{cv.age}</td>
                                        <td>{cv.email}</td>
                                        <td>

                                            <button className='btn btn-info btn-sm me-1' onClick={(e)=>{this.handalEdit(cv)}}  data-bs-toggle="modal" data-bs-target="#examplemodal2" >Edit</button>
                                            <button className='btn btn-danger btn-sm' onClick={this.handalDelete}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary" onClick={()=> this.props.navigate("/form1")}>Add More Data</button>
            </>

        )
    }
}
const mapStateToProps = (state: any) => {
    console.log(state.user)
    return { user: state.user }
}

export default connect(mapStateToProps, null)(withRouter(Table1))