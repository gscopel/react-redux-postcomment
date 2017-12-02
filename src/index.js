import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import Intro from './components/Intro'
import { Sub } from './components/containers'


const app = (
	<Provider store={store.configure(null)}>
		<div>
			<h1>Post Comment</h1>
			<Sub />
		</div>
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))
