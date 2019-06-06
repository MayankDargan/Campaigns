import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/CampaignAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faPlus, faSignal, faFile, faCalendar } from '@fortawesome/free-solid-svg-icons'
import './CampaignList.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import string from './i18n';

class CampaignList extends Component {
  
  componentDidMount() {
    this.props.fetchCampaigns();
  }

  state = { show: false };

  handleClick(currentContext,campaign){
    
    const containerElement = document.getElementById('modal');
    currentContext.setState({show: true,selectedCampaign:campaign});
  }

  showModal = (campaign,context) => {
    context.preventDefault();
    this.setState({ show: true ,selectedCampaign:campaign});
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  scheduleAgain(event){
    console.log(event);
    debugger;
  }
  render() {
    let onHide = () => this.setState({ show: false });
    const { error, loading, campaigns } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    let ModalTitle, ModalBody;
    if(this.state.selectedCampaign === undefined){
      ModalTitle = <Modal.Title>Test</Modal.Title>;
      ModalBody = <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>;
    }else{
      let title = this.state.selectedCampaign.name;
      let country = this.state.selectedCampaign.country.join(',');
      let body = <div>
        <p><label><b>Country: </b></label> {country}</p>
        <p><label><b>Date: </b></label> {this.state.selectedCampaign.date}</p>
      </div>
      ModalTitle = <Modal.Title>{title}</Modal.Title>;
      ModalBody = <Modal.Body>{body}</Modal.Body>
    }
    let campaignRows = [];
    let countryList = "";
    let dateDiff = 0;
    campaigns.map(campaign => {
      countryList = campaign.country.join(',');
      
      if(new Date() > new Date(campaign.date)){
        dateDiff = Math.round((new Date() - new Date(campaign.date)) / (1000*60*60*24)) + " days ago";
      }else{
        dateDiff = Math.round((new Date(campaign.date) - new Date()) / (1000*60*60*24)) + " days to go";
      }
      campaignRows.push(
      <tr onClick={this.showModal.bind(this, campaign)} show={this.state.modalShow} onHide={this.hideModal} id={campaign.id} key={campaign.id}>
        <td className="campaignDate">
        <span>{campaign.date}</span>
        <small>{dateDiff}</small>
        </td>
        <td className="campaignName">
          <span>{campaign.name}</span>
          <small>{countryList}</small>
        </td>
        <td>
          <span className="view">
            <FontAwesomeIcon icon={faDollarSign} /><FontAwesomeIcon icon={faPlus} />
          </span>
          <span className="view-pricing">{string.viewPricing}</span>
        </td>
        <td>
          <div className="action">
            <span><FontAwesomeIcon icon={faFile}/></span>
            <span>{string.csv}</span>
          </div>
          <div className="action">
            <span><FontAwesomeIcon icon={faSignal}/></span>
            <span>{string.report}</span>
          </div>
          <div className="action">
            <span>
              <FontAwesomeIcon icon={faCalendar}>
                <DatePicker selected={campaign.date} id={campaign.id} onChange={()=>this.scheduleAgain(this)}></DatePicker>
              </FontAwesomeIcon>
            </span>
            <span>{string.scheduleAgain}</span>
          </div>
        </td>
      </tr>
      )
      countryList ="";
    })

    

    return (
      
      <div className="container">
      <Modal show={this.state.show} handleclose={this.hideModal} >
          <Modal.Header closeButton>
            {ModalTitle}
          </Modal.Header>
          {ModalBody}
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
          </Modal.Footer>
      </Modal>
        <div className="bodyHeader">
          <h1><span>{string.manage} </span><b>{string.campaigns}</b></h1>
        </div>
        <table className="table table-striped table-dark table-bordered">
          <thead>
            <tr>
              <th>{string.Date}</th>
              <th>{string.Campaign}</th>
              <th>{string.View}</th>
              <th>{string.Action}</th>
            </tr>
          </thead>
        <tbody>
          {campaignRows}
        </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaigns.items
});

export default connect(mapStateToProps,actions)(CampaignList);
