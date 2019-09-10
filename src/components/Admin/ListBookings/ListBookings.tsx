import React from "react";
import './scss/ListBookings.scss';

interface IListBookingProps {
    reservationProps: IListBookingDetails[],
    removeReservation(index: any): any,
    editReservationState(index: any): any,
    submitBooking(dataToBeEdited: any): void,
    editReservationProps: boolean,
}

export interface IListBookingDetails {
    Date: any,
    Time: any,
    Guests: any,
    Name: any,
    Phone: any,
    Email: any,
    ReservationID: any,
    CustomerID: any,
    isInEditMode: boolean;
}

interface IListBookingState {
    editReservationProps: boolean,
    reservationsState: IListBookingDetails[]
}

class ListBookings extends React.Component<IListBookingProps, IListBookingState>  {

    constructor(props: any) {
        super(props);

        this.state = {
            reservationsState: [],
            editReservationProps: false
        }

        this.handleEditNameChange = this.handleEditNameChange.bind(this);
        this.handleEditDateChange = this.handleEditDateChange.bind(this);
        this.handleEditTimeChange = this.handleEditTimeChange.bind(this);
        this.handleEditEmailChange = this.handleEditEmailChange.bind(this);
        this.handleEditGuestChange = this.handleEditGuestChange.bind(this);
        this.handleEditPhoneChange = this.handleEditPhoneChange.bind(this);
    }

    handleRemoveReservation(index: number) {
        this.props.removeReservation(index)
    }

    handleEditReservation(index: any): void {
        let reservations = this.state.reservationsState;
        reservations[index].isInEditMode = true;
        this.setState({ reservationsState: reservations });
    }

    handleEditNameChange(e: any) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let reservations = this.state.reservationsState;
        reservations[target.tabIndex].Name = value;
        console.log(reservations[target.tabIndex]);

        this.setState({
            reservationsState: reservations
        });
    }

    handleEditDateChange(e: any) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let reservations = this.state.reservationsState;
        reservations[target.tabIndex].Date = value;

        this.setState({
            reservationsState: reservations
        });
    }

    handleEditPhoneChange(e: any) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let reservations = this.state.reservationsState;
        reservations[target.tabIndex].Phone = value;

        this.setState({
            reservationsState: reservations
        });
    }

    handleEditEmailChange(e: any) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let reservations = this.state.reservationsState;
        reservations[target.tabIndex].Email = value;

        this.setState({
            reservationsState: reservations
        });
    }

    handleEditTimeChange(e: any) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let reservations = this.state.reservationsState;
        reservations[target.tabIndex].Time = value;

        this.setState({
            reservationsState: reservations
        });
    }

    handleEditGuestChange(e: any) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let reservations = this.state.reservationsState;
        reservations[target.tabIndex].Guests = value;

        this.setState({
            reservationsState: reservations
        });
    }

    submitEditBooking(dataToBeEdited: any): void {
        this.props.submitBooking(dataToBeEdited);
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.reservationProps != null && prevProps.reservationProps !== this.props.reservationProps) {
            this.setState({
                reservationsState: this.props.reservationProps
            });
        }
    }

    render() {
        let reservationListPresentation: any[] = [];

        for (let index = 0; index < this.state.reservationsState.length; index++) {

            if (!this.state.reservationsState[index].isInEditMode) {
                reservationListPresentation.push(
                    <li key={index}>
                        ReservationID: {this.state.reservationsState[index].ReservationID}
                        Name: {this.state.reservationsState[index].Name}
                        Email: {this.state.reservationsState[index].Email}
                        Phone: {this.state.reservationsState[index].Phone}
                        Date: {this.state.reservationsState[index].Date}
                        Time: {this.state.reservationsState[index].Time}
                        Guests: {this.state.reservationsState[index].Guests}
                        <button onClick={this.handleRemoveReservation.bind(this, this.state.reservationsState[index].ReservationID)} className="removeReservation">Remove</button>
                        <button
                            onClick={this.handleEditReservation.bind(this, index)
                            }>Edit</button>
                    </li>
                )
            }
            else {
                reservationListPresentation.push(
                    <li key={index}>
                        <form onSubmit={this.submitEditBooking.bind(this, this.state.reservationsState[index])}>
                            ReservationID: {this.state.reservationsState[index].ReservationID}
                            <input type="text" name="Name" tabIndex={index} id="" value={this.state.reservationsState[index].Name} onChange={this.handleEditNameChange} />
                            <input type="text" name="Email" tabIndex={index} id="" value={this.state.reservationsState[index].Email} onChange={this.handleEditEmailChange} />
                            <input type="text" name="Phone" tabIndex={index} id="" value={this.state.reservationsState[index].Phone} onChange={this.handleEditPhoneChange} />
                            <input type="date" name="Date" tabIndex={index} id="" value={this.state.reservationsState[index].Date} onChange={this.handleEditDateChange} />

                            <select name="Time" value={this.state.reservationsState[index].Time} tabIndex={index} onChange={this.handleEditTimeChange}>
                                <option value="18">18</option>
                                <option value="21">21</option>
                            </select>

                            <select name="Guests" tabIndex={index} value={this.state.reservationsState[index].Guests} onChange={this.handleEditGuestChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            <button type="submit">Save</button>
                        </form>
                    </li>
                )
            }
        }

        let output = reservationListPresentation;

        return (
            <div>
                <ul>
                    {output}
                </ul>
            </div>

        )
    }
}

export default ListBookings;