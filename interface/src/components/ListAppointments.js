import React, { Component } from 'react';

class ListAppointments extends Component {
    render() {
        const listItems = this.props.appointments.map(item => (
            <div>
              <div>{item.petName}</div>
              <div>{item.ownerName}</div>
            </div>
          ));
        return (
            <div className= "appointment-list item-list mb-3">
                <div className= "pet-item col media py-3">
                    <div className= "mr-3">
                        <button className= "pet-delete btn btn-sm btn-danger">X</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ListAppointments;