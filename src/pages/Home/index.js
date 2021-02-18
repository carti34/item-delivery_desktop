import React from 'react';
import { Link } from 'react-router-dom';
import path from 'path';
import { remote } from 'electron';

const Deliveryman = () => {
  const showNotification = () => {
    const notification = {
      title: 'Basic Notification',
      body: 'Notification from the Main process',
      icon: path.join(__dirname, '../../assets/logo.png'),
      silent: false,
    }
    new remote.Notification(notification).show();
    /* Notifier.notify({
      title: 'Basic Notification',
      message: 'Notification from the Main process',
      icon: path.join(__dirname, '../../assets/logo.png'),
    }); */
  };

  return (
    <>
      <h1>Home</h1>
      <div className="menu">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/one">
          <h2>Stand</h2>
        </Link>
        <Link to="/two">
          <h2>Sit</h2>
        </Link>
        <Link to="/deliveryman">
          <h2>Deliveryman</h2>
        </Link>
        <Link to="/deliverymenList">
          <h2>Deliverymen List</h2>
        </Link>
        <Link to="/assign">
          <h2>Assign Order</h2>
        </Link>
      </div>

      <button type="button" onClick={showNotification}>Notification</button>
    </>
  );
};

export default Deliveryman;


// https://www.electronjs.org/docs/tutorial/notifications
// https://www.electronjs.org/docs/api/notification#new-notificationoptions

// https://moinism.medium.com/push-notifications-in-electron-apps-e55f070ffbe8