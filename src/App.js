import React, { Component } from "react";
import SelectBox from "./features/select-box";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Custom Select Box using ReactJS</h1>
        <div style={{ margin: "16px", position: "relative" }}>
          <SelectBox
            width={200}
            name="country_id"
            items={[
              { value: "India", id: 1 },
              { value: "United States", id: 2 },
              { value: "United Kingdom", id: 3 },
              { value: "Germany", id: 4 }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
