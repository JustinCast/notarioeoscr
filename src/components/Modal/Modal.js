import React from 'react'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    height: '100%',
    width: '100%',
    outlineWidth: 0,
    [theme.breakpoints.up('sm')]: {
      height: '58%',
      width: '70%'
    }
  },
  closeIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& svg': {
      fontSize: 25,
      color: theme.palette.secondary.main
    }
  },
  bodyWrapper: {
    height: '90%',
    padding: theme.spacing(0, 2)
  }
}))

const MapModal = ({ openModal, setOpenModal, children }) => {
  const classes = useStyles()

  const handleOpen = () => {
    setOpenModal(!openModal)
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={handleOpen}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={openModal}>
        <Paper className={classes.paper}>
          <Box className={classes.closeIcon}>
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleOpen}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Box>
          <Box className={classes.bodyWrapper}>{children}</Box>
        </Paper>
      </Fade>
    </Modal>
  )
}

MapModal.propTypes = {
  openModal: PropTypes.bool,
  children: PropTypes.array,
  setOpenModal: PropTypes.func
}

MapModal.defaultProps = {
  openModal: false
}

export default MapModal
