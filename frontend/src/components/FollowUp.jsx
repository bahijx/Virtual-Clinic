const FollowUpButton = ({ appointmentId, requestFollowUp }) => {
    return (
      <button onClick={() => requestFollowUp(appointmentId)}>Request a Follow Up</button>
    );
  };
  