import React, { useState } from 'react';
import GlobalMenu from '../../components/GlobalMenu';
import { remote } from 'electron';
import path from 'path';

const Home = () => {
  const [title, setTitle] = useState();
  const [msg, setMsg] = useState();

  const showNotification = (title, msg) => {
    const notification = {
      title: title,
      body: msg,
      icon: path.join(__dirname, '../../assets/logo.png'),
    }
    new remote.Notification(notification).show();
  }

  return (
    <>
      <GlobalMenu />
      <h1>Home</h1>
      <form>
        <div>
          <label htmlFor='title'>Título: </label>
          <input
            id='title'
            name='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='msg'>Mensagem: </label>
          <input
            id='msg'
            name='msg'
            type='text'
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>
      </form>
      <button type="button" onClick={() => showNotification(title, msg)}>Notificação</button>
    </>
  );
}

export default Home;