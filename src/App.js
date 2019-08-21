import React from 'react';
import './App.css';
import FoodieFacts from './components/FoodieFacts';

class App extends React.Component {
state = {
  result: {
    Calories:'?',
    TotalFat:'?',
    SaturatedFat:'?',
    TransFat:'?',
    Cholesterol:'?',
    Sodium:'?',
    TotalCarbs:'?',
    DietaryFiber:'?',
    Sugar:'?',
    Protein:'?'
  },
  search: "",
  // calories: this.calories
};


handleSubmit = async e => {
  if (e) e.preventDefault();
  const theSearch = await this.state.search;
  const convertSearch =  await theSearch.replace(/\s/g, "%20")
  console.log(convertSearch);
  //fix http
  await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/food-database/parser?ingr=${convertSearch}&app_id=358719e1&app_key=c377a018f504c251bf14f19f60c9f4e4`,
  {
    // mode:'no-cors',
  headers: {
    'Cache-Control' :'no-cache',
    
    'Host' : 'api.edamam.com',
    'Accept-Encoding':'gzip, deflate',
    'Content-Length':'36',
    'Connection':'keep-alive'
    }}
  // ).then(res => res.json()).then(res => console.log(res.hints[0].food.nutrients.ENERC_KCAL))
  ).then(res => res.json()).then(res => this.setState({result : {
    Calories :res.hints[0].food.nutrients.ENERC_KCAL,
    TotalFat :res.hints[0].food.nutrients.FAT,
SaturatedFat:res.hints[0].food.nutrients.FASAT,
TransFat:res.hints[0].food.nutrients.FATTR,
Cholesterol:res.hints[0].food.nutrients.CHOLE,
Sodium:res.hints[0].food.nutrients.NA,
TotalCarbs:res.hints[0].food.nutrients.CHOCDF,
DietaryFiber:res.hints[0].food.nutrients.FIBTG,
Sugars:res.hints[0].food.nutrients.SUGAR,
Protein:res.hints[0].food.nutrients.PROCNT}}))

  // console.log(calories);
 }
//  {
//   name: this.props.show.name,
//   rating: this.props.show.rating,
//   img: this.props.show.img
// }



// .then(results => this.setState({result: results}))   
//<script src="https://developer.edamam.com/attribution/badge.js"></script>
 



  render() {
  return (
    <div className="App">


      <form onSubmit={this.handleSubmit}>
     <input 
     type="text"
     name="search"
     placeholer="search...foodies?"
     value={this.state.search}
     onChange={event =>
    this.setState({ search : event.target.value})}
     required
     />
     <button type="submit">show me potato salad!</button>
</form>
<div className="nutriFactBox">
<FoodieFacts result={this.state.result}/>
</div>
    </div>
  );
}
}
export default App;
