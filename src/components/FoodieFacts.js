import React from "react";
import "./FF.css";

class FoodieFacts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return(   
          <div> 
<section className="performance-facts">
  <header className="performance-facts__header">
    <h1 className="performance-facts__title">Nutrition Facts</h1>
    <p>Serving Size 1 </p>
  </header>

  <table className="performance-facts__table">
    <thead>
      <tr>
        <th colspan="3" className="small-info"/>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th colspan="2">
          <b>Calories</b>
        </th>
        <td>
          <b>{this.props.result.Calories}</b>
        </td>
      </tr>
      <tr className="thick-row">
        <td colspan="3" className="small-info">
          <b></b>
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <b>Total Fat</b>
        </th>
        <td>
          <b>{this.props.result.TotalFat}</b>
        </td>
      </tr>
      <tr>
        <td className="blank-cell">
        </td>
        <th>
          Saturated Fat
        </th>
        <td>
          <b>{this.props.result.SaturatedFat}</b>
        </td>
      </tr>
      <tr>
        <td className="blank-cell">
        </td>
        <th>
          Trans Fat
        </th>
        <b>{this.props.result.TransFat}</b>
        <td>
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <b>Cholesterol</b>
        </th>
        <td>
          <b>{this.props.result.Cholesterol}</b>
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <b>Sodium</b>
        </th>
        <td>
          <b>{this.props.result.Sodium}</b>
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <b>Total Carbohydrate</b>
        </th>
        <td>
          <b>{this.props.result.TotalCarbs}</b>
        </td>
      </tr>
      <tr>
        <td className="blank-cell">
        </td>
        <th>
          Dietary Fiber
        </th>
        <td>
          <b>{this.props.result.DietaryFiber}</b>
        </td>
      </tr>
      <tr>
        <td className="blank-cell">
        </td>
        <th>
          Sugars
        </th>
        <b>{this.props.result.Sugar}</b>
        <td>
        </td>
      </tr>
      <tr className="thick-end">
        <th colspan="2">
          <b>Protein</b>
        </th>
        <b>{this.props.result.Protein}</b>
        <td>
        </td>
      </tr>
    </tbody>
  </table>
</section>
      </div>
      )
  }
    
};
export default FoodieFacts;
