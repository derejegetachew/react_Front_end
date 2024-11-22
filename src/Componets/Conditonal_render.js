import React, { Component } from "react";

class Conditonal_render extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isubscriber: true,
    };
  }

  render() {
    //     //if -else
    //     if (this.state.isubscriber) {
    //       return (
    //         <div>
    //           <h1>subscrib</h1>
    //         </div>
    //       );
    //     } else {
    //       return (
    //         <div>
    //           <h1>subscirbed</h1>
    //         </div>
    //       );
    //     }
    //   }
    // ternery operator
    return this.state.isubscriber ? (
      <div>
        <h1>subscrib</h1>
      </div>
    ) : (
      <div>subscirbed</div>
    );

    
  }
}

export default Conditonal_render;
