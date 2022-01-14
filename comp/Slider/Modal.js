import React from 'react'
import styles from "../../styles/slider.module.css";
const Modal = ({setIsOpen}) => {
    return (
    <>
        <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>Dialog</h5>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                close
            </button>
            <div className={styles.modalContent}>
              MY PP IS BIG(L.K)
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                  Close
                </button>                
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
export default Modal
