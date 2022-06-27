import { Component } from 'react'
import { connect } from 'react-redux'
import { getDataTable } from '../Redux/ActionCreator/ActionCreator'
import { withRouter } from './WithRouter'

interface IUser {
    first_name: string,
    last_name: string,
    age: string | number,
    email: string,
    password: string

}

interface MyState {
    userData: IUser | any,
    index: number | any
}

class Table1 extends Component<any> {
    state: MyState
    constructor(props: any) {
        super(props)
        this.state = {
            userData: {},
            index: ''
        }
    }

    componentDidMount() {
        let newData = this.props.user
        this.setState({
            userData: newData 
        });
    }

    handalEdit = (index: number) => {
        let newData = this.props.user[index];
        newData.index = index
        this.setState({
            userData: newData,
            index: index
        })


    }

    handalChange = (e: any) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value
            }
        })

    }

    handalDelete = (index: number) => {
        let newState = this.props.user
        newState.splice(index, 1);
        this.props.dispatch(getDataTable(newState))
        this.componentDidMount();
    }

    handalSubmit = (e: any) => {
        e.preventDefault();

        let temp_state = [...this.props.user];
        let temp_element = { ...temp_state[0] };
        temp_state[0] = temp_element;
        this.setState({
            userData: { temp_state }
        })
        
        let objIndex = this.props.user.findIndex((obj: any) => obj.index === this.state.index);
        this.props.user[objIndex] = this.state.userData
    }


    render() {
        // console.log(this.props.user)
        const user = this.props.user

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
                                <form onSubmit={(e) => this.handalSubmit(e)}>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                        <input type="texy" name="first_name" value={this.state?.userData?.first_name || ''} onChange={(e) => { this.handalChange(e) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword2" className="form-label">Last Name</label>
                                        <input type="text" name="last_name" value={this.state?.userData?.last_name || ''} onChange={(e) => { this.handalChange(e) }} className="form-control" id="exampleInputPassword2" />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword3" className="form-label">Age</label>
                                        <input type="number" name="age" value={this.state?.userData?.age || ''} onChange={(e) => { this.handalChange(e) }} className="form-control" id="exampleInputPassword3" />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword4" className="form-label">Email</label>
                                        <input type="email" name="email" value={this.state?.userData?.email || ''} onChange={(e) => { this.handalChange(e) }} className="form-control" id="exampleInputPassword4" />
                                    </div>

                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                </form>

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

                                            <button className='btn btn-info btn-sm me-1' onClick={(e) => { this.handalEdit(index) }} data-bs-toggle="modal" data-bs-target="#examplemodal2" >Edit</button>
                                            <button className='btn btn-danger btn-sm' onClick={(e) => { this.handalDelete(index) }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary" onClick={() => this.props.navigate("/form1")}>Add More Data</button>
            </>

        )
    }
}
const mapStateToProps = (state: any) => {
    //console.log(state.user)
    return { user: state.register.user }
}

export default connect(mapStateToProps, null)(withRouter(Table1))