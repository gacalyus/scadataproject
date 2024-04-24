import React from "react";
import infoIcon from "../../assets/images/Dashboard/infoIcon.svg"
import { useTranslation } from "react-i18next";
import Tooltip from '@mui/material/Tooltip';


export default function LineInfo({ roiInfo }) {
    const { t } = useTranslation();
    if (roiInfo == null)
        return;

    const info = [
        { title: "Monthly", first: roiInfo.monthly, label: roiInfo.monthlyDifference },
        { title: "Weekly", first: roiInfo.weekly, label: roiInfo.weeklyDifference },
        { title: "Daily", first: roiInfo.daily, label: roiInfo.dailyDifference }
    ]
    return (
        <div style={{
            display: " flex",
            padding: "24px",
            flexDirection: "column",
            gap: "29px",
            border: " 1px solid var(--grey-200, #E9EEF0)",
            borderRadius: "8px"
        }} >
            <div style={{ display: 'flex', alignItems: 'center', gap: "14px" }} >
                <span style={{ fontSize: '14px' }}> {t('returnInvestment')} </span>
                <span>
                    <Tooltip title={t('info_returnOnInvestment')}>
                        <img src={infoIcon} alt="" />
                    </Tooltip> </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: "80%", justifyContent: "space-between" }} >
                <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <span style={{ fontSize: '12px', color: '#91A1A9' }}> {t('youSave')} ($)</span>
                    <span style={{ fontSize: '16px', fontWeight: 500 }}>{roiInfo?.youSave} %</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <span style={{ fontSize: '12px', color: '#91A1A9' }}> {t('annualBillSavings')} </span>
                    <span style={{ fontSize: '16px', fontWeight: 500 }}>
                        $ 80.000
                        {/* {roiInfo?.annualBillSavings}  */}
                    </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <span style={{ fontSize: '12px', color: '#91A1A9' }}>{t('payBackIn')}  </span>
                    <span style={{ fontSize: '16px', fontWeight: 500 }}>
                        6.9 {t('years')}
                        {/* {roiInfo?.payBackIn}  */}
                    </span>
                </div>
            </div>
        </div  >
    )

}