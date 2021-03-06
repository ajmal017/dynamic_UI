import React from 'react';
import '../../App.css';
import {
    Card, CardText,
    CardTitle
} from 'reactstrap';
import { MdEmail, MdPhone, MdDateRange, MdFlag } from 'react-icons/md'
import { FaAddressCard } from 'react-icons/fa'

import NclAlerts from '../chart/alert';
import M2MClient from '../chart/M2MChart';
import SecurityBalance from '../chart/fundnsec';
import TradeData1 from '../chart/TradeData1';
import ShareholdingVolume from '../chart/shareholding_volume';
import SebiAlerts from "../chart/sebialerts";
import TradeDiscrepancy from "../chart/tradediscrepancy";


class ClientProfile extends React.Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="bprofile">
                <div className="p-3 my-2 rounded client-profiling">
                    <div className="client-detail">

                        <Card className="client-card" id='client-card'>
                            <div className="client-body">
                                <CardTitle className="client-title">
                                    <strong> {this.props.data.profile[0].ClientName}</strong><hr className="seperator-client" />
                                </CardTitle>

                                <div className="contact-details">

                                    <CardText className="pan"><FaAddressCard className="icons" /><strong>PAN:</strong> {this.props.data.profile[0].PAN}<span title="Duplicate PAN" className="tooltiptext"><MdFlag className="icons-flag" /></span></CardText>

                                        <CardText className="phone"><MdDateRange /><strong>DOB: </strong>06/02/1998</CardText>
                                        <CardText className="email"><MdEmail className="icons" />
                                            <a href={"mailto:" + this.props.data.profile[0].Email}>{this.props.data.profile[0].Email}</a>
                                        </CardText>
                                        <CardText className="phone"> <MdPhone className="icons" /> 91 {this.props.data.profile[0].Phone}</CardText>
                                </div>


                            </div>
                        </Card>


                            <Card className="client-card2" id="client-card2">

                                <div className="contact-details2">

                                    <CardText className="ucc"><strong className="company-name">Address </strong>
                                    </CardText>
                                    <CardText> {this.props.data.profile[0].Address} <span className="vertical-line"></span></CardText>

                                    <CardText className="tmcode"><strong>Bank Name:</strong> {this.props.data.profile[0].BankName}
                                        {/* {this.props.data.profile[0].TMCode} */}
                                    </CardText>
                                    <CardText> <strong>Account Number:</strong> {this.props.data.profile[0].AccountNumber}</CardText>
                                    {/* <CardText className="tmcode">
                                {this.props.data.profile[0].TMCode}
                                </CardText> */}

                                </div>

                            </Card>
                            <Card className="client-card3" id="client-card3">

                                <div className="fund-details">
                                    <CardTitle className="funds-title"><strong></strong></CardTitle>
                                    {/* <CardText className="phone">End of Day Fund Balance: {this.props.data.profile[0].EODFundBalance}</CardText> */}
                                    <CardText><strong>Demat A/c:</strong> {this.props.data.profile[0].DematAccountNo}</CardText>
                                    <CardText><strong>Client Category:</strong> {this.props.data.profile[0].ClientCategory}</CardText>
                                    <CardText><strong>Trade Member Name:</strong> {this.props.data.profile[0].TradeMemberName}</CardText>
                                    <CardText><strong>Depository Name:</strong> {this.props.data.profile[0].DepositoryName}</CardText>
                                    <CardText><strong>Beneficiary Name:</strong> {this.props.data.profile[0].BeneficiaryName}</CardText>
                                    {/* <CardText className="address">NSE Fund Balance: {this.props.data.profile[0].FundBalanceNSE}</CardText> */}
                                </div>

                            </Card>
                    </div>

                        <div className="data-row-1">
                            <TradeData1 data={this.props.data.trades} />
                        </div>

                        <div className="data-row-2">
                            <div className="pledged">
                                <SecurityBalance data={this.props.data.pledged} />
                            </div>
                            <div className="daily">
                                <ShareholdingVolume data={this.props.data.trades} />
                            </div>
                        </div>

                        <div className="data-row-3">
                            <div className="m2mclient" >
                                <M2MClient data={this.props.data.m2m} />
                            </div>

                            <div className="alerts-row-1">
                                <div className="nclalerts1">
                                    <TradeDiscrepancy data={this.props.data.tradedesc} />
                                </div>
                                <div className="data-row-3-1">
                                    <div className="nclalerts">
                                        <SebiAlerts data={this.props.data.sebialerts} />
                                    </div>
                                    <div className="nclalerts">
                                        <NclAlerts data={this.props.data.alerts} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            // </div>
        );
    }
}

export default ClientProfile;
