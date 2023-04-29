import React from "react";


export default class RegForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
    };
  }

  render() {
    
    return (
      
      <form ref={(el) => (this.myForm = el)}>
        <div><h1>Заполните форму</h1></div> 
        <div className="regForm">               
        <input
          placeholder="Имя"
          onChange={(e) => this.setState({ first_name: e.target.value })}
        />
        <input
          placeholder="Фамилия"
          onChange={(e) => this.setState({ last_name: e.target.value })}
        />
        <input
          placeholder="Email"
          onChange={(e) => this.setState({ email: e.target.value })}
        />

        <button
          type="button"
          onClick={() => {
            this.myForm.reset();            
            alert(
              "Name : " +
                this.state.first_name +
                "\n" +
                "Lastname : " +
                this.state.last_name +
                "\n" +
                "Email : " +
                this.state.email
            );
          }}
        >
          Отправить
        </button>
        </div>
      </form>
      
    );
  }
}