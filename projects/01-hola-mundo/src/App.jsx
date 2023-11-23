import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  }, 
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false
  }, 
  {
    userName: 'liluzivert',
    name: 'Uzi London',
    isFollowing: true
  }, 
  {
    userName: 'azery0',
    name: 'Dani',
    isFollowing: true
  }, 
]



export function App () {
  return (
    <>
    <section className="App">
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return  (
            <TwitterFollowCard 
              key={userName}
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
            />
          )
        })
      }
    </section>
    </>
  )
}