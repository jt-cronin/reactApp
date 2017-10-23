import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Create a component named MessageComponent
class VacancySign extends React.Component{
	render(){ 
	var text;
    if (this.props.hasvacancy) {
      text = 'Vacancy';
    } else {
      text = 'No Vacancy';
    }

	return (

		<div>{text}</div>

		);
	}
}

/**
// Here is another implementation.
var VacancySign = React.createClass({
  render: function() {
    // Notice how we use a ternary expression, which is a valid JavaScript expression.
    // Uncomment and try using this implementation. Inspect the DOM result. How is it different?
    return <div>{this.props.hasvacancy ? '' : 'No '}Vacancy</div>;
  }
});
**/
ReactDOM.render(
  <VacancySign hasvacancy={true}/>,
  document.getElementById('root')
);