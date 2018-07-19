import React, { Component } from 'react'
import { receipt } from './receipt'
import { TextField, Card, Checkbox, FormControlLabel } from '@material-ui/core'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      output: 0,
      input: 10,
      tip: 15,
      tax: 9,
      showCustomValues: false
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleTipInput = this.handleTipInput.bind(this)
    this.handleTaxInput = this.handleTaxInput.bind(this)
    this.handleShowCustomValues = this.handleShowCustomValues.bind(this)
  }

  componentDidMount () {
    this.calcReceipt()
  }

  calcReceipt () {
    const { input, tax, tip } = this.state
    const total = receipt(input, tax, tip)
    this.setState({
      output: total
    })
  }

  handleInput (evt) {
    this.setState({
      input: evt.target.value
    }, this.calcReceipt)
  }

  handleTipInput (evt) {
    this.setState({
      tip: evt.target.value
    }, this.calcReceipt)
  }

  handleTaxInput (evt) {
    this.setState({
      tax: evt.target.value
    }, this.calcReceipt)
  }

  handleShowCustomValues () {
    this.setState({showCustomValues: !this.state.showCustomValues})
  }

  render () {
    return (
      <Card style={{textAlign: 'center'}}>
        <p>Please enter your subtotal below:</p>
        <FormControlLabel
          label='Show custom tip and tax'
          control={
            <Checkbox
              checked={this.state.showCustomValues}
              onChange={this.handleShowCustomValues}
            />}
        />
        <br/>
        { this.state.showCustomValues
          ? <div>
            <TextField
              hidden={this.state.showCustomValues}
              type='number'
              value={this.state.tax}
              onChange={this.handleTaxInput}
              label='Tax'
            />
            <br/>
            <TextField
              hidden={this.state.showCustomValues}
              type='number'
              value={this.state.tip}
              onChange={this.handleTipInput}
              label='Tip'
            />
          </div>
          : null
        }
        <TextField
          type='number'
          value={this.state.input}
          onChange={this.handleInput}
          label='Subtotal'
        />
        <p>Total: <span>${this.state.output}</span></p>
      </Card>
    )
  }
}

export default App
