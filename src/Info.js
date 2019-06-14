import React from 'react';

class Info extends React.Component{
   constructor(props){
       super(props);
       this.state={
       nom: "Marie FABIAN",
       age : 45,
       mail:"marie.fabian@gmail.com"
       }
   }
   render(){
       return(
           <div>
               <div class="col-6">
                <h2><p>my name is {this.state.nom}</p>
                <p>I have {this.state.age} years old</p>
                <p>my Email is {this.state.mail}</p></h2>
                </div>
                <div class="col-6">
                    <figure>
                        <img src="image1"></img>
                    </figure>
                </div>
        </div>
       )
   }
}


export default Info;