import './Info.sass';
import { useGlobal } from 'reactn';
import logo from "/Clover's favicon.png";
import Config from '../../../config';

function Info() {
  const version = useGlobal('version')[0];

  return (
    <div className="info">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="Picture" />
        </div>
        <div className="text">
          Welcome to
          {' '}
          {Config.appName || "Madhav's Clover"}
          !
          <br />
          <br />
          {Config.appName || "Madhav's Clover"}
          {' '}
          is a messaging app that enables real-time messaging, audio and video calls,
          groups and conferencing.
        </div>
      </div>
      <div className="text">
        Copyright &copy;
        {' '}
        {Config.brand || 'Honeyside'}
        <br />
        v
        {version}
      </div>
    </div>
  );
}

export default Info;
