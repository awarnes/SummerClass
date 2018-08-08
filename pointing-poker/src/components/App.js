import React, { Component } from 'react'
import fireApp from '../firebase'
import firebase from 'firebase'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import PlayerSignIn from './PlayerSignIn';
import Game from './Game'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      descriptionText: '',
      players: {},
      userActive: false,
      userName: '',
      activeUid: '',
      showVotes: false
    }
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user && this.state.userName) {
        fireApp.database().ref(`users/${user.uid}`).set({
          points: '',
          name: this.state.userName
        })
        .then(() => fireApp.database().ref('users/').once('value'))
        .then(snapshot => snapshot.val())
        .then(data => {
          this.setState({
            players: data,
            userActive: true,
            activeUid: user.uid 
          })
        })
        .catch((err) => console.error("This is error: ", Error(err)))
      } else if (user) {
        fireApp.database().ref('users/').once('value')
          .then(snapshot => snapshot.val())
          .then(data => {
            this.setState({
              players: data,
              userActive: true,
              activeUid: user.uid 
            })
          })
          .catch((err) => console.error("This is error: ", Error(err)))
      }
    })

    fireApp.database().ref('users/').on('value', this.updatePlayers)
    fireApp.database().ref('showVotes/').on('value', (snapshot) => {
      this.setState({
        showVotes: snapshot.val()
      })
    })
  }

  componentWillUnmount () {
    fireApp.database().ref('users/').off(this.updatePlayers)
  }

  updatePlayers = (snapshot) => {
    this.setState({
      players: snapshot.val()
    })
  }

  authUser = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => firebase.auth().signInAnonymously())
      .catch(err => console.error(Error(err)))
  }

  signOut = () => {
    const {activeUid} = this.state
    firebase.auth().currentUser.delete()
      .then((snapshot) => {
        this.setState({
          userActive: false,
          userName: '',
          activeUid: '',
        })
      })
      .then(() => {
        return fireApp.database().ref('users/' + activeUid).remove()
      })
      
      .catch(err => console.error(Error(err)))
  }

  updateDescription = (evt) => {
    this.setState({descriptionText: evt.target.value})
  }

  showVotes = () => {
    this.setState({showVotes: !this.state.showVotes}, () => {
      fireApp.database().ref('showVotes/').set(this.state.showVotes)
    })
  }
  clearVotes = () => {
    const updates = {}
    Object.keys(this.state.players).forEach((uid) => {
      updates[`users/${uid}/points`] = ''
    })
    updates['showVotes/'] = false
    fireApp.database().ref().update(updates)
  }

  updatePoints = (points) => {
    fireApp.database().ref(`users/${this.state.activeUid}/points`).set(points)
  }

  updateUserName = (evt) => {
    this.setState({userName: evt.target.value})
  }

  render () {
    const { descriptionText, userActive, userName, activeUid, players, showVotes } = this.state
    return (
      <Router>
        <div>
          <Route exact path='/' render={(props) => {
            return (userActive ? <Redirect to={'/game'} /> :
            <PlayerSignIn
              {...props}
              userName={userName}
              updateUserName={this.updateUserName}
              authUser={this.authUser}
            />)
            }}/>

          <Route exact path='/game' render={(props) => {
            return (userActive ?
            <Game
              {...props}
              descriptionText={descriptionText}
              activeUid={activeUid}
              players={players}
              showVotes={showVotes}
              updatePoints={this.updatePoints}
              updateDescription={this.updateDescription}
              showVotesFunc={this.showVotes}
              clearVotes={this.clearVotes}
              signOut={this.signOut}
            />
            :
            <Redirect to={'/'} />
          )}}
          />
        </div>
      </Router>
    )
  }
}

export default App
