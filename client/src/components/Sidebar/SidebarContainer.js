import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Sidebar } from './index'
import { searchUsers, readMessages } from '../../store/utils/thunkCreators'
import { clearSearchedUsers } from '../../store/conversations'
import { setActiveChat } from '../../store/activeConversation';

const SidebarContainer = (props) => {
  const { searchUsers, clearSearchedUsers, handleLogout, setActiveChat, readMessage, conversations,
    activeConversation, user } = props

  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = async (event) => {
    if (event.target.value === '') {
      // clear searched convos from redux store
      clearSearchedUsers()
      setSearchTerm('')
      return
    }
    if (searchTerm.includes(event.target.value)) {
      // if new value is included in search term, we don't need to make another API call, just need to set the search term value so the conversations can be filtered in the rendering
      setSearchTerm(event.target.value)
      return
    }
    await searchUsers(event.target.value)
    setSearchTerm(event.target.value)
  }

  return (
    <Sidebar
      handleChange={handleChange}
      searchTerm={searchTerm}
      handleLogout={handleLogout}
      setActiveChat={setActiveChat}
      readMessage={readMessage}
      conversations={conversations}
      activeConversation={activeConversation}
      user={user}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
    user: state.user,
    activeConversation: state.activeConversation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUsers: (username) => {
      dispatch(searchUsers(username))
    },
    clearSearchedUsers: () => {
      dispatch(clearSearchedUsers())
    },
    setActiveChat: (id) => {
      dispatch(setActiveChat(id));
    },
    readMessage: (body) => {
      dispatch(readMessages(body));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)
