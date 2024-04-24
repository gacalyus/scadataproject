import * as React from 'react';
import { DateRangePicker } from 'react-date-range'
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 950,
    bgcolor: 'background.paper',
    boxShadow: 24,
    boxShadow: "0px 8px 16px 0px rgba(64, 77, 84, 0.10)",
    borderRadius: "12x",
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    gap: "18px"
};
const initialDate = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}
export default function DateModal({ show, setOpenDateModal, setEndDate, setStartDate }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpenDateModal(false)
        setOpen(false);
    }

    useEffect(() => { if (show) handleOpen() }, [show])

    // DATEVALUE
    const [state, setState] = useState([initialDate]);
    return (
        <div  >

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ fontSize: "14px", fontWeight: 500, marginLeft: "20px" }}  > Quick Select </Box>
                    <DateRangePicker
                        onChange={item => setState([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={state}
                        direction="horizontal"
                    />
                    <Box gap="10px" sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end"
                    }} >
                        <Button onClick={() => {
                            handleClose()
                            setState([initialDate])
                            setEndDate(new Date())
                            setStartDate(new Date())
                        }}
                            style={{
                                display: "flex", height: "48px", padding: "0px 16px",
                                justifyContent: "center", alignItems: "center,", borderRadius: "8px",
                                backgroundColor: "rgba(145, 158, 171, 0.08)", fontSize: "14px",
                                fontWeight: 600, color: "#5D717A", border: "none"
                            }}>CANCEL</Button>
                        <Button onClick={() => {
                            if (state[0].startDate) {
                                setEndDate(state[0].endDate)
                                setStartDate(state[0].startDate)
                            }
                            handleClose()
                        }}
                            style={{
                                display: "flex", height: "48px", padding: "0px 16px",
                                justifyContent: "center", alignItems: "center,", borderRadius: "8px",
                                backgroundColor: "#11A6E6", fontSize: "14px",
                                fontWeight: 600, color: "#FFF", border: "none"
                            }}>APPLY</Button>
                    </Box>
                </Box>

            </Modal>
        </div >
    );
}