import React, {Component} from 'react';
import Header from './Header';
import './style.css';

var name = "";
var location = "";
var error = "";

class App extends Component{

  state = {
    todo:[],
    filter : ""
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

 btn_click = ()=>
    {
      if(name!=="" && location!== "")
      {
        error = "";
        const temp_arr = this.state.todo;
      const temp = {
        name:name,
        location:location
      }
      temp_arr.push(temp);
      this.setState({todo:temp_arr});
      name = "";
      location = "";
    }
    else{
      error = "Both Fields are Mandatory!!";
      this.setState({});
    }
    }
    f_name = (event)=>
    {
      name = event.target.value;
      this.setState({});
    }
    f_loc = (event)=>
    {
      location = event.target.value;
      this.setState({});
    }

  render()
  {
    var new_todo = this.state.todo;
    const { filter, todo } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    new_todo = todo.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
  return(
    <>
    <Header />
    <div>
            <div id="field">
                <div id="field_title">Add Fields to List:-)<strong id="error">{error}</strong></div>
                <div id="sub_field">
                    <input value={name} onChange={this.f_name} type="text" placeholder="Employee Name" />
                    <input value={location} onChange={this.f_loc} type="text" placeholder="Location" />
                    <button onClick={this.btn_click} id="btn">Add</button>
                </div>
            </div>
            <div id="list_field">
                <div id="list_search">
                    <span>Search for the Employee exist in List</span>
                    <input value={filter} onChange={this.handleChange} type="text" placeholder="Search Name" />
                </div>
                <div id="ul_div">
                    <ul>
                        <li><span className="left_span">Name</span><span className="right_span">Location</span></li>
                    </ul>
                </div>
                <div id="list_head">
                    <ol>
                        {
                          new_todo.map(function(data,index){
                            return <li key={index}><span className="left_span">{data.name}</span><span className="right_span">{data.location}</span></li>
                          })
                        }
                    </ol>
                </div>
            </div>
        </div>
        </>
  )
}
}

export default App;