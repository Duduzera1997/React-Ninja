import React, { Component } from 'react';
import SumTest from './test/sum-test';

class App extends Component {
	teste = () => {
        console.log(SumTest(1, 2))
        //console.log('All tests Passed!')
	};
	render() {
		this.teste();
		
		return <h1>Aplicação</h1>;
	}
}
export default App;
