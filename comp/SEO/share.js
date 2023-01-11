import React from 'react'
import { Facebook, Twitter } from "react-feather"
import Link from "next/link"
import Cite from './cite'
import Modal from 'react-modal';

const Share = ({url,title,cite2,cite1}) => {
    const fb = "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fgeorgianliberty.com"
    const tw =  "https://twitter.com/intent/tweet?url=https://georgianliberty"
    const [modalIsOpen, setIsOpen] = React.useState(false);
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.5)';
    const customStyles = {
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1e1e1e',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
      };
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
    return (<>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
          <Cite cite2={cite2} />
      </Modal>
    <h3 className="share-title">{title}</h3>
        <div className="share-wrapper">
            <Link href={fb + url}><a className="share-icon-fb"><Facebook /></a></Link>
            <Link href={tw +url}><a className="share-icon-tw"><Twitter /></a></Link>
            <button onClick={openModal} className="cite-b">{cite1}</button>
        </div>
        </>
    )
}

export default Share
