import { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Redux/ActionCreator/ActionCreator'
import { withRouter } from './WithRouter'

interface IUser {
    first_name: string,
    last_name: string,
    age: string | number,
    email: string,
    password: string

}

interface MyState {
    // count: number; // like this
    student: IUser;
    //data:IUser[];
};

class Form1 extends Component<any, MyState>{
    state: MyState
    constructor(props: any) {
        super(props)
        this.state = {
            student: {
                first_name: "",
                last_name: "",
                age: "",
                email: "",
                password: "",
            },
            //data:[]
        }

    }
    handalChange = (e: any) => {

        const name = e.target.name;
        const value = e.target.value;
        // console.log("mydata",name,value);
        this.setState({
            student: {
                ...this.state.student,
                [name]: value
            },
            //data:[{...this.state.student,[name]:value}]

        });

    }
    handalSubmit = (e: any) => {
        e.preventDefault();

        console.log("value", this.state.student)
        console.log("props", this.props)
        let value = this.props.state;
        value.push(this.state.student)
        // this.props.dispatch(getDataTable(value));
        // dispatch(getDataTable(value))
        this.props.addTodo(value);
        this.props.navigate("/table1")
    }
    render() {
        //console.log(this.state.student)
        // console.log("props",this.props)
        return (
            <div className="container ">
                <div className='row'>
                    <div className="col-6">
                        <form className="position-absolute top-50 start-50 translate-middle border border-1 p-3" onSubmit={(e) => { this.handalSubmit(e) }}>
                            <h1>React form class component using typeScript</h1>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                <input type="texy" name="first_name" onChange={(e) => { this.handalChange(e) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword2" className="form-label">Last Name</label>
                                <input type="text" name="last_name" onChange={(e) => { this.handalChange(e) }} className="form-control" id="exampleInputPassword2" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword3" className="form-label">Age</label>
                                <input type="number" name="age" onChange={(e) => { this.handalChange(e) }} className="form-control" id="exampleInputPassword3" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword4" className="form-label">Email</label>
                                <input type="email" name="email" onChange={(e) => { this.handalChange(e) }} className="form-control" id="exampleInputPassword4" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword5" className="form-label">Password</label>
                                <input type="password" name="password" autoComplete="on" onChange={(e) => { this.handalChange(e) }} className="form-control" id="exampleInputPassword5" />
                            </div>
                            <button type="submit" className="btn btn-primary" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    console.log("state", state)
    return {
        state: state.user
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addTodo: (todo: any) => {
            //console.log("todom",todo)
            dispatch(addTodo(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter (Form1))

// const withConnect = connect(mapStateToProps, mapDispatchToProps);
// export default compose(withConnect)(Form1)
