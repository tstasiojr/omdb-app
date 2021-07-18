import React from 'react';

function MovieModal({show, onClose, children}) {

  return (
    <div className="modal show fade" style={{display:'block'}} tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
        <div className="modal-header">
            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
            </button>
        </div>
        <div className="modal-body">
            {children}
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>Close</button>
        </div>
        </div>
    </div>
    </div>

  );
}

export default MovieModal;