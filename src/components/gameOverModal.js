import React from 'react';
import Button from '@material-ui/core/Button';

const GameOverModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <Button className="play-again-btn" onClick={handleClose} 
          variant="contained" color="primary">
          Play Again
        </Button>
      </section>
    </div>
  );
};

export default GameOverModal;